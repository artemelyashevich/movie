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
        <header className="flex relative z-20 justify-between items-center p-5 text-xl border-b border-black bg-[#4444]">
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
                            <Link href={category.title.toLowerCase()} key={idx}>
                                {category.title}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
