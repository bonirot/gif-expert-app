import { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  onNewCategory: (category: string) => void;
};

export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return; // el return es para salirse de la función
    onNewCategory(inputValue.trim());
    // setCategories((categories: any) => [inputValue, ...categories]);
    setInputValue(""); // para que se limpie el input después de añadir lo que sea
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={onInputChange} // también puedo poner: (event) => onInputChange(event)
      />
    </form>
  );
};
