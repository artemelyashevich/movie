import { Separator } from '@/components/ui/separator';
import { AddForm } from './AddForm';

export default function Add() {
    return (
        <div>
            <h1 className="text-2xl my-2 font-bold	">Add Movie</h1>
            <Separator className="w-1/5 h-1 bg-blue-500 mb-5" />
            <AddForm />
        </div>
    );
}
