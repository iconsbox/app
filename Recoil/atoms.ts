import { atom } from "recoil";

export const fontIconPanelState = atom({
  key: "fontIconPanel",
  default: false,
});

export const packagesState = atom({
  key: "packages",
  default: {},
});

export const activePackageState = atom({
  key: "activePackage",
  default: "",
});
