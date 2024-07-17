/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import lazyLoadExampleUrl from "../../../assets/133-300x300.jpg";
import styles from "./styles.module.css";
const LazyLoad = () => {
  const imageRef = useRef<HTMLImageElement>();
  const [isLoaded, setIsLoaded] = useState<boolean>();

  useEffect(() => {
    if (imageRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="md:container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Lazy Load</h2>
      <div
        className={`${styles.blurWrapper} ${isLoaded ? styles.loadedImg : ""}`}
      >
        <img
          src={lazyLoadExampleUrl.src}
          alt="photo"
          loading="lazy"
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default LazyLoad;
