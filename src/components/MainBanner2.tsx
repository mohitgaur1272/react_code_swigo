import { Swiper, SwiperSlide } from "swiper/react";
import { MainBanner2Arr } from "../elements/JsonData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MainBanner2 = () => {
  return (
    <motion.div
      className="silder-two"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Swiper
        className="swiper-container main-silder-swiper-2"
        speed={1500}
        loop={true}
      >
        {MainBanner2Arr.map(({ img, title, text }, ind) => (
          <SwiperSlide className="swiper-slide" key={ind}>
            <div className="dz-slide-item">
              <div className="silder-content line-img">
                <div className="inner-content">
                  <h6 className="sub-title text-primary">INTERIOR DESIGN</h6>
                  <h1 className="title">
                    {title}
                    <span className="text-primary">{text}</span>
                  </h1>
                  <p className="m-b30">
                    Morbi pharetra fermentum facilisis. Aenean eleifend quam
                    ante, at luctus turpis rhoncus quis. Quisque in est luctus,
                    blandit lorem quis, placerat augue.
                  </p>
                  <Link
                    to="/about-us"
                    className="btn shadow-primary btn-primary m-r30 m-b10"
                  >
                    READ MORE <i className="m-l5 las la-plus"></i>
                  </Link>
                  <Link
                    to="/contact-us"
                    className="btn btn-outline-primary shadow-none m-b10"
                  >
                    CONTACT US <i className="m-l5 las la-plus"></i>
                  </Link>
                </div>
              </div>
              <div className="silder-img overlay-black-light">
                <img src={img} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="follow-info style-2 left">
        <div className="inner-info">
          <ul>
            <li> +91 879 5427 987</li>
            <li>info@gmail.com</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default MainBanner2;
