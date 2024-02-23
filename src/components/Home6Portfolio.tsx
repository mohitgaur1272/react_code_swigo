import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import {
  Home5PortfolioButtonsArr,
  Home6PortfolioArr,
} from "../elements/JsonData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home6Portfolio = () => {
  const [data, setData] = useState(Home6PortfolioArr);
  const filterButton = (name: string) => {
    const updateData = Home6PortfolioArr.filter((el) =>
      el.categery.includes(name)
    );
    setData(updateData);
  };
  return (
    <section className="content-inner-3 overflow-hidden masonry-portfolio">
      <div className="container">
        <div className="row section-head-bx align-items-center">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <div className="section-head style-2">
              <h2 className="title">
                Our Latest <span className="text-primary">Work</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 text-end ">
            <Link
              to="/contact-us"
              className="btn shadow-primary btn-primary center m-tb10 text-uppercase"
            >
              View All Post
            </Link>
          </div>
        </div>
        <div className="site-filters style-3 clearfix">
          <ul className="filter-isotope">
            {Home5PortfolioButtonsArr.map(({ name }, ind) => (
              <li
                className="btn active"
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
      <div className="clearfix container-fluid">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          selector={".lightimg"}
          elementClassNames="row spno lightgallery aos-item"
        >
          {data.map(({ img, setStyle, title }, ind) => (
            <li className={`card-container ${setStyle}`} key={ind}>
              <div className="dz-box overlay style-4">
                <div
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
                </div>
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
  );
};

export default Home6Portfolio;
