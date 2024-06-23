'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

export function AdminMovieCard() {
    return (
        <div className="p-5 border-gray border-2 rounded-sm shadow-md">
            <div className="flex items-start gap-6">
                <Image
                    height={'400'}
                    width={'400'}
                    className="object-center max-w-40 rounded-sm"
                    src={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGC-DWPIn_XXfY9Tf6Yd6Xz5-teUn7HZagg&s'
                    }
                    alt="avatar"
                />
                <div className="flex flex-col items-baseline gap-2 justify-between">
                    <h1 className="text-lg font-bold text-black">
                        Форест Гамп
                    </h1>
                    <p className="text-sm ">Комедия/Романтика </p>
                    <Link
                        className='my-5"'
                        href="https://www.youtube.com/watch?v=ya_zgmvhKuM"
                    >
                        https://www.youtube.com/watch?v=ya_zgmvhKuM
                    </Link>
                    <p className="flex items-center justify-start gap-2">
                        <FaStar /> <span>5</span>
                    </p>
                    <div className="flex gap-10 mt-10">
                        <Button variant={'blue'}>Update movie</Button>
                        <Button>Delete movie</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
