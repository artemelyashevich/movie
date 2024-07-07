'use client';

import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IoSearch } from 'react-icons/io5';

export function AdminSearch() {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathName}?${params.toString()}`);
    }
    return (
        <div>
            <form className="w-2/5 mx-auto">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <IoSearch className="w-4 h-4 text-gray-500 " />
                    </div>
                    <Input
                        onChange={e => {
                            handleSearch(e.target.value);
                        }}
                        defaultValue={searchParams.get('query')?.toString()}
                        type="search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-l"
                        placeholder="Search movies here..."
                        required
                    />
                </div>
            </form>
        </div>
    );
}
