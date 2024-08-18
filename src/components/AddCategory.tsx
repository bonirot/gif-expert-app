import { useState } from "react";

export const AddCategory = ({ setCategories }: any) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }: any) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return; // el return es para salirse de la función
    setCategories((categories: any) => [inputValue, ...categories]);
    setInputValue(""); // para que se limpie el input después de añadir lo que sea
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={handleInputChange} // también puedo poner: (event) => onInputChange(event)
      />
    </form>
  );
};
