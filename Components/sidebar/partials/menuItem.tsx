import React, { ReactNode } from "react";
import { StyledMenuItem } from "../styles";
import useCurrentBreakpoint from "../../../Helpers/useCurrentBreakpoint";
import BackgroundSvg from "../backgroundSvg";

type Props = {
  icon: ReactNode;
  title: string;
  active: boolean;
  onClick: () => void;
};

const MenuItem = ({ icon, title, active, onClick }: Props) => {
  const currentBreakpoint = useCurrentBreakpoint();
  const isMobile = currentBreakpoint === "mobile";

  return (
    <StyledMenuItem
      onClick={onClick}
      className={`${active ? "active" : ""} ${isMobile ? "isMobile" : ""}`}
    >
      {icon}
      <span>{title}</span>
      {active && <BackgroundSvg />}
    </StyledMenuItem>
  );
};

export default MenuItem;
