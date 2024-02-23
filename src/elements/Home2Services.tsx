import { Link } from "react-router-dom";
import { Home2ServicesArr } from "./JsonData";

const Home2Services = () => {
  return (
    <div className="row">
      {Home2ServicesArr.map(({ icon, title }, ind) => (
        <div className="col-lg-3 col-md-6 aos-item" key={ind}>
          <div
            className="icon-bx-wraper bx-style-1 style-9 m-b30 p-a30"
            data-name="1."
          >
            <div className="icon-bx-sm radius m-b20">
              <Link to="#" className="icon-cell">
                <i className={icon}></i>
              </Link>
            </div>
            <h4 className="title m-b15">
              <Link to="/services-details">{title}</Link>
            </h4>
            <p>Duis laoreet dui at eros scelerisque, in lacinia neque</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home2Services;
