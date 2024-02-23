import { Link } from "react-router-dom";

const DefaultPagination = () => {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12">
        <nav aria-label="Blog Pagination">
          <ul className="pagination text-center m-b30">
            <li className="page-item">
              <Link className="page-link prev" to="#">
                <i className="la la-angle-left"></i>
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link active" to="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link next" to="#">
                <i className="la la-angle-right"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DefaultPagination;
