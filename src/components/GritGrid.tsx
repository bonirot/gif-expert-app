import { useEffect } from "react";
import { getGifs } from "../utils/getGifs";

type Props = {
  category: string;
};

//Otra forma de tipar "category" es así, pero es menos recomendable: { category }:{ category:string }
export const GritGrid = ({ category }: Props) => {
  useEffect(() => {
    getGifs(category);
  }, []); //si las llaves están vacías significa que solamente va a ejecutar el useeffect la primera vez

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
