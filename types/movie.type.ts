import { ICategory, IGenre } from './category.type';
import { EnumQuality, EnumRating, EnumSize, EnumStatus } from './enums';

export interface IMovie {
    id: string;
    title: string;
    description: string;
    rating: EnumRating;
    duration: string;
    watchLink: string;
    quality: EnumQuality;
    status: EnumStatus;
    releaseYear: number;
    languages: string[];
    subtitle: string;
    bannerImgUrl: string;
    imgUrl: string;
    size: EnumSize;
    genres: IGenre[];
    categories: ICategory[];
    createdAt: string;
    updatedAt: string;
}

export type TMovieFormState = Omit<IMovie, 'id' | 'createdAt' | 'updatedAt'>;
