import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  activePackageState,
  packagesState,
  pageResetState,
} from "../../../Recoil/atoms";
import PackageCell from "./packageCell";
import { Packages } from "../../../Helpers";
import { StyledChoosePackageGrid } from "../styles";

const ChoosePackage = () => {
  const [activePackage, setActivePackage] = useRecoilState(activePackageState);
  const packages = useRecoilValue<Packages>(packagesState);
  const resetPages = useSetRecoilState(pageResetState);

  const handleChoosePackage = (pack: string) => () => {
    setActivePackage(pack);
    resetPages(true);
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
