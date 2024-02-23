import { Link } from "react-router-dom";
import { Home2TeamArr } from "../elements/JsonData";
import { Swiper, SwiperSlide } from "swiper/react";

const Home2Team = () => {
  return (
    <div className="row">
      <div className="col-lg-12 m-b30">
        <Swiper
          className="swiper-container team-swiper-2"
          slidesPerView={4}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            1200: { slidesPerView: 4 },
            991: { slidesPerView: 3 },
            575: { slidesPerView: 2 },
            240: { slidesPerView: 1 },
          }}
        >
          {Home2TeamArr.map(({ img }, ind) => (
            <SwiperSlide className="swiper-slide" key={ind}>
              <div className="dz-team style-2 text-center m-b30 overlay-shine aos-item">
                <div className="dz-media">
                  <Link to="#">
                    <img src={img} alt="" />
                  </Link>
                  <ul className="team-social">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dz-content m-t20">
                  <h6 className="dz-position line text-primary">Director</h6>
                  <h5 className="dz-name">
                    <Link to="#">Andrey Carol</Link>
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home2Team;
