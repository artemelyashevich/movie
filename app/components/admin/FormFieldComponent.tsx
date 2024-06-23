import {
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormProps } from 'react-hook-form';

export function FormFieldComponent({
    form,
    title,
    name,
    type
}: {
    form: any;
    title: string;
    name: string;
    type?: string;
}) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{title}</FormLabel>
                    <FormControl>
                        <Input
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg "
                            placeholder={title}
                            type={type ?? 'text'}
                            {...field}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
}
