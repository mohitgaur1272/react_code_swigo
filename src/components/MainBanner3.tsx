import { useState, useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import {
  Parallax,
  Pagination,
  Navigation,
  Thumbs,
  Autoplay,
} from "swiper/modules";
import { MainBanner3Arr } from "../elements/JsonData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tumbSwiperArr = [{ num: "01" }, { num: "02" }, { num: "03" }];

const MainBanner3 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const ref = useRef<SwiperRef | null>(null);
  return (
    <motion.div
      className="silder-three"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Swiper
        className="swiper-container main-silder-swiper-03"
        modules={[Parallax, Pagination, Navigation, Thumbs, Autoplay]}
        parallax={true}
        speed={1500}
        loop={true}
        autoplay={{ delay: 1500 }}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        onSwiper={(swiper) => {
          if (ref.current) ref.current.swiper = swiper;
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-home-prev",
          nextEl: ".swiper-button-home-next",
        }}
      >
        {MainBanner3Arr.map(({ img }, ind) => (
          <SwiperSlide className="swiper-slide" key={ind}>
            <div className="silder-img overlay-black-middle">
              <img src={img} data-swiper-parallax="30%" alt="" />
            </div>
            <div className="silder-content">
              <div className="inner-content">
                <h1 className="title">
                  <span className="text-primary">CODESIGN</span> THE MODERN ART
                  OF SIMPLICITY
                </h1>
                <p className="m-b30">
                  Morbi pharetra fermentum facilisis. Aenean eleifend quam ante,
                  at luctus turpis rhoncus quis. Quisque in est luctus, blandit
                  lorem quis, placerat augue.
                </p>
                <Link to="/about-us" className="btn shadow-primary btn-primary">
                  READ MORE <i className="m-l10 fas fa-caret-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination swiper-pagination-white"></div>
        <div className="slider-one-pagination">
          <div className="btn-prev swiper-button-home-prev swiper-button-white">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="btn-next swiper-button-home-next swiper-button-white">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </Swiper>
      <Swiper
        className="swiper-container swiperThumbsHome"
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSwiper={(swiper: any) => {
          setThumbsSwiper(swiper);
        }}
        breakpoints={{
          1200: { slidesPerView: 3 },
          775: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }}
      >
        {tumbSwiperArr.map(({ num }, ind) => (
          <SwiperSlide className="swiper-slide" key={ind}>
            <div className="thumb-content">
              <div className="number">{num}</div>
              <h6 className="thumb-title">
                Codesign the modern art of simplicity
              </h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="scroll-down">Scroll Down</div>
    </motion.div>
  );
};

export default MainBanner3;
