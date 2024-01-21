import { NavLink } from "react-router-dom";
import trips from "../../assets/data/trips.json";

export type Trip = {
  id: string;
  title: string;
  level: string;
  duration: number;
  price: number;
  image: string;
};

export const TripList = () => {
  return (
    <ul className="trip-list">
      {trips.map((item: Trip, index: number) => (
        <li data-test-id="trip-card" className="trip-card" key={index}>
          <img
            data-test-id="trip-card-image"
            src={item.image}
            alt="trip photo"
          />
          <div className="trip-card__content">
            <div className="trip-info">
              <h3 data-test-id="trip-card-title" className="trip-info__title">
                {item.title}
              </h3>
              <div className="trip-info__content">
                <span
                  data-test-id="trip-card-duration"
                  className="trip-info__duration"
                >
                  <strong>{item.duration}</strong> days
                </span>
                <span
                  data-test-id="trip-card-level"
                  className="trip-info__level"
                >
                  {item.level}
                </span>
              </div>
            </div>
            <div className="trip-price">
              <span>Price</span>
              <strong
                data-test-id="trip-card-price-value"
                className="trip-price__value"
              >
                {item.price} $
              </strong>
            </div>
          </div>
          <NavLink
            data-test-id="trip-card-link"
            to={`/trip/${item.id}`}
            className="button"
          >
            Discover a trip
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
