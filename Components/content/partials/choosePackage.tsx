import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activePackageState, packagesState } from "../../../Recoil/atoms";
import PackageCell from "./packageCell";
import { StyledChoosePackageGrid } from "../styles";
import { Packages } from "../../../Helpers";

const ChoosePackage = () => {
  const [activePackage, setActivePackage] = useRecoilState(activePackageState);
  const packages = useRecoilValue<Packages>(packagesState);

  const handleChoosePackage = (pack: string) => () => {
    setActivePackage(pack);
  };

  return (
    <StyledChoosePackageGrid className="noselect" columns={7}>
      {Object.keys(packages).map((pack) => {
        return (
          <PackageCell
            key={pack}
            pack={pack}
            onClick={handleChoosePackage(pack)}
            title={pack
              .replace(/Icons|icons/g, "")
              .replace(/FontAwesome/, "Awesome")
              .replace("Snappmarket", "custom")}
            activePackage={activePackage}
          />
        );
      })}
    </StyledChoosePackageGrid>
  );
};

export default ChoosePackage;
