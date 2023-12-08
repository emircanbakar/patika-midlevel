import React from 'react'
import { useFormik } from 'formik';
import validationSchema from "./validation"

function SignUp() {
    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: "",
            passwordConfirmed: "",
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema
    });
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    placeholder="jane@acme.com"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                />
                <br />
                {
                    errors.email && touched.email && (<div className='errors'> {errors.email} </div>)
                }
                <br />
                <label >Password</label>
                <input
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                />
                <br />
                {
                    errors.password &&  touched.password && (<div className='errors'> {errors.password} </div>)
                }
                <br />
                <label>Password Again</label>
                <input
                    name="passwordConfirmed"
                    onChange={handleChange}
                    value={values.passwordConfirmed}
                    onBlur={handleBlur}
                />
                <br />
                {
                    errors.passwordConfirmed && touched.passwordConfirmed && (<div className='errors'> {errors.passwordConfirmed} </div>)
                }
                <br /><br />
                <button type="submit">Submit</button>
                <br /><br />
                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default SignUp
