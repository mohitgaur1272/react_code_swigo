import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { IMAGES } from "../elements/theme";
import { motion } from "framer-motion";

const MainBanner4 = () => {
  return (
    <motion.div
      className="silder-for"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Swiper
        className="swiper-container main-silder-swiper-04"
        speed={1500}
        modules={[Parallax, Pagination, Autoplay]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        autoplay={{ delay: 1500 }}
        parallax={true}
        loop={true}
      >
        <SwiperSlide className="swiper-slide">
          <div className="silder-img overlay-black-middle">
            <video autoPlay loop id="video-background" muted>
              <source src={IMAGES.video} type="video/mp4" />
            </video>
          </div>
          <div className="silder-content">
            <div className="inner-content">
              <h1 className="title">
                <span>New Homes</span>
                <br />
                <strong>Ready To</strong>
                <br />
                <span className="extext">Move Into</span>
              </h1>
              <p className="m-b30">
                We Prepare home with furniture and decorations so you can move
                in right away.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="silder-img overlay-black-middle">
            <img src={IMAGES.mainslid_pic5} data-swiper-parallax="30%" alt="" />
          </div>
          <div className="silder-content">
            <div className="inner-content">
              <h1 className="title">
                <span>New Homes</span>
                <br />
                <strong>Ready To</strong>
                <br />
                <span className="extext">Move Into</span>
              </h1>
              <p className="m-b30">
                We Prepare home with furniture and decorations so you can move
                in right away.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="silder-img overlay-black-middle">
            <img src={IMAGES.mainslid_pic1} data-swiper-parallax="30%" alt="" />
          </div>
          <div className="silder-content">
            <div className="inner-content">
              <h1 className="title">
                <span>New Homes</span>
                <br />
                <strong>Ready To</strong>
                <br />
                <span className="extext">Move Into</span>
              </h1>
              <p className="m-b30">
                We Prepare home with furniture and decorations so you can move
                in right away.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination" style={{ width: "100%" }}></div>
      </Swiper>
    </motion.div>
  );
};

export default MainBanner4;
