import { ReactNode, useState } from "react";
import { Cell } from "styled-css-grid";
import {
  Home3Icon,
  Search3Icon,
  Heart3Icon,
  Setting3Icon,
} from "@iconbox/iconly";
import MenuItem from "./partials/menuItem";
import { StyledSidebarGrid, StyledMenuItemCell } from "./styles";
import useCurrentBreakpoint from "../../Helpers/useCurrentBreakpoint";

type MenuItem = {
  title: string;
  icon: ReactNode;
  position: number;
};

const Index = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const currentBreakpoint = useCurrentBreakpoint();
  const isMobile = currentBreakpoint === "mobile";

  const menus: MenuItem[] = [
    {
      title: "Home",
      icon: <Home3Icon className="menuIcon" />,
      position: 6,
    },
    {
      title: "Search",
      icon: <Search3Icon className="menuIcon" />,
      position: 9,
    },
    {
      title: "Donate",
      icon: <Heart3Icon className="menuIcon" />,
      position: 12,
    },
    {
      title: "Setting",
      icon: <Setting3Icon className="menuIcon" />,
      position: 15,
    },
  ];

  const handleMenuClick = (menu: MenuItem) => () => {
    setActiveMenu(menu.title);
  };

  return (
    <StyledSidebarGrid
      flow={isMobile ? "row" : "column"}
      rows={isMobile ? 1 : 25}
      columns={isMobile ? 4 : 1}
      gap={isMobile ? "0" : "8px"}
    >
      {!isMobile && (
        <Cell
          className="logo"
          width={1}
          height={isMobile ? 1 : 2}
          top={isMobile ? undefined : 2}
          center
          middle
        />
      )}
      {menus.map((menu) => (
        <StyledMenuItemCell
          key={menu.title}
          width={1}
          height={isMobile ? 1 : 3}
          top={isMobile ? undefined : menu.position}
          center
          middle
        >
          <MenuItem
            onClick={handleMenuClick(menu)}
            title={menu.title}
            icon={menu.icon}
            active={menu.title === activeMenu}
          />
        </StyledMenuItemCell>
      ))}
      {!isMobile && (
        <Cell
          width={1}
          height={isMobile ? 1 : 3}
          top={isMobile ? undefined : 20}
          center
          middle
        >
          <div className="version">v2.1.22</div>
        </Cell>
      )}
    </StyledSidebarGrid>
  );
};

export default Index;
