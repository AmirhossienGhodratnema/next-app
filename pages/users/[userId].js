import { useRouter } from "next/router"



export default function User() {
    const router = useRouter();
    const id = router.query.userId
    return (
        <>
            <h1>User {id} </h1>
        </>
    )
}