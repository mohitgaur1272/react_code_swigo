import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MainSlider5 from "../components/MainSlider5";
import { IMAGES } from "../elements/theme";
import CountUp from "react-countup";
import { Home5ServiceArr } from "../elements/JsonData";
import { useState } from "react";
import Home5Portfolio from "../components/Home5Portfolio.1";
import Home5Testimonial from "../elements/Home5Testimonial";
import Home5Blog from "../elements/Home5Blog";
import OurBlog from "../elements/OurBlog";
import { Context } from "../context/contextApi";

const Home5 = () => {
  const { switcheData } = useContext(Context);
  const [active, setActive] = useState<number>(1);
  useEffect(() => {
    document.body.setAttribute("data-color", "color_3");
  }, [switcheData]);
  return (
    <div className="page-content bg-white">
      <MainSlider5 />
      <section className="style-2 position-relative " data-name="About Us">
        <div className="container">
          <div className="row about-bx4 align-items-center">
            <div className="col-lg-5">
              <div className="row align-items-end">
                <div className="col-6 m-b30 ">
                  <div className="dz-media style-1">
                    <div className="img1  aos-item ">
                      <img src={IMAGES.about_pic6} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-6 m-b30">
                  <div className="dz-media">
                    <div className="img2  aos-item ">
                      <img src={IMAGES.about_pic7} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7  aos-item">
              <h4 className="title">
                We Design & Create Best Architect Around The World With
                Inspiration
              </h4>
              <Link
                to="/contact-us"
                className="btn shadow-primary btn-primary btn-sm"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-inner">
        <div className="container">
          <div className="row about-bx3">
            <div className="col-lg-6 m-b30 aos-item">
              <div className="section-head style-2">
                <h2 className="title">
                  We Provide You The Best
                  <span className="text-primary">Experience </span>
                </h2>
                <p className="sub-title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <Link to="/blog-details" className="view-more-btn">
                <span className="text">View More Product</span>
                <span className="line"></span>
                <span className="btn-icon bg-primary">
                  <i className="las la-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-6 m-b30">
              <div className="dz-media">
                <img src={IMAGES.about_pic5} alt="" />
                <div className="dz-info">
                  <h2 className="Product text-primary">
                    <span className="counter">
                      <CountUp start={0} end={180} duration={65} />
                    </span>
                    +
                  </h2>
                  <h6 className="text">New Arrival Product</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-inner-3 overflow-hidden bg-gray">
        <div className="container">
          <div className="section-head style-2 text-center">
            <h2 className="title">
              What We <span className="text-primary">Provide</span>
            </h2>
            <p className="sub-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
          </div>
          <div className="row">
            {Home5ServiceArr.map(({ icon, title }, ind) => (
              <div className="col-lg-3 col-md-6 aos-item" key={ind}>
                <div
                  data-name="1."
                  className={`icon-bx-wraper style-10 m-b30 p-a30 box-hover ${
                    ind === active ? "active" : ""
                  }`}
                  onMouseEnter={() => {
                    setActive(ind);
                  }}
                >
                  <div className="icon-bx-sm m-b20">
                    <Link to="#" className="icon-cell">
                      <div className="icon-lg">
                        <span className="icon-cell text-primary">
                          <i className={icon}></i>
                        </span>
                      </div>
                    </Link>
                  </div>
                  <h4 className="title m-b10">
                    <Link to="/services-details">{title}</Link>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Home5Portfolio />
      <section className="content-inner-2 bg-gray">
        <div className="container">
          <div className="row section-head-bx align-items-center ">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="section-head style-2">
                <h2 className="title">
                  What Our <span className="text-primary">Client Says</span>
                </h2>
                <p className="sub-title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's{" "}
                </p>
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
        </div>
        <Home5Testimonial />
      </section>
      <OurBlog />
      <section className="content-inner-1  bg-white overflow-hidden ">
        <div className="container">
          <div className="row section-head-bx align-items-center p-b10">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="section-head style-2">
                <h2 className="title">
                  Stay Updated <span className="text-primary">With us</span>
                </h2>
                <p className="sub-title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <Link to="/blog-details" className="view-more-btn ms-auto">
                <span className="text">View More Product</span>
                <span className="line"></span>
                <span className="btn-icon bg-primary">
                  <i className="las la-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <Home5Blog />
        </div>
      </section>
    </div>
  );
};

export default Home5;
