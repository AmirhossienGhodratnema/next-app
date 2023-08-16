import { useRouter } from "next/router"

export default function Component() {
    const router = useRouter();
    const id = router.query.id;
    return (
        <>
            <h1>Student {id} Course</h1>
            <h1>React</h1>
            <h1>Next</h1>
            <h1>ExpressJs</h1>

        </>
    )
};
