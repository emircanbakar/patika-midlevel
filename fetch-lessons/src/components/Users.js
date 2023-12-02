import React from 'react'
import { useEffect, useState } from 'react'
import axios  from "axios"

function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) =>
                setUsers(res.data)
            )
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div>
            <span>Users</span>
            {
                isLoading && <> Loading...</>
            }
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
}

export default Users
