import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import Footer2 from "../components/Footer2";
import Header3 from "../components/Header3";
import Header5 from "../components/Header5";
import MainBanner4 from "../components/MainBanner4";
import Header4 from "../components/Header4";
import Footer3 from "../components/Footer3";

export const Layout1 = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const Layout2 = () => {
  return (
    <>
      <Header2 />
      <Outlet />
      <Footer2 />
    </>
  );
};
export const Layout3 = () => {
  return (
    <>
      <Header3 />
      <Outlet />
      <Footer />
    </>
  );
};
export const Layout4 = () => {
  return (
    <>
      <MainBanner4 />
      <Header4 />
      <Outlet />
      <Footer2 />
    </>
  );
};
export const Layout5 = () => {
  return (
    <>
      <Header5 />
      <Outlet />
      <footer className="site-footer style-3 overflow-hidden" id="footer">
        <Footer3 />
      </footer>
    </>
  );
};
export const Layout6 = () => {
  return (
    <>
      <Header5 />
      <Outlet />
      <footer className="site-footer style-4 overflow-hidden" id="footer">
        <Footer3 />
      </footer>
    </>
  );
};
