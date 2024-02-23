import { Swiper, SwiperSlide } from "swiper/react";
import { Home2TestimonialArr } from "../elements/JsonData";
import { Navigation, Pagination } from "swiper/modules";

interface propFile {
  prev: string;
  next: string;
}

const Home2Testimonial = ({ prev, next }: propFile) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 m-b20">
          <Swiper
            className="swiper-container testimonial-swiper-2"
            loop={true}
            modules={[Navigation, Pagination]}
            speed={1500}
            slidesPerView={2}
            navigation={{
              prevEl: `.${prev}`,
              nextEl: `.${next}`,
            }}
            pagination={{
              el: ".swiper-pagination",
            }}
            breakpoints={{
              1024: { slidesPerView: 2 },
              240: { slidesPerView: 1 },
            }}
          >
            {Home2TestimonialArr.map(({ img }, ind) => (
              <SwiperSlide className="swiper-slide" key={ind}>
                <div className="testimonial-2 aos-item">
                  <div className="testimonial-info m-b20">
                    <div className="testimonial-text">
                      <ul className="star-rating text-primary m-b15">
                        <li>
                          <i className="fa fa-star me-1"></i>
                        </li>
                        <li>
                          <i className="fa fa-star me-1"></i>
                        </li>
                        <li>
                          <i className="fa fa-star me-1"></i>
                        </li>
                        <li>
                          <i className="fa fa-star me-1"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <p>
                        “ Proin quis gravida diam. Donec pretium eu libero eget
                        pharetra congue. Suspendisse in ipsum felis. Proin sit
                        amet elit lorem venenatis . Vivamus porttitor elit nisi,
                        ut placerat libero efficitur vitae ”.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-detail">
                    <div className="testimonial-pic m-r20">
                      <img src={img} alt="" />
                    </div>
                    <div>
                      <h5 className="testimonial-name">Andrey Carol</h5>
                      <span className="testimonial-position text-primary">
                        Designer
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination" style={{ width: "100%" }}></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home2Testimonial;
