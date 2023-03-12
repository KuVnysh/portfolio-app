import "./index.css";

export default function Header() {

  return (
    <header className="headerAll">
      <p className="header-title">Kuanysh Amenov</p>
      <div className="HeaderNav">
        <button className="HeaderButtons" onClick={() => window.location.replace("/#sectiton-about")}>About</button>
        <button className="HeaderButtons" onClick={() => window.location.replace("/#sectiton-experience")}>Experience</button>
        <button className="HeaderButtons" onClick={() => window.location.replace("/#sectiton-projects")}>Projects</button>
        <button className="HeaderButtons" onClick={() => window.location.replace("/#sectiton-contact")}>Contacts</button>
      </div>
    </header>
  );
}