import { AdminMovieCard } from '@/app/components/admin/AdminMovieCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';

export default function Draft() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl my-2 font-bold	">
                    List Of Draft Movies
                </h1>
                <Link href={'/admin/add'}>
                    <Button variant={'blue'}>Add movie</Button>
                </Link>
            </div>
            <Separator className="w-1/4 h-1" />
            <div className="my-4 flex flex-col justify-center text-center gap-3">
                <AdminMovieCard />
                <AdminMovieCard />
                <AdminMovieCard />
            </div>
        </div>
    );
}
