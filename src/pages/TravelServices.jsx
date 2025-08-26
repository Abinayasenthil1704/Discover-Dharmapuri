import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TravelServices.css";
import carimg1 from "../assets/5seater.jpg";
import carimg2 from "../assets/7seater.jpg";

export default function TravelServices() {
  const [booking, setBooking] = useState({
    date: "",
    day: "",
    time: "",
    carType: "5-seater",
  });

  const [carInfo, setCarInfo] = useState(null);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const cars = {
      "5-seater": {
        image: carimg1,
        driver: "Mr.Vinoth",
        phone: "9876543210",
      },
      "7-seater": {
        image: carimg2,
        driver: "Mr.Koushik",
        phone: "8765432109",
      },
    };
    setCarInfo(cars[booking.carType]);
  }, [booking.carType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/travel", booking);
      alert("Booking submitted successfully!");
    } catch (error) {
      alert("Error submitting booking");
      console.log(error);
    }
  };

  return (
    <div className="travel-container">

      <h2>Travel Booking</h2>
      {carInfo && (
        <div className="car-info">
          <img src={carInfo.image} alt={booking.carType} />
          <p><strong>Driver:</strong> {carInfo.driver}</p>
          <p><strong>Contact:</strong> {carInfo.phone}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>Car Type:
          <select name="carType" value={booking.carType} onChange={handleChange}>
            <option value="5-seater">5-seater</option>
            <option value="7-seater">7-seater</option>
          </select>
        </label>
        <label>Date:
          <input type="date" name="date" required onChange={handleChange} />
        </label>
        <label>Days:
          <input type="text" name="day" required onChange={handleChange} />
        </label>
        <label>Time:
          <input type="time" name="time" required onChange={handleChange} />
        </label>
        <button type="submit">Book Now</button>
      </form>
      <br />
      <hr />
      {/* Small Offer / Services Section */}
      <div className="travel-offers">
        <p>🚗💨<strong>Special Offer:</strong> Book now & get 10% off for weekend trips!</p>
        <p>➤ 24x7 Customer Support</p>
        <p>➤ Clean & Sanitized Cars</p>
        <p>➤ Experienced Drivers</p>
      </div>

    </div>
  );
}
