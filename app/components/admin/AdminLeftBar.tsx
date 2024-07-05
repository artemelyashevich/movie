'use client';

import { adminLinks, adminUserLinks } from '@/lib/admin-links';
import { IAdminLink } from '@/types/admin.type';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { IoLogOutSharp } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/service/auth.service';
import { toast } from 'sonner';
import { DASHBOARD_PAGES } from '@/config/pages-url.config';
import { usePathname } from 'next/navigation';

export function AdminLeftBar() {
    const { push } = useRouter();
    const pathname = usePathname();

    const { mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: () => AuthService.logout(),
        onSuccess: () => {
            toast.success('Successfully logout!');
            push(DASHBOARD_PAGES.ADMIN_AUTH);
        }
    });

    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                <ul className="space-y-2 font-medium">
                    {adminLinks.map((link: IAdminLink, index: number) => (
                        <li key={index}>
                            <Link
                                href={`/admin${link.value}`}
                                className={`${
                                    pathname.includes(link.value) &&
                                    'bg-blue-100'
                                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group`}
                            >
                                {link.icon}
                                <span className="ms-3">{link.title}</span>
                            </Link>
                        </li>
                    ))}
                    <div className="flex h-5 items-center space-x-4 text-lg">
                        <Separator className='h-[2px]'/>
                    </div>
                    {adminUserLinks.map((link: IAdminLink, index: number) => (
                        <li key={index}>
                            <Link
                                href={`/admin${link.value}`}
                                className={`${
                                    pathname.includes(link.value) &&
                                    'bg-blue-100'
                                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group`}
                            >
                                {link.icon}
                                <span className="ms-3">{link.title}</span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <div
                            onClick={() => {
                                mutate();
                            }}
                            className="flex cursor-pointer items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group"
                        >
                            <IoLogOutSharp className=" w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                            <span className="ms-3">Logout</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
