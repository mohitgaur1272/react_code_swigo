import { Link } from "react-router-dom";
import HomeTeam from "../components/HomeTeam";
import ClientLogo from "../elements/ClientLogo";
import CommonBanner from "../elements/CommonBanner";
import { IMAGES } from "../elements/theme";

const ServicesDetail = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner
        img={IMAGES.bnr4}
        title="SERVICE DETAILS"
        text="Service Details"
      />
      <section className="content-inner line-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 m-b30 aos-item">
              <div className="sticky-top">
                <div className="widget ext-sidebar-menu">
                  <ul className="menu">
                    <li className="active">
                      <Link to={"#"}>Interior Design</Link>{" "}
                    </li>
                    <li>
                      <Link to={"#"}>Floor Plan Design</Link>{" "}
                    </li>
                    <li>
                      <Link to={"#"}>Construction</Link>{" "}
                    </li>
                    <li>
                      <Link to={"#"}>Furniture Production</Link>{" "}
                    </li>
                    <li>
                      <Link to={"#"}>Architecture Design</Link>{" "}
                    </li>
                    <li>
                      <Link to={"#"}>24X 7 Support</Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 m-b30 aos-item">
              <div className="service-detail">
                <div className="dz-media">
                  <img src={IMAGES.services_detail_pic1} alt="" />
                </div>
                <div className="dz-content">
                  <h2 className="title m-b15">
                    Maecenas sit amet luctus magna, in placerat ante.
                  </h2>
                  <p>
                    Donec non ex elementum, auctor elit Link, vehicula mauris.
                    Etiam varius faucibus tortor quis iaculis. Proin tortor
                    eros, dignissim at velit nec, cursus gravida lectus.
                    Pellentesque egestas nisl et lacus sollicitudin pulvinar.
                    Donec Link maximus augue,
                  </p>
                  <p className="m-b0">
                    Suspendisse ornare suscipit nibh quis maximus. Praesent
                    tristique erat eget elit finibus elementum. Suspendisse
                    potenti. In finibus ac nulla vel tincidunt. In hac habitasse
                    platea dictumst. Aliquam vel pulvinar lectus. Sed Link risus
                    rutrum, imperdiet lacus vehicula, egestas eros. Nullam vitae
                    orci at diam imperdiet sagittis eu in mi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClientLogo />
      <section
        className="content-inner section-title style-2 line-img"
        data-name="Our Team"
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">
              CREATIVE <span className="text-primary">EXPERTISE</span>
            </h2>
            <div className="dz-separator style-1 text-primary"></div>
          </div>
          <HomeTeam />
        </div>
      </section>
    </div>
  );
};

export default ServicesDetail;
