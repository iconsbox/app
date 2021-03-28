import { useImage } from "react-image";

type Props = {
  url: string;
  alt: string;
};

const Image = ({ url, alt }: Props) => {
  const image = useImage({
    useSuspense: false,
    srcList: url,
  });

  return (
    <img className={image.isLoading ? "loading" : ""} src={url} alt={alt} />
  );
};

export default Image;
