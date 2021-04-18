import React, { useState } from "react";
import { Cell } from "styled-css-grid";
import {
  StyledHeadBar,
  StyledContent,
  StyledForm,
  StyledSettingItem,
  StyledSettingItemWrapper,
} from "./styles";
import {
  animations,
  dragDropFunctionalities,
  iconColors,
  iconDetailPageCTAs,
  iconSizes,
  languages,
  listCopyButtonActions,
  modes,
  packagesOrders,
} from "../../../Helpers";

type Settings = {
  iconsSize?: typeof iconSizes[number];
  iconsColor?: typeof iconColors[number];
  iconDetailPageCTA?: typeof iconDetailPageCTAs[number];
  copyButtonAction?: typeof listCopyButtonActions[number];
  language?: typeof languages[number];
  mode?: typeof modes[number];
  animation?: typeof animations[number];
  dragDropFunctionality?: typeof dragDropFunctionalities[number];
  packagesOrder?: typeof packagesOrders[number];
};

type SettingItem = {
  name: string;
  title: string;
  values: string[];
};

const Settings = () => {
  const [settings, setSettings] = useState<Settings>({});

  const handleChangeSetting = (name: string) => () => {
    console.log("Changing ", name);
  };

  const settingItems: SettingItem[] = [
    {
      name: "iconsSize",
      title: "Icons size",
      values: iconSizes,
    },
    {
      name: "iconsColor",
      title: "Icons color",
      values: iconColors,
    },
    {
      name: "iconDetailPageCTA",
      title: "Icons detail page CTA",
      values: iconDetailPageCTAs,
    },
    {
      name: "copyButtonAction",
      title: "List copy button action",
      values: listCopyButtonActions,
    },
    {
      name: "language",
      title: "Language",
      values: languages,
    },
    {
      name: "mode",
      title: "Theme mode",
      values: modes,
    },
    {
      name: "animation",
      title: "Animation",
      values: animations,
    },
    {
      name: "dragDropFunctionality",
      title: "Drag&Drop functionality",
      values: dragDropFunctionalities,
    },
    {
      name: "packagesOrder",
      title: "Packages order",
      values: packagesOrders,
    },
  ];
  const renderSettingItem = (item: SettingItem, index: number) => {
    const { title, name, values } = item;
    return (
      <StyledSettingItemWrapper
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.03,
          duration: 0.3,
        }}
      >
        <StyledSettingItem>{title}</StyledSettingItem>
        <select
          onChange={handleChangeSetting(name)}
          onBlur={handleChangeSetting(name)}
        >
          {values.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </StyledSettingItemWrapper>
    );
  };

  return (
    <StyledContent>
      <StyledHeadBar columns={7}>
        <Cell width={4} top={1}>
          <h3>
            <strong>Settings</strong>
          </h3>
        </Cell>
      </StyledHeadBar>

      <StyledForm>
        {settingItems.map((item, index) => renderSettingItem(item, index))}
      </StyledForm>
    </StyledContent>
  );
};

export default Settings;
