import { Swiper, SwiperSlide } from "swiper/react";
import { Home5TestionialArr } from "./JsonData";
import { Autoplay } from "swiper/modules";

const Home5Testimonial = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 m-b20">
          <Swiper
            className="swiper-container testimonial-swiper-3"
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            speed={1500}
            modules={[Autoplay]}
            autoplay={{ delay: 1500 }}
            breakpoints={{
              1200: { slidesPerView: 2 },
              240: { slidesPerView: 1 },
            }}
          >
            {Home5TestionialArr.map(({ img, name, position }, ind) => (
              <SwiperSlide className="swiper-slide" key={ind}>
                <div className="testimonial-3 aos-item">
                  <div className="testimonial-info m-b20">
                    <div className="testimonial-detail text-center">
                      <div className="testimonial-pic m-r20">
                        <img src={img} alt="" />
                      </div>
                      <div>
                        <h5 className="testimonial-name">{name}</h5>
                        <span className="testimonial-position">{position}</span>
                        <ul className="star-rating  m-b0">
                          <li>
                            <i className="fa fa-star me-1 text-primary"></i>
                          </li>
                          <li>
                            <i className="fa fa-star me-1 text-primary"></i>
                          </li>
                          <li>
                            <i className="fa fa-star me-1 text-primary"></i>
                          </li>
                          <li>
                            <i className="fa fa-star me-1"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="testimonial-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <svg
                      width="123"
                      height="122"
                      viewBox="0 0 123 122"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.2778 17.9409C12.237 17.9409 0.00200462 30.0765 0.00200462 44.9952C0.00200462 59.387 11.3887 71.1911 25.6957 72.0065C25.9435 74.6593 25.7576 81.8804 18.7814 91.9253C18.2541 92.6831 18.3498 93.705 19.0047 94.3547C21.8595 97.1862 23.6238 98.9695 24.8586 100.217C26.4747 101.848 27.2123 102.592 28.2914 103.564C28.6574 103.893 29.119 104.059 29.5827 104.059C30.033 104.059 30.4816 103.903 30.8439 103.592C43.0001 93.1 56.504 71.4219 54.5502 44.8574C53.4053 29.2612 41.936 17.9409 27.2778 17.9409ZM29.6014 99.5484C29.0779 99.0366 28.4809 98.4335 27.6007 97.5453C26.531 96.4639 25.0633 94.982 22.8373 92.7668C31.3038 79.8269 29.7046 70.6104 29.0046 69.2886C28.6723 68.6613 27.991 68.2387 27.2778 68.2387C14.3578 68.2387 3.84575 57.812 3.84575 44.9952C3.84575 32.18 14.3578 21.7534 27.2778 21.7534C39.864 21.7534 49.7211 31.5862 50.7176 45.1328C52.9135 75.0112 35.0105 94.4105 29.6014 99.5484Z"
                        fill="#318D85"
                      />
                      <path
                        d="M122.809 44.8574C121.66 29.2631 110.189 17.9409 95.5346 17.9409C80.4936 17.9409 68.2566 30.0765 68.2566 44.9952C68.2566 59.387 79.6453 71.1911 93.9542 72.0065C94.202 74.6574 94.0142 81.8746 87.0362 91.9253C86.5089 92.6831 86.6046 93.705 87.2596 94.3547C90.103 97.175 91.8634 98.9546 93.0984 100.2C94.7218 101.842 95.4633 102.59 96.548 103.566C96.9139 103.893 97.3775 104.059 97.8393 104.059C98.2898 104.059 98.7383 103.903 99.1004 103.59C111.257 93.0981 124.761 71.4202 122.809 44.8574ZM97.8579 99.5484C97.3306 99.0328 96.7282 98.426 95.8403 97.5288C94.7706 96.4489 93.3087 94.971 91.092 92.7668C99.5584 79.825 97.9613 70.6104 97.2631 69.2886C96.9308 68.6632 96.2478 68.2387 95.5346 68.2387C82.6125 68.2387 72.1004 57.812 72.1004 44.9952C72.1004 32.18 82.6125 21.7534 95.5346 21.7534C108.119 21.7534 117.978 31.5862 118.976 45.1347C121.17 75.0093 103.267 94.4105 97.8579 99.5484Z"
                        fill="#318D85"
                      />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home5Testimonial;
