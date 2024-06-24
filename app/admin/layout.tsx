import { AdminFooter } from '../components/admin/AdminFooter';
import { AdminHeader } from '../components/admin/AdminHeader';
import { AdminLeftBar } from '../components/admin/AdminLeftBar';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AdminLeftBar />
                <div className="p-4 sm:ml-64">
                    <AdminHeader />
                    {children}
                    <AdminFooter />
                </div>
            </body>
        </html>
    );
}
