import { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MenuList, MenuList2 } from "../elements/MenuArr";
import { HeaderSocialIcon } from "../elements/JsonData";
import { IMAGES } from "../elements/theme";

const reducer = (previousState: Element, updatedState: any) => {
  return {
    ...previousState,
    ...updatedState,
  };
};

const initialState = {
  activeSubmenu: "",
};

const Menu = () => {
  const location = useLocation();
  const [menuactive, setMenuactive] = useState("");

  const [state, setState] = useReducer(reducer, initialState);
  const menuHandler = (status: string) => {
    setState({ activeSubmenu: status });
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  useEffect(() => {
    MenuList.map((item) => {
      item.child?.map((data) => {
        if (data.to === location.pathname) {
          setMenuactive(item.menu);
        }
      });
    });
    MenuList2.map((item) => {
      if (item?.to === location.pathname) {
        setMenuactive(item.menu);
      }
      item.child?.map((data) => {
        if (data?.to === location.pathname) {
          setMenuactive(item.menu);
        }
      });
    });
  }, [location.pathname]);

  return (
    <>
      <div className="logo-header logo-dark">
        <Link to="/">
          <img src={IMAGES.logo} alt="" />
        </Link>
      </div>
      <ul className="nav navbar-nav navbar navbar-left">
        {MenuList.map((item, ind) => (
          <li
            className={`sub-menu-down ${menuactive == item.menu ? "active" : ""}
              ${state.activeSubmenu === item.menu ? "open" : ""}
            `}
            key={ind}
          >
            <Link
              to="#"
              onClick={() => {
                menuHandler(item.menu);
              }}
            >
              {item.menu}
            </Link>
            <ul className="sub-menu">
              {item.child?.map((data, index) => (
                <li key={index}>
                  <Link to={data.to}>{data.children}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <ul className="nav navbar-nav navbar navbar-right">
        {MenuList2.map((item, ind) => {
          const { menu, child, className } = item;
          if (className === "menu-down") {
            return (
              <li
                className={`sub-menu-down ${
                  menuactive == item.menu ? "active" : ""
                }
                ${state.activeSubmenu === item.menu ? "open" : ""}
                `}
                key={ind}
              >
                <Link
                  to="#"
                  onClick={() => {
                    menuHandler(item.menu);
                  }}
                >
                  {menu}
                </Link>
                <ul className="sub-menu">
                  {child?.map((data, index) => (
                    <li key={index}>
                      <Link to={data.to}>{data.children}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={ind}>
                <Link to={`${item?.to}`}>{item.menu}</Link>
              </li>
            );
          }
        })}
      </ul>
      <div className="dz-social-icon">
        <ul>
          {HeaderSocialIcon.map((icons, ind) => (
            <li key={ind}>
              <Link className={icons.icon} to="#"></Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
