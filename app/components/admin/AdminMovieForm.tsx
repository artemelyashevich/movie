'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from '@/components/ui/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormFieldComponent } from '@/app/components/admin/FormFieldComponent';
import {
    SelectContent,
    Select,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { EnumQuality, EnumSize, EnumStatus } from '@/types/enums';
import { useMutation } from '@tanstack/react-query';
import { MovieService } from '@/service/movie.service';
import { IMovie, TMovieFormState } from '@/types/movie.type';

export function AdminMovieForm({
    isCreate,
    movie
}: {
    isCreate: boolean;
    movie?: IMovie;
}) {
    const form = useForm();
    const { mutate: create } = useMutation({
        mutationFn: (data: TMovieFormState) => MovieService.create(data),
        mutationKey: ['movieCreate']
    });
    const { mutate: update } = useMutation({
        mutationFn: (data: TMovieFormState) =>
            MovieService.update(String(movie?.id), data),
        mutationKey: ['movieUpdate']
    });
    const onSubmit: SubmitHandler<TMovieFormState> = (
        data: TMovieFormState
    ) => {
        isCreate ? create(data) : update(data);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6 w-4/5 grid gap-8 grid-cols-2"
            >
                <FormFieldComponent
                    form={form}
                    value={movie?.title}
                    name="title"
                    title="Title"
                />
                <FormFieldComponent
                    form={form}
                    name="description"
                    title="Description"
                    value={movie?.description}
                />
                <FormFieldComponent
                    form={form}
                    name="rating"
                    title="Rating"
                    type="number"
                    value={movie?.rating}
                />
                <FormFieldComponent
                    form={form}
                    name="duration"
                    title="Duration"
                    type="number"
                    value={movie?.duration}
                />
                <FormFieldComponent
                    form={form}
                    name="watchLink"
                    title="Watch Link"
                    type="url"
                    value={movie?.watchLink}
                />

                <FormFieldComponent
                    form={form}
                    name="releaseYear"
                    title="Release Year"
                    type="number"
                    value={String(movie?.releaseYear || '')}
                />
                <FormFieldComponent
                    form={form}
                    name="subtitle"
                    title="SubTitle"
                    value={movie?.subtitle}
                />
                <FormFieldComponent
                    form={form}
                    name="bannerImgUrl"
                    title="Banner Image Url"
                    type="url"
                    value={movie?.bannerImgUrl}
                />
                <FormFieldComponent
                    form={form}
                    name="imgUrl"
                    title="Image Url"
                    type="url"
                    value={movie?.imgUrl}
                />

                <FormFieldComponent
                    form={form}
                    value={String(movie?.genres.join(' , '))}
                    name="genres"
                    title="Genres"
                />
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
                    className="w-full m-auto font-medium"
                    variant={'blue'}
                    type="submit"
                >
                    Save
                </Button>
            </form>
        </Form>
    );
}
