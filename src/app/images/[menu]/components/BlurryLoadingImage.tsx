/* eslint-disable @next/next/no-img-element */
"use client";
import LazyLoadedImage from "@/app/components/lazy-image/LazyLoadedImage";
import CarImage from "../../../assets/133-300x300.jpg";
import BlurImage from "../../../assets/blur-image.png";

const BlurryLoadingImage = () => {
  return (
    <div className="container mx-auto flex justify-center">
      <div className="flex flex-col gap-32 justify-center">
        <div style={{ marginBottom: "100vh", maxWidth: "1ch" }}>
          Keep on scrolling till you find a blurry image. once in the view it
          will start making a request to get the image displayed lazily.
        </div>
        <div style={{ width: "300px" }}>
          <LazyLoadedImage
            blurSrc={BlurImage.src}
            imgSrc={CarImage.src}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default BlurryLoadingImage;
