import { EnumToken } from '@/types/enums';
import Cookies from 'js-cookie';

export class TokenService {
    static getAccessToken = () => {
        const accessToken = Cookies.get(EnumToken.ACCESS_TOKEN);
        return accessToken || null;
    };

    static saveToken = (accessToken: string) => {
        Cookies.set(EnumToken.ACCESS_TOKEN, accessToken, {
            domain: 'localhost',
            nameSite: 'strict',
            expires: 1
        });
    };

    static removeToken = () => {
        Cookies.remove(EnumToken.ACCESS_TOKEN);
    };
}
