'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { DASHBOARD_PAGES } from '@/config/pages-url.config';
import { AuthService } from '@/service/auth.service';
import { IAuthForm } from '@/types/auth.type';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function Auth() {
    const form = useForm<IAuthForm>();

    const [isLogin, setIsLogin] = useState<boolean>(false);

    const { push } = useRouter();

    const { mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: IAuthForm) =>
            AuthService.auth(isLogin ? 'sign-in' : 'sign-up', data),
        onSuccess: () => {
            toast.success('Successfully login!');
            form.reset();
            push(DASHBOARD_PAGES.HOME);
        }
    });

    const onSubmit: SubmitHandler<IAuthForm> = data => {
        mutate(data);
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-lg text-center">
                        {' '}
                        {isLogin ? 'Login' : 'Register'}
                    </h1>
                    <Form {...form}>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            {!isLogin && (
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg "
                                                    placeholder="Username"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            )}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg "
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg "
                                                placeholder="Password"
                                                type="password"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button
                                className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="submit"
                            >
                                {isLogin ? 'Login' : 'Register'}
                            </Button>
                            <p
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-sm font-light text-gray-500 dark:text-gray-400"
                            >
                                Don’t have an account yet?
                                <span className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    {isLogin ? ' Login' : ' Register'}
                                </span>
                            </p>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
