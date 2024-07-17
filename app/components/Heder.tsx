'use client';

import { useGenres } from '@/hooks/useGenres';
import { SearchComponent } from './SearchComponent';
import { Loader } from 'lucide-react';
import { ICategory, IGenre } from '@/types/category.type';
import Link from 'next/link';
import { useCategories } from '@/hooks/useCategories';

export function Header() {
    const { data, isLoading } = useCategories();
    return (
        <header className="flex relative z-20 justify-between items-center p-5 text-xl bg-[#000000bf] shadow-[0_0_9px_6px_rgba(193,0,0,0.8)]">
            <div className="">
                <h1>Movies</h1>
            </div>
            <div className="w-3/4">
                <SearchComponent />
            </div>
            <nav>
                {isLoading ? (
                    <Loader>Loading...</Loader>
                ) : (
                    <div className="flex gap-8">
                        {data?.map((category: ICategory, idx: number) => (
                            <Link
                                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                                href={category.title.toLowerCase()}
                                key={idx}
                            >
                                {category.title}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
