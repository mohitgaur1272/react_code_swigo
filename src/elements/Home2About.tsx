import { Link } from "react-router-dom";
import { IMAGES } from "./theme";
import CountUp from "react-countup";

const Home2About = () => {
  return (
    <>
      <section className="content-inner-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-head style-1">
                <h2 className="title">WE SERVE THE BEST FOR YOU</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <p>
                Pellentesque luctus egestas augue quis elementum. Proin
                ultricies sem erat, eu sollicitudin lorem feugiat in. Maecenas
                congue sit amet odio aliquet malesuada.
              </p>
              <Link className="btn-link style-2" to="/contact-us">
                CONTACT US <i className="m-l5 las la-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-inner-3">
        <div className="container">
          <div className="row align-items-center about-bx2">
            <div className="col-lg-6 m-b30">
              <div className="dz-media">
                <img src={IMAGES.about_pic3} alt="" className="img1 aos-item" />
                <img src={IMAGES.pattern13} className="circle-bg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 m-b30 aos-item">
              <div className="section-head style-1">
                <h2 className="title">WE PROVIDE YOU THE BEST EXPERIENCE</h2>
              </div>
              <p>
                Integer pretium, nisi at aliquam faucibus, ligula leo
                sollicitudin ligula, Link scelerisque magna nunc sit amet leo.
                Cras lobortis elementum orci, in lobortis velit gravida vel. In
                hac habitasse platea dictumst.
              </p>
              <div className="history-row m-b30">
                <div>
                  <h2 className="year">
                    <span className="counter">
                      <CountUp start={0} end={10} duration={40} />
                    </span>
                    +
                  </h2>
                  <span className="text">
                    Years Of <br /> Experience
                  </span>
                </div>
                <div>
                  <h2 className="awards">
                    <span className="counter">
                      {" "}
                      <CountUp start={0} end={25} duration={40} />
                    </span>
                    +
                  </h2>
                  <span className="text">
                    Awards <br /> Gained
                  </span>
                </div>
                <div>
                  <h2 className="sales">
                    <span className="counter">
                      {" "}
                      <CountUp start={0} end={50} duration={40} />
                    </span>
                    +
                  </h2>
                  <span className="text">
                    Furniture <br /> Sold
                  </span>
                </div>
              </div>
              <Link to="/about-us" className="btn shadow-primary btn-primary">
                READ MORE <i className="m-l10 las la-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home2About;
