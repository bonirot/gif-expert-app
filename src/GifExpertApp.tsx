import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GritGrid } from "./components/GritGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"] as string[]);

  const onAddCategory = (newCategory: string) => {
    ////////////////////////////////////// Posibilidad 2 de chatpgt más completa
    // Normalizar el texto a minúsculas
    const normalizedCategory = newCategory.trim().toLowerCase();

    // Verificar si la categoría ya existe
    if (categories.map((cat) => cat.toLowerCase()).includes(normalizedCategory))
      return;
    ///////////////////////////////////////

    /////////////////////////////////////// Posibilidad 1 de Herrera
    // // Si la categoría nueva ya existe, la ignora. Si no existe sí la inserta
    // if (categories.includes(newCategory)) {
    //   return;
    // }
    // console.log(newCategory);
    ///////////////////////////////////////

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
      {categories.map((category) => {
        return <GritGrid key={category} category={category} />;
      })}
    </>
  );
};
