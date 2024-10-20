export default function Recipe({ onClick, recipes }) {
  return (
    <div className="container mx-auto">
      {recipes ? (
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
        onClick={onClick}
      >
        레시피 추가
      </button>
    </div>
  );
}
