'use client'

import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { AdminStatisticCards } from '@/app/components/admin/AdminStatisticCards';
import Link from 'next/link';
import { AdminMoviesRender } from '@/app/components/admin/AdminMoviesRender';
import { useMovies } from '@/hooks/useMovies';

export default function AdminHome() {
    const { data, isLoading } = useMovies({page: 0, size: 3});

    return (
        <div>
            <Card className="border-none bg-blue-500 text-white shadow-lg">
                <div className="p-4 border-2 border-gray-200 rounded-lg">
                    <CardHeader>
                        <CardTitle>Explore all type of movies here</CardTitle>
                        <CardDescription className="w-6/7 text-white">
                            orem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-2/5 bg-inherit border border-white hover:bg-blue-600">
                            <Check className="mr-2 h-4 w-4" /> Exclusive On
                            Movies
                        </Button>
                    </CardFooter>
                </div>
            </Card>
            <AdminStatisticCards />
            <Separator className="w-1/5 h-1" />
            <div className="flex items-center justify-between">
                <h1 className="text-lg my-2 font-medium	">Latest movies</h1>
                <Link href={'/admin/add'}>
                    <Button variant={'blue'}>Add movie</Button>
                </Link>
            </div>
            <div className="my-4 flex flex-col justify-center text-center gap-5">
                <AdminMoviesRender data={data} isLoading={isLoading} />
                <Link className="my-4" href={'/admin/movies'}>
                    <Button variant={'blue'}>Load more</Button>
                </Link>
            </div>
        </div>
    );
}
