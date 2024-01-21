import { useParams } from "react-router-dom";
import "../Home/Home.css";
import trips from "../../assets/data/trips.json";
import { useState } from "react";
import "./Trip.css";
import { TripForm } from "./TripForm";

export const TripComponent = () => {
  const { tripId } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  const handleModal = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const item = trips.find((trip) => trip.id === tripId);

  if (!item) {
    return "loh";
  }

  return (
    <div className="trip-page" key={tripId}>
      <div className="trip">
        <img
          data-test-id="trip-details-image"
          src={item.image}
          className="trip__img"
          alt="trip photo"
        />
        <div className="trip__content">
          <div className="trip-info">
            <h3 data-test-id="trip-details-title" className="trip-info__title">
              {item.title}
            </h3>
            <div className="trip-info__content">
              <span
                data-test-id="trip-details-duration"
                className="trip-info__duration"
              >
                <strong>{item.duration}</strong> days
              </span>
              <span
                data-test-id="trip-details-level"
                className="trip-info__level"
              >
                {item.level}
              </span>
            </div>
          </div>
          <div
            data-test-id="trip-details-description"
            className="trip__description"
          >
            {item.description}
          </div>
          <div className="trip-price">
            <span>Price</span>
            <strong
              data-test-id="trip-details-price-value"
              className="trip-price__value"
            >
              {item.price} $
            </strong>
          </div>
          <button
            data-test-id="trip-details-button"
            className="trip__button button"
            onClick={handleModal}
          >
            Book a trip
          </button>
        </div>
      </div>

      {isVisible ? (
        <div className="modal">
          <div data-test-id="book-trip-popup" className="book-trip-popup">
            <button
              data-test-id="book-trip-popup-close"
              className="book-trip-popup__close"
              type="button"
              onClick={handleClose}
            >
              ×
            </button>
            <TripForm item={item} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
