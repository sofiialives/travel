import { NavLink } from "react-router-dom";
import "../Registrate/SignUp";
import { SignInForm } from "./SignInForm";

export const SignInComponent = () => {
  return (
    <div className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <SignInForm />
      <span>
        Don't have an account?
        <NavLink
          data-test-id="auth-sign-up-link"
          to="/sign-up"
          className="sign-in-form__link"
        >
          Sign Up
        </NavLink>
      </span>
    </div>
  );
};
