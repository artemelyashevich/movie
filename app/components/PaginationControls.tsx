'use client';

import { useSearchParams, usePathname } from 'next/navigation';
import React from 'react';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export async function PaginationControls() {
    const router = useRouter();
    const pathName = usePathname();
    const page = useSearchParams().get('page') || 0;
    const size = 3;
    const currentPage = Number(page) || 0;
    const totalPages = Math.ceil(10 / size);

    const goToPage = async (page: number) => {
        router.push(`${pathName}?page=${page}&size=${size}`);
        setTimeout(() => location.reload(), 100);
    };

    return (
        <div className="flex gap-2 items-center">
            <Button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage + 1 === 1}
            >
                Prev Page
            </Button>
            <div>
                {currentPage + 1} / {totalPages - 2}
            </div>
            <Button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage + 1 === totalPages - 2}
            >
                Next Page
            </Button>
        </div>
    );
}
