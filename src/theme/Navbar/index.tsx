import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import { HoverPopover } from "@site/src/components/HoverPopover";
import { Button } from "@site/src/components/ui/button";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { type ComponentProps, type ReactNode } from "react";

function NavItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm !text-gray-100 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 rounded !no-underline transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function NavbarBackdrop(props: ComponentProps<"div">) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx("navbar-sidebar__backdrop", props.className)}
    />
  );
}

export default function Navbar(): ReactNode {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig();
  const { navbarRef } = useHideableNavbar(hideOnScroll);
  const mobileSidebar = useNavbarMobileSidebar();

  const popoverContentClass =
    "w-56 bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 p-2 text-gray-100 shadow-lg shadow-indigo-900/20 backdrop-blur-sm";

  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: "theme.NavBar.navAriaLabel",
        message: "Main",
        description: "The ARIA label for the main navigation",
      })}
      className={clsx("navbar navbar--fixed-top !h-14 !border-none !shadow-none z-50 !bg-transparent")}
    >
      <div className="flex justify-between items-center w-full px-1 py-3 rounded-full bg-gradient-to-r from-gray-950 to-gray-900 text-gray-100 shadow-xl shadow-indigo-900/10 border border-gray-800/50 mx-auto max-w-7xl backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 !text-gray-100 !no-underline"
          >
            <img src="/img/icon.svg" alt="Ghostie Logo" className="w-8 h-8" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">Ghostie</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-1">
          <HoverPopover
            variant="elegant"
            trigger={
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-100 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
              >
                Products <ChevronDown className="ml-1 h-4 w-4 text-indigo-400" />
              </Button>
            }
            content={
              <>
                <NavItem href="/products/feature1">Feature 1</NavItem>
                <NavItem href="/products/feature2">Feature 2</NavItem>
              </>
            }
            contentProps={{ className: popoverContentClass }}
          />

          <HoverPopover
            variant="elegant"
            trigger={
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-100 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
              >
                Capabilities <ChevronDown className="ml-1 h-4 w-4 text-indigo-400" />
              </Button>
            }
            content={
              <>
                <NavItem href="/capabilities/cap1">Capability 1</NavItem>
                <NavItem href="/capabilities/cap2">Capability 2</NavItem>
              </>
            }
            contentProps={{ className: popoverContentClass }}
          />

          <HoverPopover
            variant="elegant"
            trigger={
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-100 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
              >
                Engines <ChevronDown className="ml-1 h-4 w-4 text-indigo-400" />
              </Button>
            }
            content={
              <>
                <NavItem href="/engines/engine1">Engine A</NavItem>
                <NavItem href="/engines/engine2">Engine B</NavItem>
              </>
            }
            contentProps={{ className: popoverContentClass }}
          />

          <Link to="/pricing">
            <Button
              variant="ghost"
              className="text-sm font-medium text-gray-100 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
            >
              Pricing
            </Button>
          </Link>

          <HoverPopover
            variant="elegant"
            trigger={
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-100 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
              >
                Enterprise <ChevronDown className="ml-1 h-4 w-4 text-indigo-400" />
              </Button>
            }
            content={
              <>
                <NavItem href="/enterprise/plan1">Plan 1</NavItem>
                <NavItem href="/enterprise/support">Support</NavItem>
              </>
            }
            contentProps={{ className: popoverContentClass }}
          />

          <HoverPopover
            variant="elegant"
            trigger={
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-100 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
              >
                Resources <ChevronDown className="ml-1 h-4 w-4 text-indigo-400" />
              </Button>
            }
            content={
              <>
                <NavItem href="/docs/intro">Documentation</NavItem>
                <NavItem href="/blog">Blog</NavItem>
              </>
            }
            contentProps={{ className: popoverContentClass }}
          />

          <HoverPopover
            variant="elegant"
            trigger={
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-100 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
              >
                Company <ChevronDown className="ml-1 h-4 w-4 text-indigo-400" />
              </Button>
            }
            content={
              <>
                <NavItem href="/about">About Us</NavItem>
                <NavItem href="/careers">Careers</NavItem>
              </>
            }
            contentProps={{ className: popoverContentClass }}
          />
        </div>

        <Button
          size="sm"
          variant="default"
          className="bg-gradient-to-r rounded-full from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 border-none shadow-md shadow-indigo-900/30 transition-all duration-200"
        >
          Download
        </Button>
      </div>
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  );
}
