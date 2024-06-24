import { axiosWithToken } from '@/api/axios';
import { IMovie } from '@/types/movie.type';

export class MovieService {
    private static URL: string = '/movies';

    public static async getAllMovies() {
        const response = await axiosWithToken.get(this.URL);
        return response.data;
    }

    public static async create(data: IMovie): Promise<IMovie> {
        const response = await axiosWithToken.post(this.URL, data);
        return response.data;
    }

    public static async getById(movieId: string): Promise<IMovie> {
        const response = await axiosWithToken.get(`${this.URL}/${movieId}`);
        return response.data;
    }

    public static async update(movieId: string, data: IMovie): Promise<IMovie> {
        await axiosWithToken.patch(`${this.URL}/${movieId}`, data);
        return this.getById(movieId);
    }

    public static async delete(movieId: string): Promise<void> {
        await axiosWithToken.delete(`${this.URL}/${movieId}`);
    }
}
