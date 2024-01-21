export const SignInForm = () => {
  return (
    <form className="sign-in-form" autoComplete="off">
      <h2 className="sign-in-form__title">Sign In</h2>
      <label className="input">
        <span className="input__heading">Email</span>
        <input data-test-id="auth-email" name="email" type="email" required />
      </label>
      <label className="input">
        <span className="input__heading">Password</span>
        <input
          data-test-id="auth-password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
        />
      </label>
      <button data-test-id="auth-submit" className="button" type="submit">
        Sign In
      </button>
    </form>
  );
};
