import React from "react";
import Slider from "react-slick";
import "./Places.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useScrollAnimation from "./useScrollAnimation";

// Image imports...
import Falls1 from "../assets/Falls1.jpeg";
import Falls2 from "../assets/Falls2.jpeg";
import Temple1 from "../assets/Temple1.jpeg";
import Temple2 from "../assets/Temple2.jpeg";
import Fort1 from "../assets/Fort1.jpeg";
import Fort2 from "../assets/Fort2.jpeg";
import Vathalmalai1 from "../assets/vathalmalai1.jpg";
import Vathalmalai2 from "../assets/vathalmalai2.jpg";
import Melagiri1 from "../assets/Melagiri1.jpeg";
import Melagiri2 from "../assets/Melagiri2.jpeg";
import Muthaiyan1 from "../assets/Muthaiyan1.jpeg";
import Muthaiyan2 from "../assets/Muthaiyan2.jpeg";
import Nagamarai1 from "../assets/Nagamarai1.jpeg";
import Nagamarai2 from "../assets/Nagamarai2.jpeg";

const places = [
  {
    name: "Hogenakkal Falls",
    description: "Often dubbed the 'Niagara of India', Hogenakkal is known for smoky waterfalls, coracle rides, and oil massages.",
    images: [Falls1, Falls2],
  },
  {
    name: "Theerthamalai Temple",
    description: "A hilltop temple in Harur taluk with ancient springs and divine views, ideal for spiritual seekers.",
    images: [Temple1, Temple2],
  },
  {
    name: "Adhiyamankottai Fort & Chenraya Perumal Temple",
    description: "Historic ruins of Adhiyaman Fort and a temple showcasing Hoysala and Vijayanagara architecture.",
    images: [Fort1, Fort2],
  },
  {
  name: "Vathalmalai Hills",
  description: "Scenic hill station in Dharmapuri known for its serene views, tribal villages, and pleasant climate.",
  images: [Vathalmalai1, Vathalmalai2],
  },
  {
    name: "Melagiri Hills & Cauvery Sanctuary",
    description: "Forests, hills, and trekking trails—perfect for adventure lovers and nature enthusiasts.",
    images: [Melagiri1, Melagiri2],
  },
  {
    name: "Muthaiyan Kovil, Neruppur",
    description: "A peaceful temple located at the southern end of Dharmapuri district. Known for its calm surroundings and spiritual significance.",
    images: [Muthaiyan1, Muthaiyan2],
  },
  {
    name: "Nagamarai River - Kaveri Origin Point",
    description: "One of the starting points of the Kaveri River. Surrounded by nature and hills, it’s an offbeat location for nature lovers.",
    images: [Nagamarai1, Nagamarai2],
  }
];

function Places() {
  useScrollAnimation(); // ✅ hook added

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="places-container animate">
      <h2 className="animate">Top Attractions in Dharmapuri</h2>
      <div className="places-grid">
        {places.map((place, index) => (
          <div key={index} className="place-card animate">
            <Slider {...sliderSettings}>
              {place.images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`${place.name} ${i + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Slider>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Places;
