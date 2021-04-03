import { selector } from "recoil";
import { packagesState, activePackageState, pageState } from "./atoms";

export const packagesSelector = selector({
  key: "packages",
  get: ({ get }) => get(packagesState),
});

export const activePackageSelector = selector({
  key: "activePackage",
  get: ({ get }) => get(activePackageState),
});

export const pageSelector = selector({
  key: "page",
  get: ({ get }) => get(pageState),
});
