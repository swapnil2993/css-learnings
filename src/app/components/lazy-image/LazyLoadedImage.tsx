/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

type BlurryLoadingImageProps = {
  blurSrc: string;
  imgSrc: string;
  alt?: string;
  bgColor?: string;
};

const LazyLoadedImage = ({
  blurSrc,
  imgSrc,
  alt = "image",
}: BlurryLoadingImageProps) => {
  const [loading, setLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      const imgElement = imgRef.current;
      const handleLoad = () => {
        setLoading(false);
      };

      imgElement.onload = handleLoad;
      imgElement.src = imgSrc;

      return () => {
        imgElement.onload = null;
      };
    }
  }, [imgSrc]);

  return (
    <div
      className={`${styles.blurWrapper} ${loading ? "" : styles.loadedImg}`}
      style={{ backgroundImage: `url(${blurSrc})` }}
    >
      <img ref={imgRef} alt={alt} loading="lazy" />
    </div>
  );
};

export default LazyLoadedImage;
