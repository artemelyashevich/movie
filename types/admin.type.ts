import { ReactElement } from 'react';

export interface IAdminLink {
    title: string;
    value: string;
    icon: ReactElement;
}

export interface IAdminCard {
    title: string;
    icon: ReactElement;
    value?: number | string;
}

