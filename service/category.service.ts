import { axiosWithToken } from '@/api/axios';
import { ICategory } from '@/types/category.type';

export class CategoryService {
    private static URL: string = '/categories';

    public static async getAll(): Promise<ICategory[]> {
        const response = await axiosWithToken.get(this.URL);
        return response.data;
    }

    public static async create(data: ICategory): Promise<ICategory> {
        const response = await axiosWithToken.post(this.URL, data);
        return response.data;
    }

    public static async getBuId(categoryId: string): Promise<ICategory> {
        const response = await axiosWithToken.get(`${this.URL}/${categoryId}`);
        return response.data;
    }

    public static async update(
        categoryId: string,
        data: ICategory
    ): Promise<ICategory> {
        await axiosWithToken.patch(`${this.URL}/${categoryId}`, data);
        return this.getBuId(categoryId);
    }

    public static async delete(categoryId: string): Promise<void> {
        await axiosWithToken.delete(`${this.URL}/${categoryId}`);
    }
}
