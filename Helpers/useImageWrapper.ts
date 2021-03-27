import { useImage } from "react-image";

export default (options = { useSuspense: false }) => {
  return (url: string) =>
    useImage({
      ...options,
      srcList: url,
    });
};
