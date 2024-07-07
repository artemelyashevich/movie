'use client';

import { AdminMoviesRender } from '@/app/components/admin/AdminMoviesRender';
import { AdminSearch } from '@/app/components/admin/AdminSearch';
import { PaginationControls } from '@/app/components/PaginationControls';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useMovies } from '@/hooks/useMovies';
import { IMovie } from '@/types/movie.type';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminMovies() {
    const searchParams = useSearchParams();
    const page = searchParams.get('page') || 0;
    const query = searchParams.get('query') || '';
    const size = 3;
    const [movies, setMovies] = useState<IMovie[]>([]);
    const { data, isLoading } = useMovies({
        page: Number(page),
        size: Number(size),
        query: query
    });
    useEffect(() => {
        setMovies(data);
    }, [data, query, page]);
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl my-2 font-bold">
                    List Of Published Movies
                </h1>
                <Link href="/admin/add">
                    <Button variant="blue">Add movie</Button>
                </Link>
            </div>
            <Separator className="w-1/4 h-1 mb-4" />
            <AdminSearch />

            <div className="my-4 flex flex-col justify-center text-center gap-3">
                <AdminMoviesRender data={movies} isLoading={isLoading} />
                <PaginationControls />
            </div>
        </div>
    );
}
