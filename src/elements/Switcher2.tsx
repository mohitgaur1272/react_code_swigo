import { memo, useEffect, useMemo, useReducer, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BackGroundColorArr,
  BgSmallImgArr,
  SwitcherButtonsArr,
  SwitcherLayoutArr,
} from "../elements/JsonData";
import { IMAGES } from "./theme";
// import { Context } from "../context/contextApi";

interface newType {
  themActive: number;
  activeLayout: number;
  activeHeader: string;
  activeBackgroundColor: number;
  activeBackgroundImage: number;
  activeBackgroundPattern: number;
}
interface AppState {
  color: string;
  themActive: number;
  showSidebar: boolean;
  layout: string;
  activeLayout: number;
  headerPosition: string;
  backgroundColor: string;
  activeBackgroundColor: number;
  backgroundImage: string;
  activeBackgroundImage: number;
  backgroundPattern: string;
  activeBackgroundPattern: number;
  // other properties...
}

type Action =
  | { type: "colorTheme"; skin: string; ind: number }
  | { type: "sidebar" }
  | { type: "layout"; title: string; ind: number }
  | { type: "headerSticky"; name: string }
  | { type: "bgcolor"; colorValue: string; ind: number }
  | { type: "bgImage"; imgLarge: string; ind: number }
  | { type: "bgPattern"; ptLarge: string; ind: number };

// Initial state
const initialState: AppState = {
  color: "color_1",
  themActive: 0,
  showSidebar: false,
  layout: "wide-layout",
  activeLayout: 0,
  headerPosition: "sticky-header",
  backgroundColor: "color_1",
  activeBackgroundColor: 0,
  backgroundImage: IMAGES.switcher_large_bg1,
  activeBackgroundImage: 0,
  backgroundPattern: IMAGES.switcher_large_pt1,
  activeBackgroundPattern: 0,

  // other initial properties...
};

// Reducer function
const reducer = (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {
    case "sidebar":
      return { ...state, showSidebar: !state.showSidebar };
    case "colorTheme":
      // eslint-disable-next-line no-case-declarations
      const newState1: AppState = {
        ...state,
        color: action.skin,
        themActive: action.ind,
      };
      localStorage.setItem("THEME", JSON.stringify(newState1));
      return newState1;
    case "layout":
      // eslint-disable-next-line no-case-declarations
      const newState2: AppState = {
        ...state,
        layout: action.title,
        activeLayout: action.ind,
      };
      localStorage.setItem("LAYOUT", JSON.stringify(newState2));
      return newState2;
    case "headerSticky":
      // eslint-disable-next-line no-case-declarations
      const newState3: AppState = {
        ...state,
        headerPosition: action.name,
        // activeLayout: action.ind,
      };
      localStorage.setItem("HEADER", JSON.stringify(newState3));
      return newState3;
    case "bgcolor":
      // eslint-disable-next-line no-case-declarations
      const newState4: AppState = {
        ...state,
        backgroundColor: action.colorValue,
        activeBackgroundColor: action.ind,
      };
      localStorage.removeItem("BGIMAGE");
      localStorage.removeItem("BGPATTERN");
      localStorage.setItem("BGCOLOR", JSON.stringify(newState4));
      return newState4;

    case "bgImage":
      // eslint-disable-next-line no-case-declarations
      const newState5: AppState = {
        ...state,
        backgroundImage: action.imgLarge,
        activeBackgroundImage: action.ind,
      };
      localStorage.removeItem("BGCOLOR");
      localStorage.removeItem("BGPATTERN");
      localStorage.setItem("BGIMAGE", JSON.stringify(newState5));
      return newState5;

    case "bgPattern":
      // eslint-disable-next-line no-case-declarations
      const newState6: AppState = {
        ...state,
        backgroundPattern: action.ptLarge,
        activeBackgroundPattern: action.ind,
      };
      localStorage.removeItem("BGCOLOR");
      localStorage.removeItem("BGIMAGE");
      localStorage.setItem("BGPATTERN", JSON.stringify(newState6));
      return newState6;

    default:
      return state;
  }
};

