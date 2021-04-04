import React, { useState } from "react";
import { Star2Icon } from "@iconbox/iconly";
import { useRouter } from "next/router";

import {
  makeFilePath,
  LOCALSTORAGE_NAME,
  LocalStorageSavedItem,
} from "../../../../Helpers";
import Image from "../../../Image";
import { StyledCard } from "./styles";
import { useSetRecoilState } from "recoil";
import { activeIconState } from "../../../../Recoil/atoms";

type Props = {
  icon: string;
  pack: string;
  isFavorite: boolean;
};

const IconCard = ({ icon, pack, isFavorite }: Props) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const setActiveIcon = useSetRecoilState(activeIconState);
  const router = useRouter();
  const imageUrl = makeFilePath(pack, icon);
  const page = (router.query.page as string) || "home";

  const handleSetFavIcon = () => {
    const savedFavIcons = localStorage.getItem(LOCALSTORAGE_NAME) || "[]";
    let favIcons: LocalStorageSavedItem[] = JSON.parse(savedFavIcons);

    if (favorite) {
      favIcons = favIcons.filter((i) => i.pack !== pack || i.icon !== icon);
    } else {
      favIcons.push({
        pack,
        icon,
      });
    }

    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(favIcons));
    setFavorite(!favorite);
  };

  const handleShowIcon = async () => {
    setActiveIcon(icon);
    await router.push(`/?page=${page}&package=${pack}&icon=${icon}`);
  };

  return (
    <StyledCard key={imageUrl}>
      <Star2Icon
        className={favorite ? "active" : ""}
        onClick={handleSetFavIcon}
        role="button"
      />
      <Image
        className="noselect"
        role="button"
        onClick={handleShowIcon}
        key={imageUrl}
        url={imageUrl}
        alt={icon}
      />
      <span>{icon}</span>
      <button className="noselect">Copy</button>
    </StyledCard>
  );
};

export default IconCard;
