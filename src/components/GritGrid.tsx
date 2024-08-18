type Props = {
  category: string;
};

//Otra forma de tipar "category" es así, pero es menos recomendable: { category }:{ category:string }

export const GritGrid = ({ category }: Props) => {
  return (
    <>
      <h3>{category}</h3>
      <p>Hola Mundo</p>
    </>
  );
};
