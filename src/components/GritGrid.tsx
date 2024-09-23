import { Iimages } from "../utils/Interfaces";
import { GifItem } from "./GifItem";
import { useFecthGifs } from "../hooks/useFecthGifs";

type Props = {
  category: string;
};

export const GritGrid = ({ category }: Props) => {
  const { images, isLoading } = useFecthGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img: Iimages) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
