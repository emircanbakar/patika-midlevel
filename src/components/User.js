import PropTypes from "prop-types"

function User({ name, surname, age, isLoggedIn, friends, address }) {

    if (!isLoggedIn){
        return <div>Giriş Yapmadınız.</div>
    }
    return (
        <>
            <h1>
                {
                    `${name} ${surname} (${age})` 
                }
            </h1>
            {address.title} {address.zip}

            <br />
            {
                friends && friends.map((friend) => <div key={friend.id}>{friend.id}- {friend.name} </div>)
            }
        </>
    )
}

// number olarak gelen name propunu string olarak bekliyor 
User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    age: PropTypes.oneOfType([
       PropTypes.number,
       PropTypes.string
    ]),
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    }),

}


User.defaultProps ={
    isLoggedIn: false,
}
export default User;