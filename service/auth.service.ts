import { axiosDefault } from '@/api/axios';
import { IAuthForm, IAuthResponse } from '@/types/auth.type';
import { TokenService } from './token.service';

export class AuthService {
    public static async auth(type: 'sign-in' | 'sign-up', data: IAuthForm) {
        const response = await axiosDefault.post<IAuthResponse>(
            `/auth/${type}`,
            data
        );
        if (response.data.token) {
            TokenService.saveToken(response.data.token);
        }
        return response;
    }

    public static async logout() {
        TokenService.removeToken();
    }
}
