import { useImage } from "react-image";

const Image = ({ url, alt }) => {
  const image = useImage({
    useSuspense: false,
    srcList: url,
  });

  return (
    <img className={image.isLoading ? "loading" : ""} src={url} alt={alt} />
  );
};

export default Image;
