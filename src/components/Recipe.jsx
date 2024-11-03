import likeImage from "../assets/하트.png";

export default function Recipe({ recipe, index }) {
  return (
    <div
      key={index}
      className="bg-gray-200 rounded-xl border-2 border-stone-700 p-3"
    >
      <h2 className="font-bold">{recipe.title}</h2>
      {recipe.image ? <img src={recipe.image} /> : null}
      <h2 className="mt-2">재료</h2>
      <p className="whitespace-pre-line">{recipe.ingredients}</p>
      <h2 className="mt-2">과정</h2>
      <p className="whitespace-pre-line">{recipe.method}</p>
      <div className="flex gap-1">
        <img
          src={likeImage}
          alt="likeImage"
          className="mt-2 w-4 h-4"
        />
        <p className="mt-1 w-5 h-5 text-sm bg-gray-300 text-center rounded">
          1
        </p>
      </div>
    </div>
  );
}
