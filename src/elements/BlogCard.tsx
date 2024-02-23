import { Link } from "react-router-dom";

interface propFile {
  img: string;
}

const BlogCard = ({ img }: propFile) => {
  return (
    <div className="card-container">
      <div className="dz-card blog-grid style-1 m-b50 aos-item">
        <div className="dz-media">
          <Link to="/blog-details">
            <img src={img} alt="" />
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
              Praesent pharetra congue sem, nec euismod nisi fermentum.
            </Link>
          </h3>
          <div className="dz-post-text text">
            <p>
              Sed non sapien urna. Cras quis porta risus, vitae pulvinar nibh.
              In hac habitasse platea dictumst. Integer congue et enim cursus
              porttitor. Vestibulum mattis placerat magna, sit amet laoreet
              sapien.
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
  );
};

export default BlogCard;
