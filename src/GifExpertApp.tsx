import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
  ] as string[]);

  const onAddCategory = (newCategory: string) => {
    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
    //Esto es para añadir al final:
    // setCategories([...categories, "Valorant"]);
  };

  return (
    <>
      {/* título */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory
        //   setCategories={setCategories}
        onNewCategory={(value: string) => {
          onAddCategory(value);
        }}
      />
      {/* listado de gif */}
      {/* <button onClick={onAddCategory}>Add</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
