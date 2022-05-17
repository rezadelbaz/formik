import "./SignUpForm.css";
import { useState } from "react";
const SignUpForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const changeHandler = ({ target }) => {
    // console.log(e.target.value);
    setUserData({ ...userData, [target.name]: target.value });
  };
  return (
    // <div>
    //   {/* <form>
    //     <input type="text" name="id" placeholder="name" />
    //     <input type="email" name="id" placeholder="email" />
    //     <button type="button">submit</button>
    //   </form> */}
    // </div>
    <div class="login-box">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div className="user-box">
          <input
            type="text"
            name="name"
            value={userData.name}
            required=""
            onChange={changeHandler}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="email"
            value={userData.email}
            required=""
            onChange={changeHandler}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={userData.password}
            required=""
            onChange={changeHandler}
          />
          <label>password</label>
        </div>
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
