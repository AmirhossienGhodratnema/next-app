import Link from "next/link"

const data = [
    { id: 1, name: 'Amrihossein', lastName: 'Ghodratnema' },
    { id: 2, name: 'Milad', lastName: 'Nemayan' },
    { id: 3, name: 'Abolfazl', lastName: 'Seriyani' },
    { id: 4, name: 'Hadi', lastName: 'Ghodratnema' },
    { id: 5, name: 'Morteza', lastName: 'Alishahi' },
]
export default function UsersList() {
    return (
        <>
            <h1>Users list</h1>
            <ul>
                {
                    data?.map(user => (
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name} {user.lastName}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}