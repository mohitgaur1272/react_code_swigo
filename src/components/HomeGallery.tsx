import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { HomeGalleryArr } from "../elements/JsonData";

interface propsFile {
  prev: string;
  next: string;
}
const HomeGallery = ({ prev, next }: propsFile) => {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      selector={".lightimg"}
    >
      <Swiper
        className="swiper-container swiper-portfolio lightgallery aos-item"
        slidesPerView={4}
        speed={1500}
        loop={true}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: `.${prev}`,
          nextEl: `.${next}`,
        }}
        autoplay={{ delay: 1500 }}
        breakpoints={{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }}
      >
        {HomeGalleryArr.map((item, ind) => {
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
                      <img src={item.img} alt="" style={{ display: "none" }} />
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
                      <img src={item.img} alt="" style={{ display: "none" }} />
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
  );
};

export default HomeGallery;
