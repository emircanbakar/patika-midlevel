import React from 'react'
import { Routes, Route , Outlet, NavLink, useLocation} from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from "axios"
import User from './User'

function Users() {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .finally(() => setLoading(false))
    }, [])

    const location = useLocation()
    console.log(location)

    return (
        <div>
            <h1>Users</h1>
            {loading && <h2>Loading...</h2>}

            <ul className="users">
                {
                    users.map(user =>
                        <li key={user.id}>
                            <NavLink to={`/users/user/${user.id}`} style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>{user.name}</NavLink>

                        </li>
                    )
                }
            </ul>
            <Outlet />
            <Routes>
                <Route path='user/:userId' element={<User />} />
            </Routes>

        </div>
    )
}

export default Users
