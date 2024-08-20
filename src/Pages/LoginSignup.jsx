import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  //login
  const login = async () => {
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors);
    }
  }

  //signup
  const signup = async () => {
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors);
    }
  }

  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>{state}</h1>
        <div className="login-signup-fields">
          {state === 'Signup' && <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='Full name' />}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder='Email address' />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={() => { state === 'Login' ? login() : signup() }}>Continue</button>
        {state === 'Signup' && <p className='login-signup-login'>Already have an account? <span onClick={() => { setState('Login') }}>Login here</span></p>}
        {state === 'Login' && <p className='login-signup-login'>Don't have an account? <span onClick={() => { setState('Signup') }}>Create here.</span></p>}
        {state === 'Signup' &&
          <div className="login-signup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
        }
      </div>
    </div>
  )
}

export default LoginSignup
