import { Link } from "react-router-dom";
import HomeTeam from "../components/HomeTeam";
import HomeTestimonial from "../components/HomeTestimonial";
import ClientLogo from "../elements/ClientLogo";
import CommonBanner from "../elements/CommonBanner";
import { ServicesArr } from "../elements/JsonData";
import ProgressBar from "../elements/ProgressBar";
import { IMAGES } from "../elements/theme";

const Services = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner img={IMAGES.bnr2} title="OUR SERVICES" text="Services" />
      <section className="content-inner line-img">
        <div className="container">
          <div className="row">
            {ServicesArr.map(({ img, title, icon }, ind) => (
              <div className="col-lg-4 col-md-6 aos-item" key={ind}>
                <div
                  className="icon-bx-wraper style-1 m-b30 flip-bx"
                  data-name="1."
                >
                  <div
                    className="front overlay-black-middle"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    <div className="inner">
                      <div>
                        <div className="sep-tl"></div>
                        <div className="sep-br"></div>
                        <h4 className="title m-b10">{title}</h4>
                        <h6 className="sub-title text-primary">
                          WE DESIGN IDEAS
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <div>
                        <div className="sep-tl"></div>
                        <div className="sep-br"></div>
                        <div className="icon-lg">
                          <span className="icon-cell text-primary">
                            <i className={icon}></i>
                          </span>
                        </div>
                        <h4 className="title m-b15">
                          <Link to="/services-details" className="text-white">
                            Interior Design
                          </Link>
                        </h4>
                        <p>
                          Quisque vel condimentum dolor, vitae luctus lacus.
                          Integer finibus arcu non ultrices rhoncus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default Services;
