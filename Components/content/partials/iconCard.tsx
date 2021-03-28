import React from "react";
import { StyledCard } from "./styles";
import { makeFilePath } from "../../../Helpers";
import Image from "../../Image";

type Props = {
  icon: string;
  pack: string;
};

const IconCard = ({ icon, pack }: Props) => {
  const imageUrl = makeFilePath(pack, icon);
  return (
    <StyledCard key={imageUrl}>
      <Image key={imageUrl} url={imageUrl} alt={icon} />
      {icon}
    </StyledCard>
  );
};

export default IconCard;
