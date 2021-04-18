import React from "react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  activePackageState,
  packagesState,
  pageResetState,
} from "../../../../Recoil/atoms";
import PackageCell from "./packageCell";
import { Packages } from "../../../../Helpers";
import { StyledChoosePackageGrid } from "../styles";

const ChoosePackage = () => {
  const [activePackage, setActivePackage] = useRecoilState(activePackageState);
  const packages = useRecoilValue<Packages>(packagesState);
  const resetPages = useSetRecoilState(pageResetState);
  const router = useRouter();

  const handleChoosePackage = (pack: string) => async () => {
    setActivePackage(pack);
    resetPages(true);
    await router.push(`/?package=${pack}`);
  };

  return (
    <StyledChoosePackageGrid
      className={`noselect ${!activePackage ? "notChose" : "chose"}`}
      columns={7}
    >
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
