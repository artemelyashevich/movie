'use client';

import { AdminMovieCard } from '@/app/components/admin/AdminMovieCard';
import { MovieService } from '@/service/movie.service';
import { useQuery } from '@tanstack/react-query';

export default function MoviePage({ params }: { params: { id: string } }) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['movie-get-by-id'],
        queryFn: () => MovieService.getById(params.id),
        retry: false
    });
    console.log(params.id);
    return <>{isLoading ? <>Loading...</> : <AdminMovieCard movie={data} />}</>;
}