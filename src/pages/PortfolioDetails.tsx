import { useContext } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import CommonBanner from "../elements/CommonBanner";
import {
  PortfolioDetailsArr,
  PortfolioDetailsArr2,
} from "../elements/JsonData";
import { IMAGES } from "../elements/theme";
import { Link } from "react-router-dom";
import { Context } from "../context/contextApi";
import RelatedWorkGallery from "../elements/RelatedWorkGallery";

const PortfolioDetails = () => {
  const { setModabox } = useContext(Context);
  return (
    <div className="page-content bg-white">
      <CommonBanner
        img={IMAGES.bnr1}
        title="PORTFOLIO DETAIL"
        text="Portfolio"
      />
      <LightGallery
        elementClassNames="content-inner port-detail lightgallery line-img"
        speed={500}
        selector={".lightimg"}
        plugins={[lgThumbnail, lgZoom]}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-b30 aos-item">
              <h2 className="title m-b0">
                We Help You Buildng The Dreams & Bring More Than You Expect
              </h2>
            </div>
            <div className="col-lg-4 m-b30 aos-item">
              <ul className="info-list">
                <li>
                  <h2 className="text-primary">100%</h2>
                  <span>Work Completed</span>
                </li>
                <li>
                  <h2 className="text-primary">250</h2>
                  <span>Workers Have Done</span>
                </li>
                <li>
                  <h2 className="text-primary">480</h2>
                  <span>In Days Completed</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row m-b15">
            {PortfolioDetailsArr.map(({ img, changeStyle }) => (
              <div className={`${changeStyle} col-6 m-b30 aos-item`}>
                <span
                  data-exthumbimage={img}
                  data-src={img}
                  className="lightimg"
                  title="ARCHITECTURAL"
                >
                  <img src={img} alt="" />
                </span>
              </div>
            ))}
          </div>
          <div className="row m-b15">
            <div className="col-lg-6">
              <p>
                Nunc id orci bibendum, pulvinar magna eu, egestas mauris. Fusce
                augue nibh, rutrum sit amet bibendum eu, fringilla eget odio.
                Vestibulum quis sodales tortor. Integer sagittis nisi et commodo
                semper.
              </p>
              <p className="m-b30">
                Maecenas sit amet luctus magna, in placerat ante. Donec et elit
                metus. Morbi faucibus nibh erat, ac dictum nisi aliquet sit
                amet. Nullam at elit nisi. Donec non ex elementum, auctor elit
                Link, vehicula mauris. Etiam varius faucibus tortor quis
                iaculis.
              </p>
              <div className="icon-bx-wraper style-7 left m-b30">
                <div className="icon-bx-sm rounded-0 bg-primary">
                  <span className="icon-cell">
                    <i className="flaticon-placeholder"></i>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="title m-b10">Project Location</h4>
                  <p>#8901 Marmora Road Chi, Vietnam</p>
                </div>
              </div>
              <div className="icon-bx-wraper style-7 left m-b30">
                <div className="icon-bx-sm rounded-0 bg-primary">
                  <span className="icon-cell">
                    <i className="flaticon-telephone"></i>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="title m-b10">Call Us</h4>
                  <p>+91 123 456 7890</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 m-b30 text-center">
              <img className="m-b15" src={IMAGES.work_pic12} alt="" />
              <h5>FLOOR PLAN</h5>
            </div>
          </div>
          <div className="row m-b15">
            {PortfolioDetailsArr2.map(({ img }, ind) => (
              <div className="col-sm-6 m-b30 aos-item" key={ind}>
                <span
                  data-exthumbimage={img}
                  data-src={img}
                  className="lightimg"
                  title="ARCHITECTURAL"
                >
                  <img src={img} alt="" />
                </span>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                fermentum a metus a fermentum. Proin rutrum, mauris quis aliquet
                suscipit, mauris ex imperdiet erat, ac tristique lorem nibh
                vitae orci. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vestibulum vulputate sit amet sapien eget varius. Morbi
                tristique felis quis tortor porta, sit amet mattis ipsum tempus.
              </p>
            </div>
          </div>
        </div>
      </LightGallery>
      <div
        className="video-bx style-1 video-section aos-item"
        style={{ backgroundImage: `url(${IMAGES.video_pic1_1})` }}
      >
        <div className="video-btn">
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
      <RelatedWorkGallery />
    </div>
  );
};

export default PortfolioDetails;
