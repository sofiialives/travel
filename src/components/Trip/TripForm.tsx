import React, { useState } from "react";
import { Trip } from "../Home/TripList";

type TripFormProps = {
  item: Trip;
};

export const TripForm: React.FC<TripFormProps> = ({ item }) => {
  const [guests, setGuests] = useState("1");
  const [prices, setPrices] = useState(`${item.price}`);

  const changePrice = () => {
    const total = parseInt(guests, 10) * item.price;
    setPrices(total.toString());
  };

  return (
    <form className="book-trip-popup__form" autoComplete="off">
      <div className="trip-info">
        <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
          {item.title}
        </h3>
        <div className="trip-info__content">
          <span
            data-test-id="book-trip-popup-duration"
            className="trip-info__duration"
          >
            <strong>{item.duration}</strong> days
          </span>
          <span
            data-test-id="book-trip-popup-level"
            className="trip-info__level"
          >
            {item.level}
          </span>
        </div>
      </div>
      <label className="input">
        <span className="input__heading">Date</span>
        <input
          data-test-id="book-trip-popup-date"
          name="date"
          type="date"
          required
        />
      </label>
      <label className="input">
        <span className="input__heading">Number of guests</span>
        <input
          data-test-id="book-trip-popup-guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </label>
      <span className="book-trip-popup__total">
        Total:
        <output
          data-test-id="book-trip-popup-total-value"
          className="book-trip-popup__total-value"
        >
          {prices}$
        </output>
      </span>
      <button
        data-test-id="book-trip-popup-submit"
        className="button"
        type="submit"
        onClick={changePrice}
      >
        Book a trip
      </button>
    </form>
  );
};
