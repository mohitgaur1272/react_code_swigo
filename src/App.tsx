import "./assets/css/common.css";
import "react-modal-video/css/modal-video.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/vendor/switcher/switcher.css";
import "./assets/css/style.css";
import "./assets/css/skins.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InquiryModal from "./elements/InquiryModal";
import Home from "./pages/Home";
import ModalBox from "./elements/ModalBox";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import ComingSoon from "./pages/ComingSoon";
import UnderConstruct from "./pages/UnderConstruct";
import Error404 from "./pages/Error404";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";
import Services from "./pages/Services";
import ServicesDetail from "./pages/ServicesDetail";
import BlogGrid from "./pages/BlogGrid";
import BlogLargLeftSidebar from "./pages/BlogLargLeftSidebar";
import BlogListLeftSidebar from "./pages/BlogListLeftSidebar";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Home5 from "./pages/Home5";
import Home6 from "./pages/Home6";
import CommonSidebarContent from "./elements/CommonSidebarContent";
import Switcher2 from "./elements/Switcher2";
import ScrollTop from "./elements/ScrollTop";
import {
  Layout1,
  Layout2,
  Layout3,
  Layout4,
  Layout5,
  Layout6,
} from "./elements/Outlate";

const elementRoutes = [
  { routerLink: "/", elements: <Home /> },
  { routerLink: "/about-us", elements: <AboutUs /> },
  { routerLink: "/team", elements: <Team /> },
  { routerLink: "/error-404", elements: <Error404 /> },
  { routerLink: "/portfolio", elements: <Portfolio /> },
  { routerLink: "/portfolio-details", elements: <PortfolioDetails /> },
  { routerLink: "/services", elements: <Services /> },
  { routerLink: "/services-details", elements: <ServicesDetail /> },
  { routerLink: "/blog-grid", elements: <BlogGrid /> },
  { routerLink: "/contact-us", elements: <Contact /> },
  { routerLink: "/blog-large-left-sidebar", elements: <BlogLargLeftSidebar /> },
  { routerLink: "/blog-list-left-sidebar", elements: <BlogListLeftSidebar /> },
  { routerLink: "/blog-details", elements: <BlogDetail /> },
];

function App() {
  return (
    <>
      <div className="page-wraper">
        <Router>
          <Switcher2 />
          <InquiryModal />
          <CommonSidebarContent />
          <ModalBox />
          <Routes>
            <Route element={<Layout1 />}>
              {elementRoutes.map(({ elements, routerLink }, ind) => (
                <Route key={ind} path={routerLink} element={elements} />
              ))}
            </Route>

            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/under-construct" element={<UnderConstruct />} />

            <Route element={<Layout2 />}>
              <Route path="/home-2" element={<Home2 />} />
            </Route>

            <Route element={<Layout3 />}>
              <Route path="/home-3" element={<Home3 />} />
            </Route>

            <Route element={<Layout4 />}>
              <Route path="/home-4" element={<Home4 />} />
            </Route>

            <Route element={<Layout5 />}>
              <Route path="/home-5" element={<Home5 />} />
            </Route>

            <Route element={<Layout6 />}>
              <Route path="/home-6" element={<Home6 />} />
            </Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
          <ScrollTop />
        </Router>
      </div>
    </>
  );
}

export default App;
