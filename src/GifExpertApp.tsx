import { useState } from "react";
import { AddCategory, GritGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Adventure Time"] as string[]);

  const onAddCategory = (newCategory: string) => {
    const normalizedCategory = newCategory.trim().toLowerCase();

    if (categories.map((cat) => cat.toLowerCase()).includes(normalizedCategory))
      return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value: string) => {
          onAddCategory(value);
        }}
      />
      {categories.map((category) => {
        return <GritGrid key={category} category={category} />;
      })}
    </>
  );
};
