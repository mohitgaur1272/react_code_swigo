import { Home2OurPortFolioArr } from "../elements/JsonData";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Link } from "react-router-dom";

const Home2OurPortFolio = () => {
  return (
    <div className="container-fluid">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        selector={".lightimg"}
        elementClassNames="row lightgallery aos-item"
      >
        {Home2OurPortFolioArr.map(({ img, setStyle }, ind) => (
          <li className={`card-container ${setStyle}`} key={ind}>
            <div className="dz-box overlay style-2">
              <div
                className="dz-media"
                style={{ backgroundImage: `url(${img})` }}
              >
                <span
                  data-exthumbimage={img}
                  data-src={img}
                  className="view-btn lightimg"
                  title="ARCHITECTURAL"
                >
                  <img src={img} alt="" style={{ display: "none" }} />
                </span>
              </div>
              <div className="dz-info">
                <span className="line"></span>
                <div>
                  <h4 className="title">
                    <Link to="/portfolio-details">Mordern Living Room</Link>
                  </h4>
                  <h6 className="sub-title text-primary">Landscape, Urban</h6>
                </div>
              </div>
            </div>
          </li>
        ))}
      </LightGallery>
    </div>
  );
};

export default Home2OurPortFolio;
