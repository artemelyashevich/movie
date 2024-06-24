'use client';

import { MovieService } from '@/service/movie.service';
import { useQuery } from '@tanstack/react-query';

export function useMovies() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['getMovies'],
        queryFn: () => MovieService.getAllMovies(),
        retry: false
    });

    return { data, isLoading, isError };
}
