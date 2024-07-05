import { Skeleton } from '@/components/ui/skeleton';

export default function AdminMoviesLoading() {
    return (
        <div className="w-full mx-auto mt-10">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="w-full h-[550px] mt-5" />
        </div>
    );
}
