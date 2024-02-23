import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Home2OurPortFolio from "../components/Home2OurPortFolio";
import Home2Team from "../components/Home2Team";
import Home2Testimonial from "../components/Home2Testimonial";
import Home2About from "../elements/Home2About";
import Home2Services from "../elements/Home2Services";
import { IMAGES } from "../elements/theme";
import Home2Modalbox from "../components/Home2Modalbox";
import { ProgressBar2 } from "../elements/ProgressBar";
import Home2Blog from "../components/Home2Blog";
import Home2Subscription from "../elements/Home2Subscription";
import { Context } from "../context/contextApi";

const Home4 = () => {
  const { setModabox, switcheData } = useContext(Context);
  useEffect(() => {
    document.body.setAttribute("data-color", "color_5");
  }, [switcheData]);
  return (
    <div className="page-content bg-white">
      <Home2About />
      <section className="content-inner-2">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">OUR LATEST WORK</h2>
          </div>
        </div>
        <Home2OurPortFolio />
      </section>
      <section className="content-inner overflow-hidden">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">WHAT WE PROVIDE</h2>
          </div>
          <Home2Services />
        </div>
      </section>
      <section className="content-inner bg-gray">
        <div className="container">
          <div className="row section-head-bx align-items-center">
            <div className="col-md-8">
              <div className="section-head style-1">
                <h2 className="title">WHAT OUR CLIENT SAYS</h2>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <div className="testimonial-swiper-2 m-b30">
                <div className="btn-prev swiper-button-prev3 pe-3">
                  <i className="las la-long-arrow-alt-left"></i>
                </div>
                <div className="btn-next swiper-button-next3 ps-3">
                  <i className="las la-long-arrow-alt-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Home2Testimonial
          prev={"swiper-button-prev3"}
          next={"swiper-button-next3"}
        />
      </section>
      <section className="content-inner">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">CREATIVE EXPERTISE</h2>
          </div>
          <Home2Team />
        </div>
      </section>
      <section
        className="content-inner overlay-white-dark"
        style={{
          backgroundImage: `url(${IMAGES.bg5})`,
          backgroundPosition: "left top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="video-bx content-media style-3 m-b20">
                <div className="video-btn aos-item">
                  <Link
                    to={"#"}
                    className="popup-youtube"
                    onClick={() => {
                      setModabox(true);
                    }}
                  >
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
              <div className="section-head style-1 text-center">
                <h2 className="title">
                  WE HAVE GREAT IDEAS <br />
                  WITH DREMS
                </h2>
              </div>
            </div>
            <Home2Modalbox />
          </div>
        </div>
      </section>
      <ProgressBar2 />
      <section className="content-inner-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="section-head style-1">
                <h2 className="title">STAY UPDATED WITH US</h2>
              </div>
            </div>
            <div className="col-md-4 text-md-end text-start m-b30">
              <Link className="btn-link style-2" to="#">
                VIEW MORE <i className="m-l5 las la-plus"></i>
              </Link>
            </div>
          </div>
          <Home2Blog />
        </div>
      </section>
      <Home2Subscription />
    </div>
  );
};

export default Home4;
