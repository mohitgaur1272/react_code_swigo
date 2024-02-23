import { Link } from "react-router-dom";
import { IMAGES } from "../elements/theme";

const Footer2 = () => {
  return (
    <footer className="site-footer style-2 overflow-hidden" id="footer">
      <img src={IMAGES.pattern13} className="circle-bg" alt="" />
      <img src={IMAGES.pattern13} className="circle-bg-2" alt="" />
      <div className="footer-top line-img">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 m-b40 aos-item aos-init aos-animate">
              <div className="widget widget_getintuch">
                <div className="widget-title">
                  <h4 className="title">Contact Us</h4>
                </div>
                <ul>
                  <li>
                    <i className="flaticon-placeholder"></i>1247/Plot No. 39,
                    15th Phase, Colony, Kukatpally, Hyderabad
                  </li>
                  <li>
                    <i className="flaticon-telephone"></i>1800-121-3637
                    <br />
                    +91 555 234-8765
                  </li>
                  <li>
                    <i className="flaticon-email"></i>info@gmail.com
                    <br />
                    services@gmail.com
                  </li>
                </ul>
                <Link className="btn-link style-2" to="#">
                  GET DIRECTIONS <i className="m-l5 las la-plus"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 m-b40 aos-item aos-init aos-animate">
              <div className="widget widget_links">
                <div className="widget-title">
                  <h4 className="title">Our Links</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 m-b40 aos-item aos-init aos-animate">
              <div className="widget widget_links">
                <div className="widget-title">
                  <h4 className="title">Services</h4>
                </div>
                <ul>
                  <li>
                    <Link to="#">Architecture & Interior</Link>
                  </li>
                  <li>
                    <Link to="#">Project Planning</Link>
                  </li>
                  <li>
                    <Link to="#">Product Design</Link>
                  </li>
                  <li>
                    <Link to="#">Custom Design</Link>
                  </li>
                  <li>
                    <Link to="#">24x7 Suppoer</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 m-b40 aos-item aos-init aos-animate">
              <div className="widget-title">
                <h4 className="title">About Company</h4>
              </div>
              <p>
                Suspendisse condimentum vel dolor ut pulvinar. Nullam ac magna
                lacus. Duis volutpat consectetur purus, Link dictum eros mollis
                ut. Curabitur erat enim, tempus in{" "}
              </p>
              <ul className="social-list style-2">
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
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-lg-start">
              <ul className="footer-link d-inline-block">
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Team &amp; Condition</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 text-lg-end">
              <span className="copyright-text">
                Copyright © 2023{" "}
                <Link
                  to="https://dexignzone.com/"
                  className="text-primary"
                  target="_blank"
                >
                  DexignZone
                </Link>{" "}
                All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
