import { Link } from "react-router-dom";
import { IMAGES } from "../elements/theme";
import { useContext } from "react";
import { Context } from "../context/contextApi";
import { motion } from "framer-motion";

const MainBanner6 = () => {
  const { setModabox } = useContext(Context);
  return (
    <>
      <motion.div
        className="banner-six position-relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="container">
          <div className="row  inner-content">
            <div className="col-12">
              <h1 className="title">
                We Create Your Dream
                <br /> Ideas
                <span className="text-primary"> Creative Architecture</span>
              </h1>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="banner-content">
                <div className="inner-content">
                  <p className="text m-b30">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesettingindustry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <div className="contant-box">
                    <Link
                      to="/about-us"
                      className="btn shadow-primary btn-primary m-r30 btn-sm"
                    >
                      READ MORE
                    </Link>
                    <Link
                      className="video-btn style-1 popup-youtube"
                      to="#"
                      onClick={() => {
                        setModabox(true);
                      }}
                    >
                      <i className="fa fa-play"></i>
                      <span className="text">Watch Video</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12 ">
              <div className="banner-media">
                <div className="dz-media overlay-black-light m-b30">
                  <img src={IMAGES.slide_pic7} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MainBanner6;
