import { useImage } from "react-image";

export default (options = { useSuspense: false }) => {
  return (url) =>
    useImage({
      ...options,
      srcList: url,
    });
};
