import React, { useState } from "react";
import "./form.css";

export const Form = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [checkIn, setCheckIn] = useState(currentDate);
  const [checkOut, setCheckOut] = useState("");

  const handleCheckInChange = (event) => {
    setCheckIn(event.target.value);
  };

  const handleCheckOutChange = (event) => {
    setCheckOut(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Check-in:", checkIn);
    console.log("Check-out:", checkOut);
  };

  return (
    <div className="form_main">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-3">
          <input
            type="text"
            id="name"
            className="form-control input"
            placeholder="Name"
            required
          />
        </div>
        <div className="col-3">
          <input
            type="tel"
            id="mobile"
            className="form-control input"
            placeholder="Mobile Number"
            required
          />
        </div>
        <div className="col-2">
          <input
            type="date"
            id="checkIn"
            value={checkIn}
            onFocus={(event) => (event.target.min = currentDate)}
            onChange={handleCheckInChange}
            className="form-control input"
            required
          />
        </div>
        <div className="col-2">
          <input
            type="date"
            id="checkOut"
            value={checkOut}
            onChange={handleCheckOutChange}
            className="form-control input"
            required
          />
        </div>
        <div className="col-2">
          <button type="submit" id="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
