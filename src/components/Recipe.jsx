export default function Recipe({ recipe }) {
  return (
    <div className="container mx-auto">
      {recipe ? (
        <>
          <h2>{recipe.title}</h2>
          <h2>재료</h2>{" "}
        </>
      ) : (
        <p className="text-center mt-4">레시피 정보가 없습니다.</p>
      )}
    </div>
  );
}
