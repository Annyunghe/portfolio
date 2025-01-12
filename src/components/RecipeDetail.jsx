import likeImage from "../assets/하트.png";
import { useParams } from "react-router-dom";

export default function RecipeDetail({ recipes, onLike }) {
  const { id } = useParams();

  const recipe = recipes.find((r) => r.id === id);

  return (
    <div className="mx-96 relative pb-8 bg-gray-200 rounded-xl border-2 border-stone-700 p-3 mb-5">
      {!recipe ? (
        <p>레시피 정보가 없습니다.</p>
      ) : (
        <>
          <h2 className="font-bold text-xl">{recipe.title}</h2>
          {recipe.image ? <img src={recipe.image} className="mx-auto w-96 h-96 rounded-xl" /> : null}
          <h2 className="mt-3 font-bold">- 재료</h2>
          <p className="whitespace-pre-line">{recipe.ingredients}</p>
          <h2 className="mt-3 font-bold">- 과정</h2>
          <p className="whitespace-pre-line">{recipe.method}</p>
          <div
            className="absolute bottom-2 -m-1 inline-flex hover:bg-red-500 hover:bg-opacity-20 rounded items-center"
            onClick={() => onLike(recipe.id)}
          >
            <img
              src={likeImage}
              alt="likeImage"
              className="ml-1 w-4 h-4 rounded"
            />
            <p className="w-6 h-6 text-sm text-center">{recipe.like}</p>
          </div>
        </>
      )}
    </div>
  );
}
