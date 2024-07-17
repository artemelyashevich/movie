import { IMovie } from '@/types/movie.type';
import { MovieCard } from './MovieCard';

export function MovieCardsRender({ data }: { data: IMovie[] }) {
    return (
        <div className="w-full px-20">
            {data && (
                <div className="grid lg:grid-cols-4 sm:grid-cold-3 md:grid-cols-3 grid-cols-2 gap-6 mt-8 w-full">
                    {data.map((movie: IMovie, idx: number) => (
                        <MovieCard key={idx} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}
