import { useRecoilValue } from "recoil";
import InfiniteScroll from "react-infinite-scroll-component";
import { paginate } from "../../../Helpers";
import { packagesState, activePackageState } from "../../../Recoil/atoms";
import IconCard from "./iconCard";
import { StyledPackageIcons } from "../styles";
import { useState, useEffect } from "react";

const PackageIcons = () => {
  const packages = useRecoilValue(packagesState);
  const activePackage = useRecoilValue(activePackageState);
  const currentPackage = packages[activePackage];
  const allIcons = Object.keys(currentPackage.icons);
  const [icons, setIcons] = useState(paginate(allIcons, 15, 1));

  useEffect(() => {
    setIcons(paginate(allIcons, 15, 1));
  }, [JSON.stringify(currentPackage)]);
  const handleGetMoreIcons = () => {
    setIcons([...icons, ...paginate(allIcons, 0, 15)]);
  };

  return (
    <StyledPackageIcons>
      {icons.map((icon) => (
        <IconCard pack={activePackage} icon={icon} />
      ))}
    </StyledPackageIcons>
  );
};

export default PackageIcons;
