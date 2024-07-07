'use client';

import { AdminMovieForm } from '@/app/components/admin/AdminMovieForm';
import { Separator } from '@/components/ui/separator';
import { MovieService } from '@/service/movie.service';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

export default function AdminMoviePage({ params }: { params: { id: string } }) {
    const { data, isLoading } = useQuery({
        queryKey: ['movie-get-by-id'],
        queryFn: () => MovieService.getById(params.id),
        retry: false
    });
    return (
        <div>
            <h1 className="text-2xl mb-1 font-bold">
                Edit movie:
                <span className="text-blue-700"> {data?.title}</span>
            </h1>
            <Separator className="w-1/4 h-1 bg-blue-500 mb-10" />
            <div className="my-4 flex flex-col justify-center text-center gap-3">
                <div className="flex gap-[4rem] items-center w-full">
                    <div className="w-3/5 pb-2 bg-gray-200 rounded-xl">
                        <Image
                            src={data?.bannerImgUrl || 'https://www.'}
                            className="w-full rounded-t-xl"
                            alt="default banner"
                            width={1000}
                            height={500}
                        />
                        <h2 className="mt-2 font-bold">
                            Background image preview
                        </h2>
                    </div>
                    <div className="bg-gray-200 rounded-xl pb-2">
                        <Image
                            src={data?.imgUrl || ''}
                            className="w-full rounded-t-xl"
                            alt="default banner"
                            width={150}
                            height={50}
                        />
                        <h2 className="mt-2 font-bold">Poster preview</h2>
                    </div>
                </div>
                <div className="mt-5 bg-gray-200 p-5 rounded-xl text-left">
                    <AdminMovieForm isCreate={false} movie={data} />
                </div>
            </div>
        </div>
    );
}
