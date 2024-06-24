import { AdminMoviesRender } from '@/app/components/admin/AdminMoviesRender';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function AdminMovies() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl my-2 font-bold	">
                    List Of Published Movies
                </h1>
                <Link href={'/admin/add'}>
                    <Button variant={'blue'}>Add movie</Button>
                </Link>
            </div>
            <Separator className="w-1/4 h-1" />
            <div className="my-4 flex flex-col justify-center text-center gap-3">
                <AdminMoviesRender />
            </div>
        </div>
    );
}
