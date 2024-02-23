import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Cursor {
  x: number;
  y: number;
}
const ScrollTop = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [cursorposition, setCursorposition] = useState<Cursor>({ x: 0, y: 0 });
  const { pathname } = useLocation();

  const scrollButton = () => {
    window.scrollY > 120 ? setShowScrollBtn(true) : setShowScrollBtn(false);
  };
  const enimateCursor = (e: { clientX: number; clientY: number }) => {
    setCursorposition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollButton);
    window.addEventListener("mousemove", enimateCursor);

    return () => {
      window.removeEventListener("scroll", scrollButton);
      window.removeEventListener("mousemove", enimateCursor);
    };
  }, [showScrollBtn, cursorposition]);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      null;
    };
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="scroltop icon-up"
        type="button"
        style={{ display: `${showScrollBtn ? "block" : ""}` }}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      <div
        id="pointer-ring"
        style={{
          borderColor: " rgb(117, 12, 126)",
          padding: "15px",
          transition: ".2s ease",
          transform: `translate(${cursorposition.x - 15}px,${
            cursorposition.y - 15
          }px)`,
        }}
        className=""
      ></div>
      <div
        id="pointer-dot"
        style={{
          borderColor: "white",
          transition: ".1s ease",
          transform: `translate(${cursorposition.x}px,${cursorposition.y}px)`,
        }}
      ></div>
    </>
  );
};

export default ScrollTop;
