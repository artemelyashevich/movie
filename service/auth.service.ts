import { axiosDefault } from '@/api/axios';
import { IAuthForm, IAuthResponse } from '@/types/auth.type';
import { TokenService } from './token.service';

export class AuthService {
    static async auth(type: 'sign-in' | 'sign-up', data: IAuthForm) {
        const response = await axiosDefault.post<IAuthResponse>(
            `/auth/${type}`,
            data
        );
        if (response.data.accessToken) {
            TokenService.saveToken(response.data.accessToken);
        }
        return response;
    }

    static async logout() {
        const response = await axiosDefault.post<boolean>('/logout');
        if (response.data) {
            TokenService.removeToken();
        }
    }
}
