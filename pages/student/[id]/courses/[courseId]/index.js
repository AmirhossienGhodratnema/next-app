import { useRouter } from "next/router"

export default function UserCourseId() {
    const router = useRouter();
    const { id, courseId } = router.query;
    return (
        <>
            <h1>Student {id} Course {courseId}</h1>

        </>
    )
};
