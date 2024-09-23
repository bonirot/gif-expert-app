import { Iimages } from "../utils/Interfaces";
import { GifItem } from "./GifItem";
import { useFecthGifs } from "../hooks/useFecthGifs";

type Props = {
  category: string;
};

//Otra forma de tipar "category" es así, pero es menos recomendable: { category }:{ category:string }
export const GritGrid = ({ category }: Props) => {
  const { images, isLoading } = useFecthGifs(category);
  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []); //si las llaves están vacías significa que solamente va a ejecutar el useeffect la primera vez

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {/* {images.map((img: Iimages) => (
          <li key={img.id}>{img.title}</li>
        ))} */}
        {images.map((img: Iimages) => (
          // <GifItem key={img.id} title={img.title} url={img.url} />
          <GifItem key={img.id} {...img} />
        ))}
        {/* Esta es otra forma más pro de ponerlo, usando desestructurando el objeto */}
      </div>
    </>
  );
};
