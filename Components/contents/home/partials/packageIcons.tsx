import { useRecoilValue } from "recoil";
import { activePackageState } from "../../../../Recoil/atoms";
import IconCard from "./iconCard";
import { LocalStorageSavedItem, LOCALSTORAGE_NAME } from "../../../../Helpers";
import { StyledPackageIcons } from "../styles";

type Props = { icons: string[] | undefined };

const PackageIcons = ({ icons }: Props) => {
  const activePackage = useRecoilValue(activePackageState);

  const savedFavIcons = localStorage.getItem(LOCALSTORAGE_NAME) || "[]";
  const favIcons: LocalStorageSavedItem[] = JSON.parse(savedFavIcons);

  return (
    <StyledPackageIcons>
      {icons?.map((icon) => (
        <IconCard
          isFavorite={favIcons.some(
            (i) => i.pack === activePackage && i.icon === icon
          )}
          key={icon}
          pack={activePackage}
          icon={icon}
        />
      ))}
    </StyledPackageIcons>
  );
};

export default PackageIcons;
