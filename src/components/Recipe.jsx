export default function Recipe({recipe, index}) {
  return (
    <div key={index} className="bg-gray-200 rounded-xl border-2 border-stone-700 p-3">
      <h2 className="font-bold">{recipe.title}</h2>
      {recipe.image ? <img src={recipe.image}/> : null}
      <h2 className="mt-2">재료</h2>
      <p>{recipe.ingredients}</p>
      <h2 className="mt-2">과정</h2>
      <p>{recipe.method}</p>
    </div>
  );
}
