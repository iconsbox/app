import {useState} from "react";
import {Cell } from "styled-css-grid";
import { Home3Icon, Search3Icon, Heart3Icon, Setting3Icon } from '@iconbox/iconly';
import MenuItem from './partials/menuItem';
import { StyledSidebarGrid } from './styles';

const Index = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const menus = [{
    title: 'Home',
    icon: <Home3Icon />,
    position: 4,
  },{
    title: 'Search',
    icon: <Search3Icon />,
    position: 7,
  },{
    title: 'Donate',
    icon: <Heart3Icon />,
    position: 10,
  },{
    title: 'Setting',
    icon: <Setting3Icon />,
    position: 13,
  }];

  const handleMenuClick = menu => () => {
    setActiveMenu(menu.title);
  };

  return (
    <StyledSidebarGrid flow="column" columns={1}>
      <Cell className="logo" height={2} top={2} center middle>IB</Cell>
      {menus.map((menu) => (
        <Cell height={3} top={menu.position} center middle>
          <MenuItem onClick={handleMenuClick(menu)} title={menu.title} icon={menu.icon} active={menu.title === activeMenu} />
        </Cell>
      ))}
      <Cell height={3} top={21} center middle>
        <div className="version">v1.0.214</div>
      </Cell>
    </StyledSidebarGrid>
  );
};


export default Index;
