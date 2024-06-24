'use client';

import { useMovies } from '@/hooks/useMovies';
import { IMovie } from '@/types/movie.type';
import { AdminMovieCard } from './AdminMovieCard';
import { useEffect } from 'react';

export function AdminMoviesRender() {
    const { data, isLoading } = useMovies();
    useEffect(()=> {
        localStorage.setItem("MOVIES_LENGTH", data?.length)
    }, [data])

    return (
        <>
            {isLoading ? (
                <>Loading...</>
            ) : (
                data.length &&
                data.map((movie: IMovie, index: number) => (
                    <AdminMovieCard key={index} movie={movie} />
                ))
            )}
        </>
    );
}
