'use client';

import { IMovie } from '@/types/movie.type';
import { AdminMovieCard } from './AdminMovieCard';
import { AdminMovieCardSkeleton } from './AdminMovieCardSkeleton';

export function AdminMoviesRender({
    data,
    isLoading
}: {
    data: IMovie[];
    isLoading: boolean;
}) {
    return (
        <>
            {isLoading ? (
                <AdminMovieCardSkeleton />
            ) : (
                data &&
                data.length &&
                data.map((movie: IMovie, index: number) => (
                    <AdminMovieCard key={index} movie={movie} />
                ))
            )}
        </>
    );
}
