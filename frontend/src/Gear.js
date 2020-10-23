import logo from './gear.png';
import './Gear.css';

function Gear() {
  return (
    <div className="Gear">
      <header className="Gear-header">
        <img src={logo} className="Gear-logo" alt="logo" />
        <p>
          This is the Medical Services Front-End accessing API server
        </p>
        <a
          className="Gear-link"
          href="https://github.com/ioanniskousis/medical-services-jk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in GitHub
        </a>
      </header>
    </div>
  );
}

export default Gear;
