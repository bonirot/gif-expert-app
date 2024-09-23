import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GritGrid } from "./components/GritGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"] as string[]);

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
