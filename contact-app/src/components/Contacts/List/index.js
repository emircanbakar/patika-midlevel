import React from 'react'

function List({contacts}) {
  return (
    <div>
     <ul>
      {contacts.map((contacts, i)=>(
        <li key={i}> {contacts.fullname} {contacts.phone_number} </li>
      ))}
     </ul>
    </div>
  )
}

export default List
