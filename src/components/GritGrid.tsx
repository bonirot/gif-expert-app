import { useEffect, useState } from "react";
import { getGifs } from "../utils/getGifs";
import { Iimages } from "../utils/Interfaces";

type Props = {
  category: string;
};

//Otra forma de tipar "category" es así, pero es menos recomendable: { category }:{ category:string }
export const GritGrid = ({ category }: Props) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []); //si las llaves están vacías significa que solamente va a ejecutar el useeffect la primera vez

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {/* {images.map((img: Iimages) => (
          <li key={img.id}>{img.title}</li>
        ))} */}
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
        {/* Esta es otra forma más pro de ponerlo, usando desestructurando el objeto */}
      </ol>
    </>
  );
};
