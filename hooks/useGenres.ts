import { GenreService } from '@/service/genre.service';
import { useQuery } from '@tanstack/react-query';

export function useGenres() {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['genres'],
        queryFn: () => GenreService.getAll(),
        retry: false
    });
    return { data, isError, isLoading };
}
