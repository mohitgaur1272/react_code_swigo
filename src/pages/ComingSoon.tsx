import { Link } from "react-router-dom";
import { IMAGES } from "../elements/theme";
import { useEffect, useState, useContext } from "react";
import { Context } from "../context/contextApi";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const { setShow, setSidebar } = useContext(Context);
  const [timestate, setTimestate] = useState({
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    comingSoon();
  }, []);

  const comingSoon = () => {
    const distance = new Date("December 9 2023").getTime();
    const intVal = setInterval(() => {
      const getValues = new Date().getTime();
      const data = distance - getValues;

      const d = Math.floor(data / (1000 * 60 * 60 * 24));
      const h = Math.floor((data % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((data % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((data % (1000 * 60)) / 1000);

      setTimestate({ day: d, hour: h, min: m, sec: s });
      if (distance < 0) {
        clearInterval(intVal);
      }
    }, 1000);
  };
  return (
    <motion.div
      className="page-content bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="dz-coming-soon style-4">
        <div className="sidenav-menu">
          <div className="logo">
            <Link to="/">
              <img src={IMAGES.logo_icon} alt="" />
            </Link>
          </div>
          <ul className="dz-social-icon">
            <li className="wow fadeInRight">
              <Link to="#">
                <span>Facebook</span>
              </Link>
            </li>
            <li className="wow fadeInRight">
              <Link to="#">
                <span>Twitter</span>
              </Link>
            </li>
            <li className="wow fadeInRight">
              <Link to="#">
                <span>Linkedin</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="clearfix dz-coming-bx">
          <div className="dz-content">
            <h2 className="dz-title ml2 wow fadeInUp">
              <span>We Are Doing Great,</span>
              <br />
              <span>Almost Done...</span>
            </h2>
            <div className="countdown">
              <div className="date wow fadeInUp">
                <span className="days time">{timestate.day}</span>
                <span>Days</span>
              </div>
              <div className="date wow fadeInUp">
                <span className="hours time">{timestate.hour}</span>
                <span>Hours</span>
              </div>
              <div className="date wow fadeInUp">
                <span className="mins time">{timestate.min}</span>
                <span>Minutes</span>
              </div>
              <div className="date wow fadeInUp">
                <span className="secs time">{timestate.sec}</span>
                <span>Second</span>
              </div>
            </div>
            <div className="dz-coming-btn wow fadeInUp">
              <Link
                to="#"
                className="btn btn-primary openbtn m-r10 black"
                onClick={() => {
                  setSidebar(true);
                }}
              >
                GET IN TOUCH
              </Link>
              <Link
                to="#"
                className="btn btn-secondary"
                onClick={() => {
                  setShow(true);
                }}
              >
                SUBSCRIBE NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="slider-box">
          <img src={IMAGES.bg8} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default ComingSoon;
