import { useState } from "react";
import RecipeModal from "./RecipeModal.jsx";

export default function Recipe({ onClick, recipes }) {
  const [modalState, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    console.log(modalState);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="container mx-auto">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => {
          return (
            <React.Fragment key={index}>
              <h2>{recipe.title}</h2>
              <h2>재료</h2>
            </React.Fragment>
          );
        })
      ) : (
        <p className="text-center mt-4">레시피 정보가 없습니다.</p>
      )}
      <button
        className="bg-amber-700 p-2 font-bold text-gray-100 hover:bg-amber-800 rounded-lg"
        onClick={openModal}
      >
        레시피 추가
      </button>
      {modalState && <RecipeModal onClose={closeModal}/>}
    </div>
  );
}
