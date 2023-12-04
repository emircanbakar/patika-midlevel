import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Error404() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 5000);
    }, [navigate])
    return (
        <div>
            <h1>This page is not founded, <br /> you will be redirected HOME page.. </h1>
        </div>
    )
}

export default Error404