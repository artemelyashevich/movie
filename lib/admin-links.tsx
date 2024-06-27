import { IAdminLink } from '@/types/admin.type';
import { IoIosHome, IoIosFolderOpen, IoIosAddCircle } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOutSharp, IoCameraSharp } from 'react-icons/io5';

const basicClassName =
    'w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900';

export const adminLinks: IAdminLink[] = [
    {
        title: 'Dashboard',
        value: '/home',
        icon: <IoIosHome className={basicClassName} />
    },
    {
        title: 'Movies',
        value: '/movies',
        icon: <IoCameraSharp className={basicClassName} />
    },
    {
        title: 'Add',
        value: '/add',
        icon: <IoIosAddCircle className={basicClassName} />
    },
    {
        title: 'Draft',
        value: '/draft',
        icon: <IoIosFolderOpen className={basicClassName} />
    }
];

export const adminUserLinks: IAdminLink[] = [
    {
        title: 'Profile',
        value: '/profile',
        icon: <FaUserAlt className={basicClassName} />
    }
];
