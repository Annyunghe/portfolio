import { useNavigate } from "react-router-dom";
import likeImage from "../assets/하트.png";

export default function Recipe({
  recipe,
  index,
  onLike,
  onViewed,
  onDeleteRecipe,
  deleteState,
}) {
  const navigate = useNavigate();

  return (
    <div
      key={index}
      className="relative pb-8 bg-gray-200 rounded-xl border-2 border-stone-700 p-3"
      onClick={() => onViewed(recipe, navigate)}
    >
      {deleteState ? (
        <button
          className="absolute right-2 rounded-full font-bold text-xs bg-gray-300 hover:bg-gray-400 w-6 h-6"
          onClick={(e)=>{
            e.stopPropagation();
            onDeleteRecipe(recipe.id);
          }}
        >
          x
        </button>
      ) : null}
      <h2 className="font-bold text-xl">{recipe.title}</h2>
      {recipe.image ? <img src={recipe.image} /> : null}
      <h2 className="mt-3">- 재료</h2>
      <p className="whitespace-pre-line">{recipe.ingredients}</p>
      <h2 className="mt-3">- 과정</h2>
      <p className="whitespace-pre-line">{recipe.method}</p>
      <div
        className="absolute bottom-2 -m-1 inline-flex hover:bg-red-500 hover:bg-opacity-20 rounded items-center"
        onClick={(e) => {
          e.stopPropagation();
          onLike(recipe.id)
        }}
      >
        <img src={likeImage} alt="likeImage" className="ml-1 w-4 h-4 rounded" />
        <p className="w-6 h-6 text-sm text-center">{recipe.like}</p>
      </div>
    </div>
  );
}
