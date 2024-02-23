import { Link } from "react-router-dom";
import { HomeBlogArr } from "../elements/JsonData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const HomeBlog = () => {
  return (
    <div className="blog-area">
      <Swiper
        className="swiper-container blog-swiper"
        slidesPerView={3}
        loop={true}
        speed={1200}
        modules={[Autoplay]}
        autoplay={{
          delay: 1200,
        }}
        breakpoints={{
          1200: { slidesPerView: 3 },
          691: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }}
      >
        {HomeBlogArr.map(({ img, title }, ind) => (
          <SwiperSlide className="swiper-slide" key={ind}>
            <div className="dz-card blog-grid style-1 aos-item">
              <div className="dz-media">
                <Link to="/blog-details">
                  <img src={img} alt="" />
                </Link>
              </div>
              <div className="dz-info">
                <div className="dz-meta">
                  <ul>
                    <li className="post-date">7 March 2023</li>
                    <li className="post-user">
                      By <Link to="#">John Doe</Link>
                    </li>
                  </ul>
                </div>
                <h5 className="dz-title">
                  <Link to="/blog-details">{title}</Link>
                </h5>
                <div className="dz-post-text text">
                  <p>
                    Aenean ultricies ex eu nunc feugiat auctor. Donec efficitur
                    elementum odio, convallis facilisis augue porttitor.
                  </p>
                </div>
                <Link
                  to="/blog-details"
                  className="btn shadow-primary icon-btn btn-primary"
                >
                  <i className="fas fa-caret-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBlog;
