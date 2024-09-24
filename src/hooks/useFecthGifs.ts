import { useEffect, useState } from "react";
import { getGifs } from "../utils/getGifs";

export const useFecthGifs = (category: string) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []); //si las llaves están vacías significa que solamente va a ejecutar el useeffect la primera vez

  return {
    images, // images: images
    isLoading, // isLoading: isLoading
  };
};

// Un hook no es más que una función que regresa algo
