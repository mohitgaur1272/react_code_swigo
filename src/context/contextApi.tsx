import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { IMAGES } from "../elements/theme";

interface AppContextValue {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  modabox: boolean;
  setModabox: Dispatch<SetStateAction<boolean>>;
  searchbox: boolean;
  setSearchbox: Dispatch<SetStateAction<boolean>>;
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
  switcheData: object;
  setSwitcheData: Dispatch<SetStateAction<object>>;
  headerLogo: string;
}

const defaultState: AppContextValue = {
  show: false,
  setShow: () => {},
  modabox: false,
  setModabox: () => {},
  searchbox: false,
  setSearchbox: () => {},
  sidebar: false,
  setSidebar: () => {},
  switcheData: {},
  setSwitcheData: () => {},
  headerLogo: "",
};

export const Context = createContext(defaultState);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [show, setShow] = useState(false);
  const [modabox, setModabox] = useState(false);
  const [searchbox, setSearchbox] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [switcheData, setSwitcheData] = useState({});
  const [headerLogo, setHeaderLogo] = useState(IMAGES.logo);

  useEffect(() => {
    const skin = document.body.getAttribute("data-color");
    switch (skin) {
      case "color_1":
        setHeaderLogo(IMAGES.logo);
        break;
      case "color_2":
        setHeaderLogo(IMAGES.logo3);
        break;
      case "color_3":
        setHeaderLogo(IMAGES.logo4);
        break;
      case "color_4":
        setHeaderLogo(IMAGES.logo5);
        break;
      case "color_5":
        setHeaderLogo(IMAGES.logo5);
        break;
      case "color_6":
        setHeaderLogo(IMAGES.logo7);
        break;
      case "color_7":
        setHeaderLogo(IMAGES.logo8);
        break;
      case "color_8":
        setHeaderLogo(IMAGES.logo6);
        break;
      default:
        break;
    }
  }, [headerLogo]);

  const contextValue: AppContextValue = {
    show,
    setShow,
    modabox,
    setModabox,
    searchbox,
    setSearchbox,
    sidebar,
    setSidebar,
    switcheData,
    setSwitcheData,
    headerLogo,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
