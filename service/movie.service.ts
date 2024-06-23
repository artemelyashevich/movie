import { axiosWithToken } from "@/api/axios";

export class MovieService {

    public static async getAllMovies() {
        const response = await axiosWithToken.get("/movies")
        return response.data
    }
}