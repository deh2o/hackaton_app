import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "../components/Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import logo from "../assets/images/logo.png";

// Icons form react icons
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll;
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-White lg:backdrop-blur-sm ${
        openNavigation ? "bg-White" : "bg-White backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-7.5 lg:px-8 xl:px-12 max-lg:py-4">
        <a
          className="block w-[12rem] md:w-[20rem]  lg:w-[20rem] xl:mr-8 items-center flex"
          href="#home"
        >
          <img
            src={logo}
            alt="Ebonyi Hatchery"
            className="w-16 h-16 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />
          <span className="ml-2 justify-self-center font-code text-sm uppercase text-DGrey md:text-lg lg:text-lg font-bold ">
            Ebonyi State Hatchery
          </span>
        </a>

        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          } fixed top-[6rem] left-0 right-0 bg-primary lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-GreyBlue transition-colors hover:text-Shade1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold 
              
                ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-primary"
                    : "text-GreyBlue lg:text-GreyBlue"
                } lg:leading-5 lg:hover:text-primary lg:px-4 xl:px-9`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>
        <Button className="hidden lg:flex" href="#login">
          Our Meat Market <CgShoppingCart />
        </Button>

        <Button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
