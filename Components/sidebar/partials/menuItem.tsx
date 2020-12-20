import React from 'react';
import { StyledMenuItem } from '../styles';

const MenuItem = ({ icon, title, active, onClick }) => {
  return (
    <StyledMenuItem onClick={onClick} className={active ? 'active' : ''}>
      {icon}
      {title}
    </StyledMenuItem>
  );
};

export default MenuItem;
