import { Iimages } from "../utils/Interfaces";

export const GifItem = ({ title, urlImg }: Iimages) => {
  return (
    <div className="card">
      <img src={urlImg} alt={title} />
      <p>{title}</p>
    </div>
  );
};
