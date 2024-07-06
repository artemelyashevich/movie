'use client';

import { Button } from '@/components/ui/button';
import { ICategory } from '@/types/category.type';
import { IMovie } from '@/types/movie.type';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

export function AdminMovieCard({ movie }: { movie?: IMovie }) {  
    return (
        <div className="p-5 border-gray border-2 rounded-sm shadow-md">
            <div className="flex items-start gap-6">
                <Image
                    height={'400'}
                    width={'400'}
                    className="object-center max-w-40 rounded-sm"
                    src={movie?.imgUrl || ''}
                    alt="avatar"
                />
                <div className="flex flex-col items-baseline gap-2 justify-between">
                    <h1 className="text-lg font-bold text-black">
                        {movie?.title}
                    </h1>
                    <p className="text-sm flex gap-1">
                        {movie?.categories.map(
                            (category: ICategory, index: number) => (
                                <span key={index}>{category.title}</span>
                            )
                        )}
                    </p>
                    <Link className='my-5"' href={movie?.watchLink || ''}>
                        {movie?.watchLink}
                    </Link>
                    <p className="flex items-center justify-start gap-2">
                        <FaStar /> <span>{movie?.rating}</span>
                    </p>
                    <div className="flex gap-10 mt-10">
                        <Link href={`/admin/movies/${movie?.id}`}>
                            <Button variant={'blue'}>Update movie</Button>
                        </Link>
                        <Button
                            variant={'secondary'}
                            className="border-2 hover:bg-red-500 hover:text-white"
                        >
                            Delete movie
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
