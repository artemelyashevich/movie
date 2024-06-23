'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { FormFieldComponent } from '@/app/components/admin/FormFieldComponent';
import {
    SelectContent,
    Select,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { EnumQuality, EnumSize, EnumStatus } from '@/types/enums';

export function AddForm() {
    const form = useForm();

    return (
        <Form {...form}>
            <form className="space-y-4 md:space-y-6 w-4/5 grid gap-8 grid-cols-2">
                <FormFieldComponent form={form} name="title" title="Title" />
                <FormFieldComponent
                    form={form}
                    name="description"
                    title="Description"
                />
                <FormFieldComponent
                    form={form}
                    name="rating"
                    title="Rating"
                    type="number"
                />
                <FormFieldComponent
                    form={form}
                    name="duration"
                    title="Duration"
                    type="number"
                />
                <FormFieldComponent
                    form={form}
                    name="watchLink"
                    title="Watch Link"
                    type="url"
                />

                <FormFieldComponent
                    form={form}
                    name="releaseYear"
                    title="Release Year"
                    type="number"
                />
                <FormFieldComponent
                    form={form}
                    name="subtitle"
                    title="SubTitle"
                />
                <FormFieldComponent
                    form={form}
                    name="bannerImgUrl"
                    title="Banner Image Url"
                    type="url"
                />
                <FormFieldComponent
                    form={form}
                    name="imgUrl"
                    title="Image Url"
                    type="url"
                />

                <FormFieldComponent form={form} name="genres" title="Genres" />
                <FormFieldComponent
                    form={form}
                    name="categories"
                    title="Categories"
                />
                <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select size</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose Size" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent {...form}>
                                    <SelectItem value={EnumSize.MIN}>
                                        {EnumSize.MIN}
                                    </SelectItem>
                                    <SelectItem value={EnumSize.LOW}>
                                        {EnumSize.LOW}
                                    </SelectItem>
                                    <SelectItem value={EnumSize.MIDDLE}>
                                        {EnumSize.MIDDLE}
                                    </SelectItem>
                                    <SelectItem value={EnumSize.HIGH}>
                                        {EnumSize.HIGH}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="quality"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select quality</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose quality" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent {...form}>
                                    <SelectItem value={EnumQuality.BAD}>
                                        {EnumQuality.BAD}
                                    </SelectItem>
                                    <SelectItem value={EnumQuality.LOW}>
                                        {EnumQuality.LOW}
                                    </SelectItem>
                                    <SelectItem value={EnumQuality.HIGH}>
                                        {EnumQuality.HIGH}
                                    </SelectItem>
                                    <SelectItem value={EnumQuality.NORMAL}>
                                        {EnumQuality.NORMAL}
                                    </SelectItem>
                                    <SelectItem value={EnumQuality.ULTRA}>
                                        {EnumQuality.ULTRA}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose status" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value={EnumStatus.DRAFT}>
                                        {EnumStatus.DRAFT}
                                    </SelectItem>
                                    <SelectItem value={EnumStatus.PUBLISHED}>
                                        {EnumStatus.PUBLISHED}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <Button
                    className="w-full font-medium"
                    variant={'blue'}
                    type="submit"
                >
                    Save
                </Button>
            </form>
        </Form>
    );
}
