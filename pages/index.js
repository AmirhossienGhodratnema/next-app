import Link from "next/link";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  const logIn = () => {
    console.log('Click login');
    router.push('/users');
  };

  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li><Link href='/about'>Aboute</Link></li>
        <li><Link href='/users'>Users</Link></li>
        <li><button onClick={logIn}>LogIn</button></li>
      </ul>
    </>
  )
}
