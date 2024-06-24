import { axiosWithToken } from '@/api/axios';
import { IGenre } from '@/types/category.type';

export class GenreService {
    private static URL: string = '/genres';

    public static async getAll(): Promise<IGenre[]> {
        const response = await axiosWithToken.get(this.URL);
        return response.data;
    }

    public static async create(data: IGenre): Promise<IGenre> {
        const response = await axiosWithToken.post(this.URL, data);
        return response.data;
    }

    public static async getById(genreId: string): Promise<IGenre> {
        const response = await axiosWithToken.get(`${this.URL}/${genreId}`);
        return response.data;
    }

    public static async update(genreId: string, data: IGenre): Promise<IGenre> {
        await axiosWithToken.patch(`${this.URL}/${genreId}`, data);
        return this.getById(genreId);
    }

    public static async delete(genreId: string): Promise<void> {
        await axiosWithToken.delete(`${this.URL}/${genreId}`);
    }
}
