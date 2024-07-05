export default function AdminMoviePage({
    params
}: {
    params: {
        id: string;
    };
}) {
    return <div>{params.id}</div>;
}
