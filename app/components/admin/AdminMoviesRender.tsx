'use client';

import { IMovie } from '@/types/movie.type';
import { AdminMovieCard } from './AdminMovieCard';

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
                <>Loading...</>
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
