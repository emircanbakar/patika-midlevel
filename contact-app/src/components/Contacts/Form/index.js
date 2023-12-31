import React, { useEffect, useState } from 'react'
import "../style.css"

const initialFormValues = { fullname: "", phone_number: "" }
function Form({addContact, contacts}) {
    const [form, setForm] = useState(initialFormValues)
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setForm(initialFormValues) //submit edildikten sonra inputların içi boş kalsın.
    }, [contacts])

    const onSubmit = (e) => {
        e.preventDefault()
        if(form.fullname=== ""  || form.phone_number === ""){
            return false;
        }
        addContact([...contacts, form])
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div><input name='fullname' placeholder='Full Name' onChange={onChangeInput} value={form.fullname}/></div>
                <div><input name='phone_number' placeholder='Phone Number' onChange={onChangeInput} value={form.phone_number} /></div>
                <div><button >Add</button></div>
            </form>
        </div>
    )
}

export default Form
