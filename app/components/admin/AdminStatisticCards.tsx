'use client';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useCategories } from '@/hooks/useCategories';
import { useGenres } from '@/hooks/useGenres';
import { adminCards } from '@/lib/admin-cards';
import { IAdminCard } from '@/types/admin.type';
import { useEffect, useState } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';

export function AdminStatisticCards() {
    const { data: genres, isLoading: isGenresLoading } = useGenres();
    const { data: categories, isLoading: isCategoriesLoading } =
        useCategories();
    adminCards[0].value = localStorage.getItem('MOVIES_LENGTH') as string;
    adminCards[1].value = categories?.length;
    adminCards[2].value = genres?.length;
    // TODO: implements movies with 'DRAFT' status
    return (
        <div className="flex justify-center items-center gap-2 my-4">
            {isCategoriesLoading || isGenresLoading ? (
                <p>Loading</p>
            ) : (
                adminCards.map((item: IAdminCard, index: number) => (
                    <Card key={index} className="w-1/4 p-5 shadow-md">
                        <CardTitle className="text-sm flex items-center justify-between">
                            {item.icon}
                            <p className="text-lg">{item.title}</p>
                            <SlOptionsVertical className="cursor-pointer text-lg hover:scale-[1.1]" />
                        </CardTitle>
                        <CardContent className="flex items-center justify-between">
                            <img src={'/chart.png'} />
                            <p className="bg-gray-200 p-2 rounded-full">
                                {item.value}
                            </p>
                        </CardContent>
                    </Card>
                ))
            )}
        </div>
    );
}
