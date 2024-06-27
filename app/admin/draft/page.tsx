'use client';

import { AdminMovieCard } from '@/app/components/admin/AdminMovieCard';
import { Button } from '@/components/ui/button';
import { MovieService } from '@/service/movie.service';
import { EnumStatus } from '@/types/enums';
import { IMovie } from '@/types/movie.type';
import { Separator } from '@radix-ui/react-separator';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function Draft() {
    const { data, isLoading } = useQuery({
        queryKey: ['getMoviesByStatus'],
        queryFn: () => MovieService.getAllByStatusName(EnumStatus.DRAFT),
        retry: false
    });

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl my-2 font-bold	">
                    List Of Draft Movies
                </h1>
                <Link href={'/admin/add'}>
                    <Button variant={'blue'}>Add movie</Button>
                </Link>
            </div>
            <Separator className="w-1/4 h-1 bg-blue-500 mb-4" />
            <div className="my-4 flex flex-col justify-center text-center gap-3">
                {isLoading ? (
                    <>Loading...</>
                ) : (
                    data &&
                    data.map((movie: IMovie, index: number) => (
                        <AdminMovieCard key={index} movie={movie} />
                    ))
                )}
            </div>
        </div>
    );
}
