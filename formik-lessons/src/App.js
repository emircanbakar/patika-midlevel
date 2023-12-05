import { useFormik } from 'formik';
import './App.css';

function App() {
  const {handleChange, handleSubmit, values} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: 'male',
      hobies: [""],
      country: "Turkey",
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          placeholder="Emircan"
          onChange={handleChange}
          value={values.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          placeholder="Bakar"
          onChange={handleChange}
          value={values.lastName}
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        <br />
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === 'male'}
        />
        <span>Female</span>
        <input
          name="gender"
          type="radio"
          value="female"
          onChange={handleChange}
          checked={values.gender === 'female'}
        />
        <br />
        <div>
          Cinema
          <input type="checkbox" name='hobies' value="cinema" onChange={handleChange} />
        </div>
        <div>
          Football
          <input type="checkbox" name='hobies' value="footbal" onChange={handleChange} />
        </div>
        <div>
          Boxing
          <input type="checkbox" name='hobies' value="boxing" onChange={handleChange} />
        </div>

        <br />
        <select name="country" onChange={handleChange}>
          <option value="TR">Turkey</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>

        <br /><br />
        <button type="submit">Submit</button>
        <br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div >
  );
}

export default App;
