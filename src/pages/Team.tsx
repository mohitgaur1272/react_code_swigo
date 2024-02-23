import { Link } from "react-router-dom";
import CommonBanner from "../elements/CommonBanner";
import { TeamArr } from "../elements/JsonData";
import { IMAGES } from "../elements/theme";

const Team = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner img={IMAGES.bnr6} title="OUR TEAM" text="Team" />
      <section className="content-inner line-img">
        <div className="container">
          <div className="row">
            {TeamArr.map(({ name, img }, ind) => (
              <div className="col-xl-3 col-lg-4 col-sm-6 aos-item" key={ind}>
                <div className="dz-team style-1 text-center overlay-shine m-b30">
                  <div className="dz-media shadow">
                    <Link to="#">
                      <img src={img} alt="" />
                    </Link>
                    <ul className="team-social">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dz-content">
                    <h5 className="dz-name">
                      <Link to="#">{name}</Link>
                    </h5>
                    <h6 className="dz-position text-primary">Director</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
