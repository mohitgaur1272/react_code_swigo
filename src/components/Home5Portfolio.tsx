import { Link } from "react-router-dom";
import {
  Home5PortfolioArr,
  Home5PortfolioButtonsArr,
} from "../elements/JsonData";
import { useState } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { motion } from "framer-motion";

const Home5Portfolio = () => {
  const [data, setData] = useState(Home5PortfolioArr);

  const filterButton = (name: string) => {
    const updateData = Home5PortfolioArr.filter((el) =>
      el.categery.includes(name)
    );
    setData(updateData);
  };
  return (
    <>
      <section className="content-inner-2  overflow-hidden masonry-portfolio">
        <div className="container">
          <div className="row section-head-bx align-items-center">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="section-head style-2">
                <h2 className="title">
                  Our Latest <span className="text-primary">Work</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 ">
              <Link to="/blog-details" className="view-more-btn ms-auto">
                <span className="text">View More Product</span>
                <span className="line"></span>
                <span className="btn-icon bg-primary">
                  <i className="las la-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="site-filters style-3 clearfix">
            <ul className="filter-isotope">
              {Home5PortfolioButtonsArr.map(({ name }, ind) => (
                <li
                  className="btn"
                  key={ind}
                  onClick={() => {
                    filterButton(name);
                  }}
                >
                  <Link to="#">{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="clearfix">
          <LightGallery
            elementClassNames="row spno lightgallery aos-item"
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            selector={".lightimg"}
          >
            {data.map(({ img, title }, ind) => (
              <li
                className="card-container col-xl-3 col-md-6 col-sm-6 architecture m-b10 "
                key={ind}
              >
                <div className="dz-box overlay style-3">
                  <motion.div
                    className="dz-media"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    <span
                      data-exthumbimage={img}
                      data-src={img}
                      className="view-btn lightimg"
                      title="Architecture"
                    >
                      <img src={img} alt="" style={{ display: "none" }} />
                    </span>
                  </motion.div>
                  <div className="dz-info">
                    <h6 className="title">
                      <Link to="/services-details">{title}</Link>
                    </h6>
                  </div>
                </div>
              </li>
            ))}
          </LightGallery>
        </div>
      </section>
    </>
  );
};

export default Home5Portfolio;
