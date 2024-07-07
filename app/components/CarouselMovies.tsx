'use client';

import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem} from '@/components/ui/carousel';
import { useMovies } from '@/hooks/useMovies';
import { IMovie } from '@/types/movie.type';
import { Loader2, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function CarouselMovies() {
    const { data, isLoading } = useMovies({ page: 0, size: 3 });
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true
                })
            ]}
            opts={{ loop: true }}
            className="w-full relative top-[-6rem]"
        >
            {isLoading ? (
                <Loader2>Loading</Loader2>
            ) : (
                <CarouselContent className="select-none">
                    {data?.map((movie: IMovie, idx: number) => (
                        <CarouselItem key={idx} className="w-full">
                            <div className="relative h-[650px]">
                                <Image
                                    src={movie.bannerImgUrl}
                                    fill
                                    priority={false}
                                    quality={100}
                                    className="f-full object-cover w-full z-0 "
                                    alt={movie.title}
                                />
                                <div className="absolute z-10 bottom-10 left-10">
                                    <div className="flex items-start gap-5">
                                        <Image
                                            src={movie.imgUrl}
                                            height={50}
                                            width={200}
                                            alt={movie.title}
                                            className="rounded-lg "
                                        />
                                        <div className="pt-5 text-white flex flex-col gap-3 ">
                                            <h1 className="text-4xl font-bold">
                                                {movie.title}
                                            </h1>
                                            <p>
                                                <span className="font-bold">
                                                    Duration:
                                                </span>{' '}
                                                {movie.duration}
                                            </p>
                                            <div className="flex gap-1">
                                                <Star color="gold" />
                                                <span>{movie.rating}</span>
                                                <span>
                                                    {movie.genres
                                                        .map(genre =>
                                                            genre.title.toLocaleLowerCase()
                                                        )
                                                        .join(', ')}
                                                </span>
                                            </div>
                                            <Link href={`movie/${movie.id}`}>
                                                <Button
                                                    className="w-3/4 mt-2"
                                                    variant={'red'}
                                                >
                                                    Visit Movie
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            )}
        </Carousel>
    );
}
