import React from 'react';
import {Link} from 'react-router-dom';
import './Guides.css';

function Guides() {
  return (
    <div className="guides-container">
      <h2>Travel Guide to Dharmapuri 🧭</h2>
      <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <Link to="/travel">
          <button style={{ 
            backgroundColor: "#285e6b", 
            color: "white", 
            padding: "10px 16px", 
            border: "none", 
            borderRadius: "6px", 
            fontWeight: "bold", 
            cursor: "pointer" 
          }}>
            Go to Travel Services 🚕
          </button>
        </Link>
      </div>


      <section className="guide-section">
        <h3>🚗 How to Reach</h3>
        <p>
          Dharmapuri is well-connected by road and rail. You can reach by:
          <ul>
            <li><strong>By Train:</strong> Dharmapuri Railway Station is a major stop on the Bengaluru-Salem line.</li>
            <li><strong>By Road:</strong> NH-44 and NH-844 pass through the city. Regular buses from Salem, Hosur, Bengaluru.</li>
            <li><strong>By Air:</strong> Nearest airports: Salem (65 km), Bengaluru (135 km).</li>
          </ul>
        </p>
      </section>
      <section className="guide-section">
        <h3>📇 Local Travel Guides in Dharmapuri</h3>
        <p>Here are some trusted local guides you can contact for help, local language support, and travel assistance:</p>
        <div className="guides-grid">
            {[
            { name: "Ravi Kumar", phone: "9876543210", language: "Tamil, English", exp: "5 years" },
            { name: "Babu", phone: "9845012345", language: "Tamil, Hindi", exp: "7 years" },
            { name: "Meena", phone: "9867543210", language: "Tamil, English", exp: "4 years" },
            { name: "Arun ", phone: "9958456321", language: "Tamil", exp: "6 years" },
            { name: "Kavitha", phone: "9876012345", language: "Tamil, Kannada", exp: "3 years" },
            { name: "Ganesh", phone: "9998765432", language: "Tamil, English", exp: "8 years" },
            { name: "Ramesh", phone: "9977886655", language: "Tamil, Telugu", exp: "6 years" },
            { name: "Swathi", phone: "9867001112", language: "Tamil, English", exp: "4 years" },
            { name: "Manoj", phone: "9845011122", language: "Tamil", exp: "2 years" },
            ].map((guide, index) => (
            <div key={index} className="guide-card">
                <h4>{guide.name}</h4>
                <p><strong>Phone:</strong> {guide.phone}</p>
                <p><strong>Languages:</strong> {guide.language}</p>
                <p><strong>Experience:</strong> {guide.exp}</p>
            </div>
            ))}
        </div>
     </section>


      <section className="guide-section">
        <h3>🕰️ Best Time to Visit</h3>
        <p>October to March is the best season with pleasant weather for sightseeing, waterfalls, and trekking.</p>
      </section>

      <section className="guide-section">
        <h3>📌 Travel Tips</h3>
        <ul>
          <li>Carry light cotton clothes in summer and light woollens in winter.</li>
          <li>Use bottled water and keep sunscreen handy for hill trips.</li>
          <li>Wear shoes with good grip when visiting hilly or rocky spots like Hogenakkal and Melagiri Hills.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h3>📞 Emergency Contacts</h3>
        <ul>
          <li><strong>Police:</strong> 100</li>
          <li><strong>Tourist Helpline:</strong> 1800-11-1363</li>
          <li><strong>Dharmapuri District Hospital:</strong> 04342-260300</li>
        </ul>
      </section>
    </div>
  );
}

export default Guides;
