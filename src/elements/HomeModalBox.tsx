import { useContext } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "./theme";
import { Context } from "../context/contextApi";
import { HomeModalBoxArr } from "./JsonData";
import { motion } from "framer-motion";
const HomeModalBox = () => {
  const { setModabox } = useContext(Context);
  return (
    <motion.section
      className="dz-content-bx style-1 line-img p-t50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="dz-content-inner bg-gray"
        style={{
          backgroundImage: ` url(${IMAGES.backgroun_pattern1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-bx content-media style-1">
                <img src={IMAGES.video_pic1} alt="" />
                <div className="video-btn aos-item">
                  <Link
                    to="#"
                    className="popup-youtube"
                    onClick={() => {
                      setModabox(true);
                    }}
                  >
                    <i className="flaticon-play"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 inner-content">
              <div className="section-head style-1">
                <h2 className="title">
                  WATCH US HOW WE{" "}
                  <span className="text-primary">CREATE YOUR DREAM</span>
                </h2>
                <div className="dz-separator style-1 text-primary"></div>
              </div>
              <div className="row">
                {HomeModalBoxArr.map(({ num, title }, ind) => (
                  <div className="col-lg-12 col-md-6 aos-item" key={ind}>
                    <div className="icon-bx-wraper style-2 left m-b50">
                      <div className="icon-bx-md icon-bx m-r20">{num}</div>
                      <div className="icon-content">
                        <h4 className="title m-b0">{title}</h4>
                        <div className="dz-separator style-2 bg-primary"></div>
                        <p>
                          Maecenas eget commodo risus. Praesent facilisis
                          iaculis dapibus. Donec ac cursus est, ut vehicula
                          enim.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeModalBox;
