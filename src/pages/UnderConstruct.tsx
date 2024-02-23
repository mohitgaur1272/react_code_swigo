import { Link } from "react-router-dom";
import { IMAGES } from "../elements/theme";

const UnderConstruct = () => {
  return (
    <div className="under-construct">
      <div className="inner-box">
        <div className="logo-header logo-dark">
          <Link to="/">
            <img src={IMAGES.logo} alt="" />
          </Link>
        </div>
        <div className="dz-content">
          <h2 className="dz-title">
            SITE IS DOWN <br />
            FOR <span className="text-primary">MAINTENANCE</span>
          </h2>
          <p>
            This is the Technical Problems Page.
            <br /> Or any other page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruct;
