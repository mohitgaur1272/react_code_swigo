import { useEffect, useContext } from "react";
import CountUp from "react-countup";
import MainBanner6 from "../components/MainBanner6";
import { IMAGES } from "../elements/theme";
import Home6Portfolio from "../components/Home6Portfolio";
import { Home6BlogArr, Home6ServiceArr } from "../elements/JsonData";
import { Link } from "react-router-dom";
import { useState } from "react";
import OurBlog from "../elements/OurBlog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Home6Subscription from "../elements/Home6Subscription";
import { Context } from "../context/contextApi";

const Home6 = () => {
  const { switcheData } = useContext(Context);
  const [active, setActive] = useState<number>();
  useEffect(() => {
    document.body.setAttribute("data-color", "color_3");
  }, [switcheData]);
  return (
    <div className="page-content bg-white">
      <MainBanner6 />
      <section className="style-2 position-relative">
        <div className="container">
          <div className="row about-bx5 align-items-end">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="dz-media ">
                <div className="img1  aos-item m-b30">
                  <img src={IMAGES.about_pic8} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6  aos-item p-a0">
              <div className="about-content">
                <div className="section-head style-1">
                  <h2 className="title">WE PROVIDE YOU THE BEST EXPERIENCE</h2>
                </div>
                <div className="row m-b30 justify-content-center">
                  <div className="col-lg-4 col-md-4 col-6">
                    <h2 className="year d-flex">
                      <span className="counter">
                        <CountUp start={0} end={88} duration={50} />
                      </span>
                      K
                    </h2>
                    <span className="text">Complete Projects</span>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6">
                    <h2 className="awards d-flex">
                      <span className="counter">
                        <CountUp start={0} end={38} duration={50} />
                      </span>
                      K
                    </h2>
                    <span className="text">New Projects</span>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6">
                    <h2 className="sales d-flex">
                      <span className="counter">
                        <CountUp start={0} end={880} duration={50} />
                      </span>
                      K
                    </h2>
                    <span className="text">Last Year Profite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Home6Portfolio />
      <section className="content-inner overflow-hidden bg-white">
        <div className="container">
          <div className="section-head style-2 text-center">
            <h2 className="title">
              What We <span className="text-primary">Provide</span>
            </h2>
          </div>
          <div className="row justify-content-center">
            {Home6ServiceArr.map(({ icon, title }, ind) => (
              <div className="col-lg-4 col-md-6 aos-item" key={ind}>
                <div
                  onMouseEnter={() => {
                    setActive(ind);
                  }}
                  className={`icon-bx-wraper style-11 m-b30 p-a30 box-hover ${
                    ind === active ? "active" : ""
                  }`}
                  data-name="1."
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
                    Lorem Ipsum is simply Lorem Ipsum is simply dum my text of
                    the Lorem Ipsum is simply dummy text dum.
                  </p>
                </div>
              </div>
            ))}

            <div className="col-12 text-center">
              <Link
                to="/contact-us"
                className="btn shadow-primary btn-primary center text-uppercase m-t20"
              >
                View All Project
              </Link>
            </div>
          </div>
        </div>
      </section>
      <OurBlog />
      <section className="content-inner-1  bg-white overflow-hidden ">
        <div className="container">
          <div className="row section-head-bx align-items-end p-b10">
            <div className="col-lg-7 col-md-6 col-sm-12">
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
            <div className="col-lg-5 col-md-6 col-sm-12 text-end">
              <Link
                to="/contact-us"
                className="btn shadow-primary btn-primary center m-tb10 text-uppercase"
              >
                View All Post
              </Link>
            </div>
          </div>
          <div className="blog-area">
            <Swiper
              className="swiper-container blog-swiper-3"
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
              speed={1500}
              modules={[Autoplay]}
              autoplay={{ delay: 1500 }}
              breakpoints={{
                1200: { slidesPerView: 3 },
                991: { slidesPerView: 2 },
                240: { slidesPerView: 1 },
              }}
            >
              {Home6BlogArr.map(({ img }, ind) => (
                <SwiperSlide className="swiper-slide" key={ind}>
                  <div className="dz-card blog-grid style-4 aos-item overlay-shine">
                    <h5 className="dz-title">
                      <Link to="/blog-details">
                        Ingenious Ways You Can Do With Construction.
                      </Link>
                    </h5>
                    <div className="dz-media">
                      <Link to="/blog-details">
                        <img src={img} alt="" />
                      </Link>
                      <div className="dz-meta">
                        <ul>
                          <li className="post-btn">
                            <Link
                              to="/blog-details"
                              className="btn  btn-primary"
                            >
                              Bussiness
                            </Link>
                          </li>
                          <li className="post-date">
                            <span>
                              <i className="far fa-clock text-primary"></i>
                            </span>
                            Jan 20, 2022
                          </li>
                          <li className="post-user">
                            <Link to="#">
                              <span>
                                <i className="far fa-comment text-primary"></i>
                              </span>
                              1947
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dz-info">
                      <div className="text">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                      <Link
                        to="/blog-details"
                        className="btn shadow-primary icon-btn btn-primary"
                      >
                        <i className="las la-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <Home6Subscription />
    </div>
  );
};

export default Home6;
