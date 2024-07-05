import { Skeleton } from '@/components/ui/skeleton';

export function AdminMovieCardSkeleton() {
    return (
        <div>
            <div className="flex flex-col space-y-2">
                <Skeleton className="h-72 w-full rounded-lg flex items-start gap-6">
                    <Skeleton className="mt-3 h-[90%] w-2/5 bg-slate-50" />
                    <div className="flex flex-col items-baseline gap-2 justify-between">
                        <Skeleton className="h-4 w-3/4 bg-slate-50" />
                        <Skeleton className="h-4 w-1/2 bg-slate-50" />
                    </div>
                </Skeleton>
            </div>
        </div>
    );
}
