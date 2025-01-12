import Recipe from "./Recipe.jsx";

export default function Rank({ recipes, onLike, onViewed }) {
  const sortedRecipes = [...recipes].sort((a,b)=>b.like-a.like);
  
    return (
    <>
      {recipes.length > 0 ? (
        <div className="grid grid-cols-3 mx-60 gap-2 mb-5">
          {sortedRecipes.map((recipe, index) => (
            <Recipe recipe={recipe} index={index} onLike={onLike} onViewed={onViewed} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">레시피 정보가 없습니다.</p>
      )}
    </>
  );
}
