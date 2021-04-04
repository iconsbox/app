import { atom } from "recoil";

export const favoritePanelState = atom({
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

export const activeIconState = atom({
  key: "activeIcon",
  default: "",
});

export const pageResetState = atom({
  key: "pageReset",
  default: false,
});
