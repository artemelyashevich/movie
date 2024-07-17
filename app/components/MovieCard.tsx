import { IMovie } from '@/types/movie.type';
import { Eye, Heart, Star } from 'lucide-react';
import Image from 'next/image';

export function MovieCard({ movie }: { movie: IMovie }) {
    return (
        <div className="flex flex-col pb-3 font-bold h-full justify-between">
            <Image
                src={movie.imgUrl}
                alt={movie.title}
                width={400}
                height={400}
                className="h-6/7 w-full object-cover border-t rounded-lg"
            />
            <div className="flex flex-col">
                <h2 className="text-2xl">{movie.title}</h2>
                <div className="flex justify-between items-center">
                    <h3>{movie.releaseYear}</h3>
                    <div className="flex gap-2 text-lg items-center">
                        <Heart />
                        <Eye />
                        <p className='flex items-center gap-1'>
                            5 <Star color='gold'/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
