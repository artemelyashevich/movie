'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { adminCards } from '@/lib/admin-cards';
import { IAdminCard } from '@/types/admin.type';
import { SlOptionsVertical } from 'react-icons/sl';

export function AdminStatisticCards() {
    return (
        <div className="flex justify-center items-center gap-2 my-4">
            {adminCards.map((item: IAdminCard, index: number) => (
                <Card key={index} className="w-1/4 p-5">
                    <CardTitle className="text-sm flex items-center justify-between">
                        {item.icon}
                        <p className="text-lg">{item.title}</p>
                        <SlOptionsVertical className="cursor-pointer text-lg" />
                    </CardTitle>
                    <CardContent className="flex items-center justify-between">
                        <img src={'/chart.png'} />
                        <p className="bg-gray-200 p-2 rounded-full">
                            {item.value}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
