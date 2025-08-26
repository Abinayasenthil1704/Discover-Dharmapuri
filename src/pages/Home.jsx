import React from "react";
import "./Home.css";
import heroImage from "../assets/dharmapuri1.jpeg";
import mapImage from "../assets/map.jpg"; 
import { FaBus, FaPlane, FaTrain } from "react-icons/fa";
import Hogenakkal from "../assets/Hogenakkal Falls.jpeg";
import yercaud from "../assets/yercaud.jpeg";
import kolli from "../assets/kolli.jpeg";
import useScrollAnimation from "./useScrollAnimation";
import { Link } from "react-router-dom";

function Home({ isLoggedIn, setIsLoggedIn }) {
  useScrollAnimation();

  return (
    <div className="home">
      {/* Hero Section */}
      <div
        className="hero-section animate fade-in"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* <div className="hero-text">
          <h1>Welcome to Dharmapuri</h1>
          <p>Explore Nature, Heritage, and Adventure</p>
        </div> */}

        {/* Show Login/Register if not logged in */}
        {!isLoggedIn && (
          <div className="auth-overlay">
            <div className="auth-box">
              <h2>Discover More!</h2>
              <p>Login or register to explore Places, Guides, and more.</p>
              <Link to="/login" className="btn-login">Login</Link>
            </div>
          </div>
        )}
      </div>

      {/* Show full content only if user is logged in */}
      {isLoggedIn && (
        <>
          {/* Main Content */}
          <div className="home-content animate slide-in-left">
            <h2>Why Visit Dharmapuri?</h2>

            <div className="visit-section animate slide-in-left">
              <div className="visit-left">
                <p>
                  Dharmapuri is home to places of religious and historical significance,
                  amazing waterfalls and places of absolute calm and scenic beauty.
                  What is going to be your choice?
                </p>
                <p>
                  The location of Dharmapuri makes it one of the most easily accessible tourist
                  spots. No wonder it has become a sought after destination for short term getaway.
                  Bordered by Kaveri river, the place stores tales of rich history as dynasties like
                  Sangam, Rashtrakutas and Cholas enriched the place with its own unique contributions.
                  Undoubtedly Hogenakkal falls tops the list of places to visit in Dharmapuri.
                  Less than 50 kms from the town, the waterfalls make for a scintillating sight as
                  the gushing water resembles formation of smoke when it falls on the rocks. Marvel
                  at this natural beauty and click some memorable pictures...
                </p>
              </div>

              <div className="visit-right">
                <div className="weather-box">
                  <h4>DHARMAPURI</h4>
                  <p className="weather-label">WEATHER</p>
                  <div className="temp">🌦️ 26.1°C</div>
                  <p className="condition">Patchy rain nearby</p>
                  <hr />
                  <img src={mapImage} alt="Tamil Nadu map" className="map-img" />
                </div>
              </div>
            </div>
          </div>

          {/* How to Reach Section */}
          <section className="reach-section animate slide-in-right">
            <div className="reach-container">
              <div className="reach-item">
                <h2>How to Reach</h2>
                <div className="reach-content" style={{ marginTop: '20px' }}>
                  <FaBus className="reach-icon" style={{ color: '#f4c400', fontSize: '105px', marginTop: '-24px' }} />
                  <p>
                    Dharmapuri is well connected by National Highway NH-44, 
                    State Highways SH-17 (Palacode-Hosur), SH-60 (Hogenakkal-Pennagaram) 
                    and SH-60A (Dharmapuri-Harur) via Morappur.
                  </p>
                </div>
              </div>

              <div className="reach-item">
                <h3>Best Time to Visit</h3>
                <div className="reach-content">
                  <FaPlane className="reach-icon" style={{ color: '#f4c400', fontSize: '40px', marginTop: '10px' }} />
                  <p>
                    Kempegowda International Airport, Bengaluru – 155 km<br />
                    Chennai Airport – 294 km<br />
                    Salem Airport – 45 km
                  </p>
                </div>
              </div>

              <div className="reach-item">
                <div className="reach-content" style={{ marginTop: '60px' }}>
                  <FaTrain className="reach-icon" style={{ color: '#f4c400', fontSize: '30px', marginTop: '20px' }} />
                  <p>Dharmapuri Railway Station (DPJ), under Bengaluru Railway Division</p>
                </div>
              </div>
            </div>
          </section>

          {/* Nearby Destinations Section */}
          <section className="nearby-section animate fade-in">
            <h2>Nearby Destinations</h2>
            <div className="nearby-cards">
              <div className="nearby-card">
                <a href="https://maps.google.com/?q=Hogenakkal+Falls" target="_blank" rel="noopener noreferrer">
                  <img src={Hogenakkal} alt="Hogenakkal Falls" />
                </a>
                <div className="card-content">
                  <h3>Hogenakkal Falls</h3>
                  <p>On the Kaveri River, famous for coracle rides & therapeutic baths. "Niagara of India".</p>
                </div>
              </div>

              <div className="nearby-card">
                <a href="https://maps.google.com/?q=Yercaud+Hills" target="_blank" rel="noopener noreferrer">
                  <img src={yercaud} alt="Yercaud Hills" />
                </a>
                <div className="card-content">
                  <h3>Yercaud Hills</h3>
                  <p>Cool climate, coffee plantations, Yercaud Lake, Botanical Garden, and more.</p>
                </div>
              </div>

              <div className="nearby-card">
                <a href="https://maps.google.com/?q=Kolli+Hills" target="_blank" rel="noopener noreferrer">
                  <img src={kolli} alt="Kolli Hills" />
                </a>
                <div className="card-content">
                  <h3>Kolli Hills</h3>
                  <p>Hairpin bends, trekking paths, Agaya Gangai waterfalls. Perfect for adventurers!</p>
                </div>
              </div>
            </div>
            <p className="nearby-note">
              📍 Click any image to open it in Google Maps and plan your trip!
            </p>
          </section>
        </>
      )}
    </div>
  );
}

export default Home;
