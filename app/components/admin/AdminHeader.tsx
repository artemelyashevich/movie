import { Input } from '@/components/ui/input';
import { IoSearch } from 'react-icons/io5';

export function AdminHeader() {
    return (
        <header className="flex items-center justify-center mb-4">
            <form className="w-2/5 mx-auto">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <IoSearch className="w-4 h-4 text-gray-500 " />
                    </div>
                    <Input
                        type="search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-l"
                        placeholder="Search movies here..."
                        required
                    />
                </div>
            </form>
        </header>
    );
}
