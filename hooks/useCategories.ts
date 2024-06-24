'use client';

import { CategoryService } from '@/service/category.service';
import { useQuery } from '@tanstack/react-query';

export function useCategories() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['categoies'],
        queryFn: () => CategoryService.getAll(),
        retry: false
    });
    return { data, isLoading, isError };
}
