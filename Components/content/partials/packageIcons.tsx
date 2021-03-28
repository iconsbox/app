import { useRecoilValue } from "recoil";
import { activePackageState } from "../../../Recoil/atoms";
import IconCard from "./iconCard";
import { StyledPackageIcons } from "../styles";

const PackageIcons = ({ icons }: { icons: string[] | undefined }) => {
  const activePackage = useRecoilValue(activePackageState);

  return (
    <StyledPackageIcons>
      {icons?.map((icon) => (
        <IconCard key={icon} pack={activePackage} icon={icon} />
      ))}
    </StyledPackageIcons>
  );
};

export default PackageIcons;
