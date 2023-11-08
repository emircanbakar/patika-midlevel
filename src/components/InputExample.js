import React from 'react'
import { useState } from 'react'


function InputExample() {
    // const [name, setName] = useState("")
    // const [surname, setSurname] = useState("")
    // const onChangeName = (event) => setName(event.target.value)
    // const onChangeSurname = (event) => setSurname(event.target.value)
    const [form, setForm] = useState({
        name: "",
        surname: "",
    })

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }
    return (
        <div>
            name:
            <br />
            <input name='name' value={form.name} onChange={onChangeInput} />
            <br />
            surname:
            <br />
            <input name='surname' value={form.surname} onChange={onChangeInput} />
            <br />
            {form.name} {form.surname}
        </div>
    )
}

export default InputExample