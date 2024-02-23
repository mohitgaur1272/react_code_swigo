import CommonBanner from "../elements/CommonBanner";
import { IMAGES } from "../elements/theme";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { HomeGalleryArr } from "../elements/JsonData";
import { useState } from "react";
import ClientLogo from "../elements/ClientLogo";
import ProgressBar from "../elements/ProgressBar";
import HomeTestimonial from "../components/HomeTestimonial";
import HomeTeam from "../components/HomeTeam";

const buttons = [
  { title: "All" },
  { title: "Architecture" },
  { title: "Interior Design" },
  { title: "Construction" },
];
const Portfolio = () => {
  const [data, setData] = useState(HomeGalleryArr);
  const [active, setActive] = useState("All");

  const FilterButton = (title: string) => {
    setActive(title);
    const updateitems = HomeGalleryArr.filter((el) =>
      el.categery.includes(title)
    );
    setData(updateitems);
  };
  return (
    <div className="page-content bg-white">
      <CommonBanner img={IMAGES.bnr5} title="OUR PORTFOLIO" text="Portfolio" />
      <section className="content-inner-1 line-img overflow-hidden masonry-portfolio">
        <div className="container">
          <div className="site-filters style-1 clearfix center">
            <ul className="filters">
              {buttons.map(({ title }, index) => (
                <li
                  className={`btn ${active === title ? "active" : ""}`}
                  key={index}
                  onClick={() => {
                    FilterButton(title);
                  }}
                >
                  <Link to="#">{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          selector={".lightimg"}
        >
          <Swiper
            className="swiper-container swiper-portfolio lightgallery aos-item"
            slidesPerView={4}
            loop={true}
            breakpoints={{
              1200: { slidesPerView: 4 },
              991: { slidesPerView: 3 },
              575: { slidesPerView: 2 },
              240: { slidesPerView: 1 },
            }}
          >
            {data.map((item, ind) => {
              if (item?.className !== "hide") {
                return (
                  <SwiperSlide className="swiper-slide" key={ind}>
                    <div className="dz-box overlay style-1">
                      <div className="dz-media">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="dz-info">
                        <span
                          data-exthumbimage={item.img}
                          data-src={item.img}
                          className="view-btn lightimg"
                          title="INTERIOR DESIGN"
                        >
                          <img
                            src={item.img}
                            alt=""
                            style={{ display: "none" }}
                          />
                        </span>
                        <h6 className="sub-title">INTERIOR DESIGN</h6>
                        <h4 className="title m-b15">
                          <Link to="/portfolio-details">
                            Modern House Interior <span>New York</span>
                          </Link>
                        </h4>
                      </div>
                    </div>
                    <div className="dz-box overlay style-1">
                      <div className="dz-media">
                        <img src={item?.img2} alt="" />
                      </div>
                      <div className="dz-info">
                        <span
                          data-exthumbimage={item?.img2}
                          data-src={item?.img2}
                          className="view-btn lightimg"
                          title="CREATIVE"
                        >
                          <img
                            src={item?.img2}
                            alt=""
                            style={{ display: "none" }}
                          />
                        </span>
                        <h6 className="sub-title">CREATIVE</h6>
                        <h4 className="title m-b15">
                          <Link to="/portfolio-details">
                            Sample Hotel Art,<span> India</span>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              } else {
                return (
                  <SwiperSlide className="swiper-slide" key={ind}>
                    <div className="dz-box overlay style-1">
                      <div className="dz-media">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="dz-info">
                        <span
                          data-exthumbimage={item.img}
                          data-src={item.img}
                          className="view-btn lightimg"
                          title="INTERIOR DESIGN"
                        >
                          <img
                            src={item.img}
                            alt=""
                            style={{ display: "none" }}
                          />
                        </span>
                        <h6 className="sub-title">INTERIOR DESIGN</h6>
                        <h4 className="title m-b15">
                          <Link to="/portfolio-details">
                            Modern House Interior <span>New York</span>
                          </Link>
                        </h4>
                      </div>
                    </div>
                    <div className="dz-box overlay style-1">
                      <div className="dz-media">
                        <img src={item?.img2} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </LightGallery>
      </section>
      <ClientLogo />
      <ProgressBar />
      <section
        className="content-inner bg-gray section-title style-1 line-img"
        data-name="Testimonial"
      >
        <div className="container">
          <div className="row section-head-bx align-items-center">
            <div className="col-md-8">
              <div className="section-head style-1">
                <h2 className="title">
                  WHAT OUR <span className="text-primary">CLIENT SAYS</span>
                </h2>
                <div className="dz-separator style-1 text-primary"></div>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <div className="testimonial-swiper m-b30">
                <div className="btn-prev swiper-button-prev3 pe-3">
                  <i className="las la-long-arrow-alt-left"></i>PREV
                </div>
                <div className="btn-next swiper-button-next3 ps-3">
                  NEXT<i className="las la-long-arrow-alt-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeTestimonial prev={"btn-prev"} next={"btn-next"} />
      </section>
      <section
        className="content-inner section-title style-2 line-img"
        data-name="Our Team"
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">
              CREATIVE <span className="text-primary">EXPERTISE</span>
            </h2>
            <div className="dz-separator style-1 text-primary"></div>
          </div>
          <HomeTeam />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
