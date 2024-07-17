'use client';

import { useMovies } from '@/hooks/useMovies';
import { CarouselMovies } from './components/CarouselMovies';
import { Header } from './components/Heder';
import { MovieCardsRender } from './components/MovieCardsRender';

export default function Home() {
    const { data, isLoading } = useMovies({});
    return (
        <div className="">
            <Header />
            <main className="w-full relative z-10">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    data && (
                        <div>
                            <CarouselMovies data={data.slice(0, 3)} />
                            <MovieCardsRender data={data} />
                        </div>
                    )
                )}
            </main>
        </div>
    );
}
