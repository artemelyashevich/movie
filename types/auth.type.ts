export interface IAuthFormRegister {
    username: string;
    email: string;
    password: string;
}

export type TAuthFormLogin = Omit<IAuthFormRegister, 'email'>;

export interface IAuthResponse {
    accessToken: string;
}
