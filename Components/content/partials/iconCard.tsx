import React from "react";
import { StyledCard } from "./styles";
import { makeFilePath } from "../../../Helpers";
import Image from "../../Image";

const IconCard = ({ icon, pack }) => {
  const imageUrl = makeFilePath(pack, icon);
  return (
    <StyledCard key={imageUrl}>
      <Image key={imageUrl} url={imageUrl} alt={icon} />
      {icon}
    </StyledCard>
  );
};

export default IconCard;