const Switcher = memo(() => {
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [switcherActive, setSwitcherActive] = useState<newType[]>([
    {
      themActive: 0,
      activeLayout: 0,
      activeHeader: "sticky-header",
      activeBackgroundColor: 0,
      activeBackgroundImage: 0,
      activeBackgroundPattern: 0,
    },
  ]);
  const [types, setTypes] = useState("bgImage");

  // save theme
  useEffect(() => {
    const theme = localStorage.getItem("THEME");
    if (theme) {
      const Values = JSON.parse(theme);
      document.body.setAttribute("data-color", Values.color);
      setSwitcherActive((prev) => {
        return [{ ...prev[prev.length - 1], themActive: Values.themActive }];
      });
    }
    const layout = localStorage.getItem("LAYOUT");
    const layoutMode = localStorage.getItem("MODE");
    if (layout) {
      const Values = JSON.parse(layout);
      document.querySelector("html")?.setAttribute("class", Values.layout);

      setSwitcherActive((prev) => {
        return [
          { ...prev[prev.length - 1], activeLayout: Values.activeLayout },
        ];
      });
    }
    switch (layoutMode) {
      case "?theme=1":
        document.body.setAttribute("class", `layout-light`);
        break;
      case "?theme=2":
        document.body.setAttribute("class", `layout-dark`);
        break;

      default:
        break;
    }

    const header = localStorage.getItem("HEADER");
    if (header) {
      const Values = JSON.parse(header);
      document.querySelectorAll(".main-bar-wraper").forEach((element) => {
        // element.classList?.add(Values.headerPosition);
        if (element) {
          if (Values.headerPosition) {
            element.classList?.add(Values.headerPosition);
          } else {
            element.classList?.remove(Values.headerPosition);
          }
        }
      });

      setSwitcherActive((prev) => {
        return [
          { ...prev[prev.length - 1], activeHeader: Values.headerPosition },
        ];
      });
    }
    const storeBgColor = localStorage.getItem("BGCOLOR");
    const bgColor = storeBgColor !== null ? JSON.parse(storeBgColor) : [];
    if (
      Object.keys(bgColor).length > 0 &&
      bgColor.backgroundColor != undefined
    ) {
      document.body.setAttribute(
        "style",
        `background-image:url(${""});background-size:auto`
      );
      document.body.setAttribute(
        "style",
        `background-color:${bgColor.backgroundColor}`
      );
    }
    setSwitcherActive((prev) => {
      return [
        {
          ...prev[prev.length - 1],
          activeBackgroundColor: bgColor.activeBackgroundColor,
        },
      ];
    });
    const storeBgImage = localStorage.getItem("BGIMAGE");
    const bgImage = storeBgImage !== null ? JSON.parse(storeBgImage) : [];
    if (
      Object.keys(bgImage).length > 0 &&
      bgImage.backgroundImage != undefined
    ) {
      console.log("BGImage-IN");
      document.body.setAttribute(
        "style",
        `background-image:url(${bgImage.backgroundImage});background-size:auto`
      );
    }
    setSwitcherActive((prev) => {
      return [
        {
          ...prev[prev.length - 1],
          activeBackgroundImage: bgImage.activeBackgroundImage,
        },
      ];
    });

    const storedBgPattern = localStorage.getItem("BGPATTERN");

    // Check if the storedBgPattern is not null before parsing JSON
    const bgPattern =
      storedBgPattern !== null ? JSON.parse(storedBgPattern) : [];

    if (
      Object.keys(bgPattern).length > 0 &&
      bgPattern.backgroundPattern != undefined
    ) {
      console.log("BGPattern-IN");
      document.body.setAttribute(
        "style",
        `background-image:url(${bgPattern.backgroundPattern});background-size:auto`
      );
    }
    setSwitcherActive((prev) => {
      return [
        {
          ...prev[prev.length - 1],
          activeBackgroundPattern: bgPattern.activeBackgroundPattern,
        },
      ];
    });
  }, [state, types]);

  useMemo(() => {
    if (location.search) {
      localStorage.setItem("MODE", location.search);
    }
  }, [location.search]);

  // Delet All Cookie;
  const DeletAllCookie = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div
        id="dzSwitcher-right"
        className={`styleswitcher`}
        style={{
          left: `${state.showSidebar ? "30px" : ""}`,
          transition: "all .5s",
        }}
      >
        <div className="overlay-switch"></div>
        <div className="switcher-btn-bx">
          <Link
            to={"#"}
            className="switch-btn open text-white"
            onClick={() => {
              dispatch({ type: "sidebar" });
            }}
          >
            <span className="fas fa-cog"></span>
          </Link>
        </div>
        <div className="styleswitcher-inner">
          <div className="sw-main-title">
            <h4 style={{ fontWeight: "normal" }}>Theme Setting</h4>
            <button
              className="dez-page btn btn-primary btn-sm"
              onClick={DeletAllCookie}
            >
              Delet All Cookie
            </button>
          </div>
          <div className="theme-design row">
            <div className="theme-box col-md-12">
              <h5 className="switcher-title">
                <span>Theme</span>
              </h5>
              <ul className="color-skins theme-panel-save">
                {SwitcherButtonsArr.map(({ setStyle, skin }, ind) => (
                  <li
                    className={`${
                      switcherActive[switcherActive.length - 1]?.themActive ==
                      ind
                        ? "active"
                        : ""
                    }`}
                    key={ind}
                  >
                    <Link
                      onClick={() => {
                        dispatch({ type: "colorTheme", skin, ind });
                      }}
                      to={"#"}
                      className={`theme-skin theme-color ${setStyle}`}
                    ></Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="theme-design row theme-layout-wrapper">
            <div className="theme-box col-md-12">
              <h5 className="switcher-title">
                <span>Theme Layout</span>
              </h5>
              <ul className="layout layout-view theme-panel-save">
                {SwitcherLayoutArr.map(({ title }, ind) => (
                  <li
                    key={ind}
                    className={`${title}
                  ${
                    switcherActive[switcherActive.length - 1].activeLayout ==
                    ind
                      ? "active"
                      : ""
                  }
                  layout-theme-change`}
                  >
                    <Link
                      to={"#"}
                      onClick={() => {
                        dispatch({ type: "layout", title, ind });
                      }}
                    >
                      <div></div>
                      <span>{title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="theme-design row theme-view-wrapper">
            <div className="col-xl-6 theme-box">
              <h5 className="switcher-title">
                <span>Header</span>
              </h5>
              <ul className="tab-checkbx header-view theme-panel-save">
                <li
                  className={`switcher-header-layout-btn header-fixed
                   ${
                     switcherActive[
                       switcherActive.length - 1
                     ].activeHeader.includes("sticky-header")
                       ? "active"
                       : ""
                   }
                  `}
                >
                  <Link
                    to={"#"}
                    onClick={() => {
                      dispatch({ type: "headerSticky", name: "sticky-header" });
                    }}
                  >
                    Fixed
                  </Link>
                </li>
                <li
                  className={`switcher-header-layout-btn header-static 
                ${
                  switcherActive[
                    switcherActive.length - 1
                  ].activeHeader.includes("sticky-no")
                    ? "active"
                    : ""
                }
                `}
                >
                  <Link
                    to={"#"}
                    onClick={() => {
                      dispatch({ type: "headerSticky", name: "sticky-no" });
                    }}
                  >
                    Static
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="theme-design row mb-0 theme-background-wrapper"
            style={{
              display: document.body
                .getAttribute("data-layout")
                ?.includes("wide-layout")
                ? "none"
                : "",
            }}
          >
            <div className="col-md-12 theme-box mb-4">
              <h5 className="switcher-title">
                <span>Background Color</span>
              </h5>
              <ul className="bg-color-switcher theme-panel-save">
                {BackGroundColorArr.map(({ setStyle, colorValue }, ind) => (
                  <li
                    key={ind}
                    className={`${
                      switcherActive[switcherActive.length - 1]
                        .activeBackgroundColor == ind
                        ? "active"
                        : ""
                    }
                  `}
                  >
                    <Link
                      to={"#"}
                      // style={{ backgroundColor: `${colorValue}` }}
                      className={`${setStyle} bgColorTheme`}
                      onClick={() => {
                        dispatch({ type: "bgcolor", colorValue, ind });
                        setTypes("bgcolor");
                      }}
                    ></Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-12 theme-box mb-4">
              <h5 className="switcher-title">
                <span>Background Image</span>
              </h5>
              <ul className="background-switcher theme-panel-save">
                {BgSmallImgArr.map(({ img, imgLarge }, ind) => (
                  <li
                    className={`${
                      switcherActive[switcherActive.length - 1]
                        .activeBackgroundImage == ind
                        ? "active"
                        : ""
                    }`}
                    key={ind}
                  >
                    <img
                      src={img}
                      onClick={() => {
                        dispatch({ type: "bgImage", imgLarge, ind });
                        setTypes("bgImage");
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-12 theme-box">
              <h5 className="switcher-title">
                <span>Background Pattern</span>
              </h5>
              <ul className="pattern-switcher theme-panel-save">
                {BgSmallImgArr.map(({ ptSmall, ptLarge }, ind) => (
                  <li
                    className={`${
                      switcherActive[switcherActive.length - 1]
                        .activeBackgroundPattern == ind
                        ? "active"
                        : ""
                    }`}
                    key={ind}
                  >
                    <img
                      src={ptSmall}
                      onClick={() => {
                        dispatch({ type: "bgPattern", ptLarge, ind });
                        setTypes("bgPattern");
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Switcher;
