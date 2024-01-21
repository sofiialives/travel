import { TripList } from "./TripList";
import { TripsFilter } from "./TripsFilter";
import "./Home.css";

export const HomeComponent = () => {
  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <TripsFilter />
      </section>
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <TripList />
      </section>
    </main>
  );
};
