import { useState } from "react";

const RecipeModal = ({ onClose, onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [method, setMethod] = useState("");

  const inputStyle = "border w-full";

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      image,
      ingredients: ingredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
      method,
    };

    onAddRecipe(newRecipe);

    setTitle("");
    setImage("");
    setIngredients("");
    setMethod("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 bg-white px-4 py-2 min-w-80 w-1/3 rounded-lg"
    >
      <button
        onClick={onClose}
        className="absolute right-2 rounded-full font-bold text-xl border-2"
      >
        &times;
      </button>
      <h2 className="mb-4 text-center font-bold">레시피 추가</h2>
      <div>
        <label>레시피 이름</label>
        <input className={inputStyle} type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="레시피 이름일 입력하세요"/>
      </div>
      <div>
        <label>이미지 추가</label>
        <input className="ml-2" type="file"></input>
      </div>
      <div>
        <label>재료 작성</label>
        <input className={inputStyle} type="text" value={ingredients} onChange={(e)=>setIngredients(e.target.value)} placeholder="재료를 입력하세요"/>
      </div>
      <div>
        <label>조리 과정</label>
        <input className={inputStyle} type="text" value={method} onChange={(e)=>setMethod(e.target.value)} placeholder="조리과정을 작성하세요"/>
      </div>

      <button
        className="mt-4 bg-orange-400 rounded-md p-2 mx-auto text-orange-100 font-bold"
        type="submit"
      >
        추가하기
      </button>
    </form>
  );
};

export default RecipeModal;
