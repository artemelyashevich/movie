'use client';

import { MovieService } from '@/service/movie.service';
import { useQuery } from '@tanstack/react-query';

export function useMovies({
    page,
    size,
    query
}: {
    page?: number;
    size?: number;
    query?: string;
}) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['getMovies', query, page],
        queryFn: () =>
            query
                ? MovieService.getAllMovies('', '', '', (query = query))
                : (page || size) ? MovieService.getAllPaginated(page, size)
                : MovieService.getAllMovies(),
        retry: false
    });

    return { data, isLoading, isError };
}
