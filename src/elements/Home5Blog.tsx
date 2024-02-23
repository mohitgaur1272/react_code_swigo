import { Swiper, SwiperSlide } from "swiper/react";
import { Home5BlogArr } from "./JsonData";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Home5Blog = () => {
  return (
    <div className="blog-area">
      <Swiper
        className="swiper-container blog-swiper-2"
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1500 }}
        speed={1500}
        breakpoints={{
          1200: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }}
      >
        {Home5BlogArr.map(({ img }, ind) => (
          <SwiperSlide className="swiper-slide" key={ind}>
            <div className="dz-card blog-grid style-3 aos-item overlay-shine">
              <div className="dz-media">
                <Link to="/blog-details">
                  <img src={img} alt="" />
                </Link>
              </div>
              <div className="dz-info">
                <div className="dz-meta">
                  <ul>
                    <li className="post-btn">
                      <Link to="/blog-details" className="btn  btn-primary">
                        Bussiness
                      </Link>
                    </li>
                    <li className="post-date">
                      <span>
                        <i className="far fa-clock text-primary"></i>
                      </span>
                      Jan 20, 2022
                    </li>
                    <li className="post-user">
                      <Link to="#">
                        <span>
                          <i className="far fa-comment text-primary"></i>
                        </span>
                        1947
                      </Link>
                    </li>
                  </ul>
                </div>
                <h5 className="dz-title">
                  <Link to="/blog-details">
                    Ingenious Ways You Can Do With Construction.
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy
                    text of the printing and typesetting. of the printing and
                    typesetting.
                  </p>
                </div>
                <Link
                  to="/blog-details"
                  className="btn shadow-primary icon-btn btn-primary"
                >
                  <i className="las la-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home5Blog;
