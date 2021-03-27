import { selector } from "recoil";
import { packagesState, activePackageState } from "./atoms";

export const packagesSelector = selector({
  key: "packages",
  get: ({ get }) => get(packagesState),
});

export const activePackageSelector = selector({
  key: "activePackage",
  get: ({ get }) => get(activePackageState),
});
