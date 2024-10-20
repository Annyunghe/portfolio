import { useState } from "react";

const RecipeModal = ({ isOpen, onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [method, setMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe={
        title,
        image,
        ingredients:ingredients.split(',').map(ingredient=>ingredient.trim()),
        method
    }

    onAddRecipe(newRecipe);

    setTitle('');
    setImage('');
    setIngredients('');
    setMethod('');
  };

  <form onSubmit="">
    <label>레시피 추가</label>
    <input type="text" />
  </form>;
};
