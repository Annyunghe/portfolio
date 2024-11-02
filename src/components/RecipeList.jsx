import { useState } from "react";
import Recipe from "./recipe.jsx";
import RecipeModal from "./RecipeModal.jsx";

export default function RecipeList({ onAddRecipe, recipes }) {
  const [modalState, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    console.log(modalState);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="grid grid-cols-3 mx-20 gap-2">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => {
          return (
            <Recipe recipe={recipe} index={index}/>
          );
        })
      ) : (
        <p className="text-center mt-4">레시피 정보가 없습니다.</p>
      )}
      <button
        className="text-xl bg-amber-700 font-bold text-gray-100 hover:bg-amber-800 rounded-full w-10 h-10 absolute right-5 bottom-1/2"
        onClick={openModal}
        title="레시피 추가"
      >
        +
      </button>
      {modalState && <RecipeModal onClose={closeModal} onAddRecipe={onAddRecipe}/>}
    </div>
  );
}
