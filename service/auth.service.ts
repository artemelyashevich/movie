import { axiosDefault } from '@/api/axios';
import { IAuthResponse, TAuthFormLogin } from '@/types/auth.type';
import { TokenService } from './token.service';

export class AuthService {
    static async login(data: TAuthFormLogin) {
        const response = await axiosDefault.post<IAuthResponse>(
            '/auth/sign-in',
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
