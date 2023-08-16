import { useRouter } from "next/router"


export default function Articles() {
  const router = useRouter();
  console.log(router.query)
  return (
    <>
        <h1>Article page</h1>
        <h1>{router.query.slug}</h1>
    </>
  )
};
