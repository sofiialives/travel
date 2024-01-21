import { NavLink } from "react-router-dom";
import "./SignUp.css";
import { SignUpForm } from "./SignUpForm";

export const SignUpComponent = () => {
  return (
    <div className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <SignUpForm />
      <span>
        Already have an account?
        <NavLink
          data-test-id="auth-sign-in-link"
          to="/sign-in"
          className="sign-up-form__link"
        >
          Sign In
        </NavLink>
      </span>
    </div>
  );
};
