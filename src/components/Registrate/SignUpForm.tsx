import { nanoid } from "nanoid";
import booking from "../../assets/data/booking.json";
import { useState } from "react";

type User = {
  id: string;
  userId: string;
  tripId: string;
  guests: number;
  date: string;
  trip: { title: string; duration: number; price: number };
  totalPrice: number;
  createdAt: string;
  fullName: string;
  email: string;
  password: string;
};

export const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newUser: User = {
      id: nanoid(),
      userId: nanoid(),
      tripId: "",
      guests: 0,
      date: "",
      trip: {
        title: "",
        duration: 0,
        price: 0,
      },
      totalPrice: 0,
      createdAt: "",
      fullName,
      email,
      password,
    };

    booking.push(newUser);

    setEmail("");
    setFullName("");
    setPassword("");
  };

  return (
    <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
      <h2 className="sign-up-form__title">Sign Up</h2>
      <label className="input">
        <span className="input__heading">Full name</span>
        <input
          data-test-id="auth-full-name"
          name="full-name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </label>
      <label className="input">
        <span className="input__heading">Email</span>
        <input
          data-test-id="auth-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="input">
        <span className="input__heading">Password</span>
        <input
          data-test-id="auth-password"
          name="password"
          min="3"
          max="20"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => e.target.value}
          required
        />
      </label>
      <button data-test-id="auth-submit" className="button" type="submit">
        Sign Up
      </button>
    </form>
  );
};
