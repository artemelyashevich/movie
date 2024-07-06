'use client';

import { MovieService } from '@/service/movie.service';
import { useQuery } from '@tanstack/react-query';

export function useMovies({ page, size }: { page?: number; size?: number }) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['getMovies'],
        queryFn: () =>
            page || size
                ? MovieService.getAllPaginated(page, size)
                : MovieService.getAllMovies(),
        retry: false
    });

    return { data, isLoading, isError };
}
