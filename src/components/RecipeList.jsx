import { useState } from "react";
import Recipe from "./Recipe.jsx";
import RecipeModal from "./RecipeModal.jsx";

export default function RecipeList({
  onAddRecipe,
  onDeleteRecipe,
  recipes,
  onLike,
  onViewed,
}) {
  const [modalState, setModal] = useState(false);
  const [deleteState,setDeleteMode] = useState(false);

  const openModal = () => {
    setModal(true);
    console.log(modalState);
  };

  const closeModal = () => {
    setModal(false);
  };

  const changeDeleteMode=()=>{
    setDeleteMode((prevMode)=>!prevMode);
  }

  return (
    <>
      {Array.isArray(recipes) && recipes.length > 0 ? (
        <div className="grid grid-cols-3 mx-60 gap-2 mb-5">
          {recipes.map((recipe, index) => (
            <Recipe
              recipe={recipe}
              index={index}
              onLike={onLike}
              onViewed={onViewed}
              onDeleteRecipe={onDeleteRecipe}
              deleteState={deleteState}
            />
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">레시피 정보가 없습니다.</p>
      )}
      <div className="flex flex-col bottom-1/3 fixed right-5 gap-4">
        <button
          className="text-xl bg-amber-700 font-bold text-gray-100 hover:bg-amber-800 rounded-full w-10 h-10"
          onClick={openModal}
          title="레시피 추가"
        >
          +
        </button>
        <button
          className="text-xl bg-amber-700 font-bold text-gray-100 hover:bg-amber-800 rounded-full w-10 h-10"
          onClick={changeDeleteMode}
          title="레시피 삭제"
        >
          -
        </button>
      </div>
      {modalState && (
        <RecipeModal onClose={closeModal} onAddRecipe={onAddRecipe} />
      )}
    </>
  );
}
