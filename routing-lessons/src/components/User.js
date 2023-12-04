import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function User() {
    const { userId } = useParams()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => setUser(res.data))
            .finally(() => setLoading(false))
    }, [userId])
    return (
        <div>
            <h2>USERS PAGE</h2>

            {
                !loading && JSON.stringify(`Name: ${user.name}    ////    UserName: ${user.username} ////  E-mail: ${user.email}   ////   Phone: ${user.phone} `)

            }
            <button><Link to={`/users/user/${parseInt(userId) + 1}`}>Next User ({parseInt(userId) + 1}) </Link></button>
            <br />
            <button><Link to={`/users/user/${parseInt(userId) - 1}`}>Previous User  ({parseInt(userId) - 1}) </Link></button>
        </div>
    )
}

export default User
