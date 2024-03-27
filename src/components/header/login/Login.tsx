import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

interface LoginProps {
  saveJwt: (jwt: string) => void;
}

function Login(props: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = {
      method: "POST",
      url: "http://localhost:3000/login",
      data: {
        username,
        password,
      },
    };
    await axios(params).then((res) => {
      console.log(res);
      props.saveJwt(res.data);
      return;
    });
    setUsername("");
    setPassword("");
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleUserPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login">
      <form onSubmit={(event) => submitForm(event)} className="login_form">
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="text"
            name="user_email"
            id="user_email"
            placeholder="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="user_email">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="password"
            name="user_pwd"
            id="user_pwd"
            value={password}
            onChange={handleUserPwdChange}
            placeholder="strongOnePwd"
          />
          <label htmlFor="user_pwd">Password</label>
        </div>
        <button type="submit" style={{ float: "right" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
