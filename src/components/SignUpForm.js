import "./SignUpForm.css";
import { useFormik } from "formik";
const initialValues = { name: "", email: "", password: "" };
const SignUpForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({ initialValues, onSubmit });

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="name"
            value={formik.values.name}
            required=""
            onChange={formik.handleChange}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="email"
            value={formik.values.email}
            required=""
            onChange={formik.handleChange}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={formik.values.password}
            required=""
            onChange={formik.handleChange}
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
