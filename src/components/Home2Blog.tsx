import { Link } from "react-router-dom";
import { Home2BlogArr } from "../elements/JsonData";
import { IMAGES } from "../elements/theme";

const Home2Blog = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="dz-card blog-grid style-2 m-b50">
          <div className="dz-media m-b20">
            <Link to="/blog-details">
              <img src={IMAGES.blog_grid_pic4} alt="" />
            </Link>
            <div className="dz-meta">
              <ul>
                <li className="post-date">7 March 2023</li>
                <li className="post-user">
                  By <Link to="#">John Doe</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="dz-info p-0">
            <h5 className="dz-title">
              <Link to="/blog-details">
                Pellentesque pulvinar ultricies vestibulum estibulum faucibus,
                arcu id aliquet aliquam.
              </Link>
            </h5>
            <div className="dz-post-text text">
              <p>
                Nam ut elit mauris. In sed tempus neque, eu aliquam sem. Duis
                libero ligula, dapibus id dui eget, porttitor scelerisque velit.
                Suspendisse aliquam elementum massa sed.
              </p>
            </div>
            <Link className="btn-link style-2" to="#">
              READ MORE <i className="m-l5 las la-plus"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="widget recent-posts-entry style-2">
          <div className="widget-post-bx">
            {Home2BlogArr.map(({ img }, ind) => (
              <div className="widget-post clearfix" key={ind}>
                <div className="dz-media">
                  <Link to="/blog-details">
                    <img src={img} alt="" />
                  </Link>
                </div>
                <div className="dz-info">
                  <h5 className="title">
                    <Link to="/blog-details">
                      Aliquam luctus mattis el sollicitudin lacus dapibus non.
                    </Link>
                  </h5>
                  <div className="dz-meta">
                    <ul>
                      <li className="post-date">7 March 2023</li>
                      <li className="post-user">
                        By <Link to="#">John Doe</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2Blog;
