import { Link } from "react-router-dom";
import { Home5CreactiveExpriseArr } from "./JsonData";

const OurBlog = () => {
  return (
    <section className="content-inner-3 bg-gray overflow-hidden">
      <div className="container">
        <div className="section-head style-2 text-center">
          <h2 className="title">
            Creative <span className="text-primary"> Experise</span>
          </h2>
          <p className="sub-title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
        </div>
        <div className="row">
          {Home5CreactiveExpriseArr.map(({ img, name, position }, ind) => (
            <div className="col-lg-3 col-md-6 aos-item" key={ind}>
              <div className="dz-team style-3 text-center m-b30 overlay-shine aos-item">
                <div className="dz-media">
                  <Link to={"#"}>
                    <img src={img} alt="" />
                  </Link>
                </div>
                <div className="dz-content">
                  <h5 className="dz-name">
                    <Link to={"#"}>{name}</Link>
                  </h5>
                  <h6 className="dz-position ">{position}</h6>
                </div>
                <ul className="team-social">
                  <li>
                    <Link to="https://www.facebook.com/" target="blank">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/" target="blank">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/" target="blank">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com//" target="blank">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
