import HomeBlog from "../components/HomeBlog";
import HomeGallery from "../components/HomeGallery";
import HomeTeam from "../components/HomeTeam";
import HomeTestimonial from "../components/HomeTestimonial";
import CommonBanner from "../elements/CommonBanner";
import CounterUp from "../elements/CounterUp";
import HomeAbout from "../elements/HomeAbout";
import OurFeatures from "../elements/OurFeatures";
import { IMAGES } from "../elements/theme";

const AboutUs = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner img={IMAGES.bnr1} title="ABOUT US" text="About us" />
      <section
        className="content-inner line-img section-title style-2"
        data-name="About Us"
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">
              WELCOME TO <span className="text-primary">CODESIGN</span>
            </h2>
            <div className="dz-separator style-1 text-primary"></div>
          </div>
          <HomeAbout />
        </div>
      </section>
      <CounterUp />
      <OurFeatures />
      <section
        className="content-inner-2 bg-gray line-img pb-1 section-title style-1"
        data-name="Portfolio"
      >
        <div className="container">
          <div className="row align-items-center section-head-bx">
            <div className="col-md-8">
              <div className="section-head style-1">
                <h2 className="title">
                  SEE OUR <span className="text-primary">LATEST WORK</span>
                </h2>
                <div className="dz-separator style-1 text-primary"></div>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <div className="portfolio-pagination d-inline-block mb-5">
                <div className="btn-prev swiper-button-prev2 pe-3">
                  <i className="las la-long-arrow-alt-left"></i>PREV
                </div>
                <div className="btn-next swiper-button-next2 ps-3">
                  NEXT<i className="las la-long-arrow-alt-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeGallery
          prev={"swiper-button-prev2"}
          next={"swiper-button-next2"}
        />
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
      <section className="content-inner-1 line-img">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">
              STAY UPDATED <span className="text-primary">WITH US</span>
            </h2>
            <div className="dz-separator style-1 text-primary"></div>
          </div>
          <HomeBlog />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
