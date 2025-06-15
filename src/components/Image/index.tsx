import { useState } from "react";
import imageFallback from "@/assets/fallback.jpg";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const Image = ({ src, alt, ...props }: ImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={() => setImageSrc(imageFallback)}
      {...props}
    />
  );
};
