import { IAdminCard } from '@/types/admin.type';
import {
    BiSolidMoviePlay,
    BiCategory,
    BiImages,
    BiSolidLockOpenAlt
} from 'react-icons/bi';

const basicClassName = 'text-lg cursor-pointer';

export const adminCards: IAdminCard[] = [
    {
        icon: <BiSolidMoviePlay className={basicClassName} />,
        title: 'Total Movies',
        value: 5
    },
    {
        title: 'Category',
        icon: <BiCategory className={basicClassName} />,
        value: 5
    },
    {
        title: 'All Genre',
        icon: <BiImages className={basicClassName} />,
        value: 5
    },
    {
        title: 'Draft Movies',
        icon: <BiSolidLockOpenAlt className={basicClassName} />,
        value: 5
    }
];
