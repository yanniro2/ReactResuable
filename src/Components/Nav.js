import "../style/main.css";
import logo from "../img/icons/earth-outline.svg";

export default function Nav() {
  return (
    <header className="header">
      <div className="header-component">
        <img src={logo} alt="logo img" className="header-img" />
        <h3 className="header-h3">my travel journal</h3>
      </div>
    </header>
  );
}
