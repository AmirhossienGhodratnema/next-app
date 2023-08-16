import { useRouter } from "next/router"

export default function StudentId() {
    const router = useRouter();
    const id = router.query.id;
  return (
    <>
        <h1>Student {id}</h1>
    </>
  )
};
