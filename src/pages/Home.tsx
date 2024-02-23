import { useEffect, useContext } from "react";
import HomeBlog from "../components/HomeBlog";
import HomeGallery from "../components/HomeGallery";
import HomeTeam from "../components/HomeTeam";
import HomeTestimonial from "../components/HomeTestimonial";
import MainSlider from "../components/MainSlider";
import HomeAbout from "../elements/HomeAbout";
import HomeModalBox from "../elements/HomeModalBox";
import HomeServices from "../elements/HomeServices";
import { Context } from "../context/contextApi";
import { motion } from "framer-motion";

const Home = () => {
  const { switcheData } = useContext(Context);

  useEffect(() => {
    document.body.setAttribute("data-color", "color_1");
  }, [switcheData]);

 
  return (
    <div className="page-content bg-white">
      <MainSlider />
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
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
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
      </motion.section>
      <section className="content-inner-1 line-img overflow-hidden">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">
              WHAT <span className="text-primary">WE PROVIDE</span>
            </h2>
            <div className="dz-separator style-1 text-primary"></div>
          </div>
          <HomeServices />
        </div>
      </section>
      <HomeModalBox />
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

export default Home;
