import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogLeftContent from "../components/BlogLeftContent";
import CommonBanner from "../elements/CommonBanner";
import DefaultPagination from "../elements/DefaultPagination";
import { IMAGES } from "../elements/theme";
import { Navigation } from "swiper/modules";
import { BlogCardArr } from "../elements/JsonData";
import { Link } from "react-router-dom";
import BlogCard from "../elements/BlogCard";
import { Context } from "../context/contextApi";

const BlogLargLeftSidebar = () => {
  const { setModabox } = useContext(Context);
  return (
    <div className="page-content bg-white">
      <CommonBanner img={IMAGES.bnr3} title="OUR BLOG" text="Our Blog" />
      <div className="content-inner">
        <div className="container">
          <div className="row">
            <BlogLeftContent />

            <div className="col-xl-8 col-lg-8">
              <BlogCard img={IMAGES.blog_large_pic1} />
              <div className=" card-container">
                <div className="dz-card blog-grid style-1 m-b50 aos-item">
                  <div className="dz-media">
                    <Swiper
                      className="swiper-container post-swiper"
                      speed={1500}
                      loop={true}
                      modules={[Navigation]}
                      navigation={{
                        prevEl: ".prev-post-swiper-btn",
                        nextEl: ".next-post-swiper-btn",
                      }}
                    >
                      {BlogCardArr.map(({ img }, ind) => (
                        <SwiperSlide className="swiper-slide" key={ind}>
                          <Link to="/blog-details">
                            <img src={img} alt="" />
                          </Link>
                        </SwiperSlide>
                      ))}

                      <div className="prev-post-swiper-btn">
                        <i className="la fa-angle-left"></i>
                      </div>
                      <div className="next-post-swiper-btn">
                        <i className="la fa-angle-right"></i>
                      </div>
                    </Swiper>
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
                    <h3 className="dz-title">
                      <Link to="/blog-details">
                        Praesent pharetra congue sem, nec euismod nisi
                        fermentum.
                      </Link>
                    </h3>
                    <div className="dz-post-text text">
                      <p>
                        Sed non sapien urna. Cras quis porta risus, vitae
                        pulvinar nibh. In hac habitasse platea dictumst. Integer
                        congue et enim cursus porttitor. Vestibulum mattis
                        placerat magna, sit amet laoreet sapien.
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
              </div>
              <div className=" card-container">
                <div className="dz-card blog-grid style-1 m-b50 post-video aos-item">
                  <div className="dz-media">
                    <Link to="#">
                      <img src={IMAGES.blog_large_pic3} alt="" />
                      <div
                        className="post-video-icon fa fa-play"
                        onClick={() => {
                          setModabox(true);
                        }}
                      ></div>
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
                    <h3 className="dz-title">
                      <Link to="/blog-details">
                        Praesent pharetra congue sem, nec euismod nisi
                        fermentum.
                      </Link>
                    </h3>
                    <div className="dz-post-text text">
                      <p>
                        Sed non sapien urna. Cras quis porta risus, vitae
                        pulvinar nibh. In hac habitasse platea dictumst. Integer
                        congue et enim cursus porttitor. Vestibulum mattis
                        placerat magna, sit amet laoreet sapien.
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
              </div>
              <BlogCard img={""} />
              <DefaultPagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLargLeftSidebar;
