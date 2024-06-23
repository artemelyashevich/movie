import { adminLinks, adminUserLinks } from '@/lib/admin-links';
import { IAdminLink } from '@/types/admin.type';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export function AdminLeftBar() {
    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                <ul className="space-y-2 font-medium">
                    {adminLinks.map((link: IAdminLink, index: number) => (
                        <li key={index}>
                            <Link
                                href={`/admin${link.value}`}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
                            >
                                {link.icon}
                                <span className="ms-3">{link.title}</span>
                            </Link>
                        </li>
                    ))}
                    <div className="flex h-5 items-center space-x-4 text-lg">
                        <Separator />
                    </div>
                    {adminUserLinks.map((link: IAdminLink, index: number) => (
                        <li key={index}>
                            <Link
                                href={`/admin${link.value}`}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
                            >
                                {link.icon}
                                <span className="ms-3">{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
