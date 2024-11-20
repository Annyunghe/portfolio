import Recipe from "./recipe.jsx";

export default function Recent({ recipes, onLike }) {
  return (
    <>
      {recipes.length > 0 ? (
        <div className="grid grid-cols-3 mx-60 gap-2">
          {recipes.map((recipe, index) => (
            <Recipe recipe={recipe} index={index} onLike={onLike} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">최근 조회 한 레시피가 없습니다.</p>
      )}
    </>
  );
}
