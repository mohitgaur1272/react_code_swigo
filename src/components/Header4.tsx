import { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../elements/theme";
import Menu from "./Menu";
import { Context } from "../context/contextApi";

const Header4 = () => {
  const { setShow, setSidebar, searchbox, setSearchbox } = useContext(Context);
  const [headerfix, setHeaderfix] = useState<number>(0);
  const headRef = useRef<HTMLDivElement | null>(null);
  const [sidebarShow, setSidebarShow] = useState<boolean>(false);

  const FixesHeader = () => {
    const value = headRef.current?.getBoundingClientRect().top;
    setHeaderfix(Number(value));
  };
  useEffect(() => {
    window.addEventListener("scroll", FixesHeader);
    return () => {
      window.removeEventListener("scroll", FixesHeader);
    };
  }, [headerfix]);

  return (
    <header className="site-header mo-left header center style-1 header-bottom">
      <div
        ref={headRef}
        className={`sticky-header main-bar-wraper navbar-expand-lg ${
          headerfix < 0 ? "is-fixed" : ""
        }`}
      >
        <div className="main-bar clearfix ">
          <div className="container-fluid clearfix">
            <div className="logo-header mostion logo-dark">
              <Link to="/">
                <img
                  src={
                    document.body.className.includes("dark")
                      ? IMAGES.logo_white5
                      : IMAGES.logo5
                  }
                  alt=""
                />
              </Link>
            </div>
            <button
              onClick={() => {
                setSidebarShow(!sidebarShow);
              }}
              className={`navbar-toggler collapsed navicon justify-content-end ${
                sidebarShow ? "open" : ""
              }`}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="extra-nav">
              <div className="extra-cell">
                <Link
                  className="search-link"
                  id="quik-search-btn"
                  to="#"
                  onClick={() => {
                    setSearchbox(true);
                  }}
                >
                  <i className="flaticon-loupe"></i>
                </Link>
                <Link
                  to="#"
                  className="btn shadow-primary btn-primary login-btn"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  <i className="flaticon-email scale3"></i>
                  <span>SUBSCRIBE NOW</span>
                </Link>
              </div>
            </div>
            <div
              className={`dz-quik-search ${searchbox ? "On" : ""}`}
              style={{ display: "block" }}
            >
              <form action="#">
                <input
                  name="search"
                  defaultValue={""}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Keyword ..."
                />
                <span
                  id="quik-search-remove"
                  onClick={() => {
                    setSearchbox(false);
                  }}
                >
                  <i className="ti-close"></i>
                </span>
              </form>
            </div>
            <div className="sidebar-menu">
              <div
                className="menu-btn navicon"
                onClick={() => {
                  setSidebar(true);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h6 className="phone-no">+91 987 654 3210</h6>
            </div>
            <div
              className={`header-nav navbar-collapse justify-content-center ${
                sidebarShow ? "show" : ""
              }`}
              id="navbarNavDropdown"
            >
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header4;
