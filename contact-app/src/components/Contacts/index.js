import React, { useEffect } from 'react'
import List from "./List"
import Form from "./Form"
import { useState } from 'react'
import "./style.css"

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Mehmet",
            phone_number: "12331"
        },
        {
            fullname: "Ahmet",
            phone_number: "14995" 
        }

    ]);
    useEffect(() =>{
        console.log(contacts)
    }, [contacts])
    
    return (
        <div id='container'>
            <h2>Contacts</h2>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;
