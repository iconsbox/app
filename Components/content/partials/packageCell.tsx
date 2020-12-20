import React, {useMemo, useState} from 'react';
import { StyledPackageCard } from '../styles';
import {useRecoilValue} from "recoil";
import Marquee from "react-smooth-marquee"

import Image from "../../../Components/Image";
import {pickIcons, makeFilePath} from "../../../Helpers";
import {packagesState} from "../../../Recoil/atoms";

const PackageCell = ({ pack, title, activePackage, onClick }) => {
  const iconsMarqueeSize = 12;
  const defaultSpeed = 0;
  const hoverSpeed = 0.1;
  const [velocity, setVelocity] = useState(defaultSpeed);
  // const [currentTransform, setCurrentTransform] = useState('unset');
  const packages = useRecoilValue(packagesState);
  // const marqueeRef = useRef(null);
  const currentPackage = packages[title];

  if(!currentPackage) {
    return null;
  }

  console.log({
    currentPackage,
    title,
  });
  const icons = useMemo(() => pickIcons(Object.keys(currentPackage?.icons), iconsMarqueeSize), []);
  const handleSpeedUp = () => {
    setVelocity(hoverSpeed);
  };
  const handleSpeedDown = () => {
    // const styles = getComputedStyle(marqueeRef.current.children[0].children[0]);

    // setCurrentTransform(styles.transform);
    setVelocity(defaultSpeed);
  };

  return <StyledPackageCard
    onMouseEnter={handleSpeedUp}
    onMouseLeave={handleSpeedDown}
    height={2}
    width={1}
    onClick={onClick}
    className={activePackage === pack ? 'active': ''}
  >
    <div className={`icon-holder ${!velocity ? 'stop' : ''}`}>
      <Marquee velocity={velocity}>
        {icons.map(icon => <Image url={makeFilePath(pack, icon)} alt={icon} />)}
      </Marquee>
    </div>
    {title}
  </StyledPackageCard>;
};

export default PackageCell;
