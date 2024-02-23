export const MenuList = [
  {
    menu: "Home",
    child: [
      { children: "Home 1", to: "/" },
      { children: "Home 2", to: "/home-2" },
      { children: "Home 3", to: "/home-3" },
      { children: "Home 4", to: "/home-4" },
      { children: "Home 5", to: "/home-5" },
      { children: "Home 6", to: "/home-6" },
    ],
  },
  {
    menu: "Pages",
    child: [
      { children: "About Us", to: "/about-us" },
      { children: "Team", to: "/team" },
      { children: "Coming Soon", to: "/coming-soon" },
      { children: "Under Construct", to: "/under-construct" },
      { children: "Error 404", to: "/error-404" },
    ],
  },
  {
    menu: "Portfolio",
    child: [
      { children: "Portfolio", to: "/portfolio" },
      { children: "Portfolio Details", to: "/portfolio-details" },
    ],
  },
];

export const MenuList2 = [
  {
    menu: "Services",
    className: "menu-down",
    child: [
      { children: "Services", to: "/services" },
      { children: "Services Details ", to: "/services-details" },
    ],
  },

  {
    menu: "Blog",
    className: "menu-down",
    child: [
      { children: "Blog Grid", to: "/blog-grid" },
      { children: "Large Left Sidebar", to: "/blog-large-left-sidebar" },
      { children: "List Left Sidebar", to: "/blog-list-left-sidebar" },
      { children: "Blog Details", to: "/blog-details" },
    ],
  },
  { menu: "Contact Us", to: "/contact-us" },
];
