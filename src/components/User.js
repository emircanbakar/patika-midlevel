function User( {name, surname, isLoggedIn}) {
    return (
        <h1>
            {
                isLoggedIn ? `${name} ${surname}` : "giriş yapılmadı"
            }
        </h1>
    )
}

export default User;