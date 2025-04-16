import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { PiXBold } from "react-icons/pi";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";

export const useNav = () => {
  const { siteConfig } = useDocusaurusContext();
  const apiUrl = siteConfig.customFields.apiUrl;

  const navigation = [
    { name: "Tutorial", href: `${apiUrl}/docs/start/intro` },
    { name: "Download", href: `${apiUrl}/docs/download` },
    { name: "Community", href: `${apiUrl}/docs/community` },
    { name: "Pricing", href: `${apiUrl}/docs/pricing` },
    { name: "Blog", href: `${apiUrl}/blog` },
    { name: "Join Us", href: `${apiUrl}/docs/join` },
  ];

  return {
    api: apiUrl,
    nav: navigation,
  };
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { nav } = useNav();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={"lg:px-20 mt-2 absolute top-0 left-0 w-full z-40"}>
      <nav className="relative px-6 lg:px-10  py-4 flex justify-between items-center">
        <div className={"flex-1 flex gap-10 justify-between"}>
          <div className={"flex items-center gap-2"}>
            <img src={"img/icon.svg"} className={"w-8"} alt={""} />
            <span className={"text-xl font-bold"}>Ghostie</span>
          </div>
          <ul className="hidden items-center lg:flex lg:w-auto lg:space-x-6">
            {nav.map((item) => {
              return (
                <li>
                  <a
                    className="text-sm font-medium hover:underline text-gray-600 hover:text-primary"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            onClick={handleMenuToggle}
            className={"hover:bg-background-darker-1"}
          >
            <BiMenu className={"text-5xl text-primary p-2 rounded-2xl"} />
          </button>
        </div>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div
          onClick={() => {
            setIsMenuOpen(false);
          }}
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <img src={"img/icon.png"} className={"w-32"} alt={""} />
            <button
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="navbar-close"
            >
              <PiXBold />
            </button>
          </div>
          <div>
            <ul>
              {nav.map((item) => {
                return (
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2024</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
