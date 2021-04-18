import React, { useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import Marquee from "react-smooth-marquee";
import Image from "../../../Image";
import {
  pickIcons,
  makeFilePath,
  Package,
  Packages,
} from "../../../../Helpers";
import { packagesState } from "../../../../Recoil/atoms";
import { StyledPackageCard } from "../styles";

type Props = {
  pack: string;
  title: string;
  activePackage: string;
  onClick: () => void;
};

const PackageCell = ({ pack, title, activePackage, onClick }: Props) => {
  const iconsMarqueeSize = 12;
  const defaultSpeed = 0;
  const hoverSpeed = 0.1;
  const [velocity, setVelocity] = useState(defaultSpeed);
  const packages = useRecoilValue<Packages>(packagesState);
  const currentPackage: Package = packages[title];
  const icons = useMemo(
    () => pickIcons(Object.keys(currentPackage?.icons || {}), iconsMarqueeSize),
    [currentPackage?.icons]
  );

  if (!currentPackage) {
    return null;
  }

  const handleSpeedUp = () => {
    setVelocity(hoverSpeed);
  };

  const handleSpeedDown = () => {
    // const styles = getComputedStyle(marqueeRef.current.children[0].children[0]);

    // setCurrentTransform(styles.transform);
    setVelocity(defaultSpeed);
  };

  return (
    <StyledPackageCard
      onMouseEnter={handleSpeedUp}
      onMouseLeave={handleSpeedDown}
      height={2}
      width={1}
      onClick={onClick}
      className={activePackage === pack ? "active" : ""}
    >
      <div className={`icon-holder ${!velocity ? "stop" : ""}`}>
        <Marquee velocity={velocity}>
          {icons.map((icon) => (
            <Image key={icon} url={makeFilePath(pack, icon)} alt={icon} />
          ))}
        </Marquee>
      </div>
      {title}
    </StyledPackageCard>
  );
};

export default PackageCell;
