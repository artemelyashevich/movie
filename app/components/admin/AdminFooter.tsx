import { Separator } from '@/components/ui/separator';

export function AdminFooter() {
    return (
        <footer className="my-4">
            <Separator className="h-1 my-5 w-1/4" />
            <p>
                Created by
                <a href="https://github.com/artemelyashevich">
                     © Artem Elyashevich
                </a>
            </p>
        </footer>
    );
}
