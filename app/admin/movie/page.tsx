'use client';

import { AdminMovieCard } from '@/app/components/admin/AdminMovieCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MovieService } from '@/service/movie.service';
import { IMovie } from '@/types/movie.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminMovies() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const { data, isLoading } = useQuery({
        queryKey: ['getMovies'],
        queryFn: () => MovieService.getAllMovies()
    });
    useEffect(()=> {
        console.log(data);
    }, [])
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl my-2 font-bold	">
                    List Of Published Movies
                </h1>
                <Link href={'/admin/add'}>
                    <Button variant={'blue'}>Add movie</Button>
                </Link>
            </div>
            <Separator className="w-1/4 h-1" />
            <div className="my-4 flex flex-col justify-center text-center gap-3">
                <AdminMovieCard />
                <AdminMovieCard />
                <AdminMovieCard />
            </div>
        </div>
    );
}
