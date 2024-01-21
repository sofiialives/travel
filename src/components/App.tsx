import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../pages/Layout/Layout.js";

const Home = lazy(() => import("../pages/Home/Home.js"));
const SignUp = lazy(() => import("../pages/Registrate/SignUp.js"));
const SignIn = lazy(() => import("../pages/Login/SignIn.js"));
const TripId = lazy(() => import("../pages/Trip/TripId.js"));
const Booking = lazy(() => import("../pages/Booking/Booking.js"));

function App() {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/trip/:tripId" element={<TripId />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
