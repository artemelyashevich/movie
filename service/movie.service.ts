import { axiosDefault, axiosWithToken } from '@/api/axios';
import { IMovie, TMovieFormState } from '@/types/movie.type';

export class MovieService {
    private static readonly URL: string = '/movies';

    public static async getAllMovies(
        categoryName: string = '',
        genreName: string = '',
        statusName: string = '',
        query: string = ''
    ) {
        console.log(query);

        const response = await axiosDefault.get(
            `${this.URL}?query=${query}&categoryName=${categoryName}&genreName=${genreName}&statusName=${statusName}`
        );
        return response.data;
    }

    public static async getAllPaginated(
        page: number = 1,
        size: number = 1
    ): Promise<IMovie> {
        const response = await axiosDefault.get(
            `${this.URL}/paginated?page=${page}&size=${size}`
        );
        return response.data.content;
    }

    public static async create(data: TMovieFormState): Promise<IMovie> {
        const response = await axiosWithToken.post(this.URL, data);
        return response.data;
    }

    public static async getById(movieId: string): Promise<IMovie> {
        const response = await axiosWithToken.get(`${this.URL}/${movieId}`);
        return response.data;
    }

    public static async getAllByStatusName(
        statusName: string
    ): Promise<IMovie[]> {
        const response = await axiosWithToken.get(
            `${this.URL}/status/${statusName}`
        );
        return response.data;
    }

    public static async update(
        movieId: string,
        data: TMovieFormState
    ): Promise<IMovie> {
        await axiosWithToken.patch(`${this.URL}/${movieId}`, data);
        return this.getById(movieId);
    }

    public static async delete(movieId: string): Promise<void> {
        await axiosWithToken.delete(`${this.URL}/${movieId}`);
    }
}
