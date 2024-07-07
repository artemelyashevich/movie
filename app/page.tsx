import { CarouselMovies } from './components/CarouselMovies';
import { Header } from './components/Heder';

export default function Home() {
    return (
        <div className="">
            <Header />
            <main className="w-full relative  z-10">
                <CarouselMovies/>
            </main>
        </div>
    );
}
