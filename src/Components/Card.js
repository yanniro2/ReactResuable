import react from "react";
import location from "../img/icons/location-outline.svg";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-left">
        <img src={props.img} alt="Img" />
      </div>
      <div className="card-right">
        <div className="top">
          <div className="top-place">
            <img src={location} alt="location icon" />
            <h3>{props.location}</h3>
          </div>
          <a href="#" className="top-link">
            View on Google Maps
          </a>
        </div>
        <div className="heading">
          <h1>{props.place}</h1>
        </div>
        <div className="details">
          <p className="date">{props.date}</p>
          <p className="text">{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
}
