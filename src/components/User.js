import PropTypes from "prop-types"

function User({ name, surname, age, isLoggedIn, friends  }) {
    return (
        <>
            <h1>
                {
                    isLoggedIn ? `${name} ${surname} (${age})`  : "giriş yapılmadı"
                }
            </h1>
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
    friends: PropTypes.array
}

export default User;