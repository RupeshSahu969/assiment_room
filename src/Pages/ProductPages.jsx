import React from "react";
import "./product.css";
import images1 from "../assert/image1.png";
import images2 from "../assert/image2.png";
import images3 from "../assert/image3.png";
import images4 from "../assert/image4.png";
import images5 from "../assert/image5.png";
import images6 from "../assert/image6.png";
import images7 from "../assert/image7.png";
import images9 from "../assert/image (1).png";
import droom from "../assert/droom.jpg";
import froom from "../assert/froom.jpg";

import { FaArrowRight } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "₹3999/Per Day",
    dec: "Overlooking Sunset Beach, Palm Grove",
    service: "Includes breakfast & WiFi",
    reviews: "4.2 (1,205 Reviews)",
    img: images1,
  },
  {
    id: 2,
    name: "Family Room",
    price: "₹4999/Per Day",
    dec: "Overlooking Sunset Beach, Palm Grove",
    service: "Includes spa access & yoga classes",
    reviews: "4.2 (1,205 Reviews)",
    img: images2,
  },
  {
    id: 3,
    name: "Sunset View Inn",
    price: "₹400/Per Day",
    dec: "Overlooking Sunset Beach, Palm Grove",
    service: "Includes breakfast & WiFi",
    reviews: "4.2 (500 Reviews)",
    img: images3,
  },
  {
    id: 4,
    name: "Mountain Retreat Lodge",
    price: "₹600/Per Day",
    dec: "Overlooking Sunset Beach, Palm Grove",
    service: "Includes spa access & yoga classes",
    reviews: "4.6 (700 Reviews)",
    img: images4,
  },
  {
    id: 5,
    name: "Grand Palace Resort",
    price: "₹650/Per Day",
    dec: "Overlooking Sunset Beach, Palm Grove",
    service: "Includes breakfast & WiFi",
    reviews: "4.7 (800 Reviews)",
    img: images5,
  },
  {
    id: 6,
    name: "Royal Hotel",
    price: "₹450/Per Day",
    dec: "Overlooking Sunset Beach, Palm Grove",
    service: "Includes spa access & yoga classes",
    reviews: "4.3 (600 Reviews)",
    img: images6,
  },
  {
    id: 7,
    name: "Ocean View Hotel",
    price: "₹700/Per Day",
    dec: "Overlooking Sunset Beach, Palm Grove",
    service: "Includes breakfast & WiFi",
    reviews: "4.8 (900 Reviews)",
    img: images7,
  },
  {
    id: 8,
    name: "Luxury Villa",
    price: "₹900/Per Day",
    dec: "Overlooking Sunset Beach, Palm Grove",
    service: "Includes breakfast & WiFi",
    reviews: "4.9 (1,000 Reviews)",
    img: images9,
  },
];

const ProductPages = () => {
  return (
    <div className="container">
     <section className="section-container">
  <div className="room-items">
    <img src={droom} alt="droom" className="droom-image" />
    <div className="container-desc">
      <h6 className="text-deluxe">Deluxe Room</h6>
      <p className="text-muteds">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro impedit aliquam ex inventore excepturi optio quam molestiae voluptates! Iusto voluptas magni culpa autem sapiente pariatur non delectus voluptatem repellat ullam.
      </p>
      <div className="room-price-container">
        <div>
          <h4 className="room-prices">₹3999/Per Day</h4>
        </div>
        <div>
          <p className="text-muteds">4.9 (1,000 Reviews)</p>
        </div>
      </div>
    </div>
  </div>

  <div className="room-items">
    <img src={froom} alt="froom" className="froom-image" />
    <div className="container-desc">
      <h6 className="text-deluxe">Family Room</h6>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro impedit aliquam ex inventore excepturi optio quam molestiae voluptates! Iusto voluptas magni culpa autem sapiente pariatur non delectus voluptatem repellat ullam.
      </p>
      <div className="room-price-container">
        <div>
          <h4 className="room-price">₹4999/Per Day</h4>
        </div>
        <div>
          <p className="text-muted">4.9 (1,000 Reviews)</p>
        </div>
      </div>
    </div>
  </div>
</section>


     <article className="article-containe">
     <h1 className="container-text my-4">Rooms & Amenities</h1>
      <p className="text-start my-4">
        Discover the most trending hotels Indian for an unforgettable experience
      </p>
      <div className="btn-name">
        <div className="btn-grid">
          <button className="btn">Bangalore</button>
          <button className="btn1">Mumbai</button>
          <button className="btn1">Kochi</button>
          <button className="btn1">Visakhapatnam</button>
          <button className="btn1">Raipur</button>
          <button className="btn1">Delhi</button>
          <button className="btn-seeall">
            See All <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-item">
            <img src={room.img} alt={room.name} className="room-image" />
            <div className="contaner-desc">
              <h6 className="text-mute">{room.name}</h6>
              <p className="text-muted">{room.dec}</p>
              <p className="text-muted">{room.reviews}</p>
              <h4 className="room-price">{room.price}</h4>
              <p className="text-muted">{room.service}</p>
            </div>
          </div>
        ))}
      </div>
     </article>
    </div>
  );
};

export default ProductPages;
