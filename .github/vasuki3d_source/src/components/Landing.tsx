import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Smart business starts with</h2>
            <h1>
              VASUKI
              <br />
              <span>NFC</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Tap. Connect.</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Share</div>
              <div className="landing-h2-2">Grow</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Grow</div>
              <div className="landing-h2-info-1">Share</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
