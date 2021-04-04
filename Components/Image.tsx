import { useImage } from "react-image";

type Props = {
  url: string;
  alt: string;
  [name: string]: any;
};

const Image = ({ url, alt, ...rest }: Props) => {
  const image = useImage({
    useSuspense: false,
    srcList: url,
  });

  return (
    <img
      className={image.isLoading ? "loading" : ""}
      src={url}
      alt={alt}
      {...rest}
    />
  );
};

export default Image;
