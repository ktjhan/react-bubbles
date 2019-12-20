import React, { useState } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
     username: 'Lambda School',
     password: 'i<3Lambd4'
  });

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/BubblePage')
        })
      .catch(err=> console.log(err))
  }

  const handleChange = e => {
      setCredentials( {
        ...credentials,
        [e.target.name]: e.target.value,
      })
  }

    return (
      <div>
        <form onSubmit={login}>
          <input
            required
            type="text"
            name="username"
            label="Username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            required
            type="password"
            name="password"
            label="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button className="button">Log in</button>

        </form>
      </div>
    )
}

export default Login;
