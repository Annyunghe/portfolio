import { useLocation } from "react-router-dom";
import Recipe from "./recipe";

export default function Search({recipes,onLike,onViewed}){
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    const filteredRecipes = recipes.filter((recipe)=>recipe.title.includes(query));

    return(
        <>
        {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-3 mx-60 gap-2">
          {filteredRecipes.map((recipe, index) => (
            <Recipe recipe={recipe} index={index} onLike={onLike} onViewed={onViewed}/>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">레시피 정보가 없습니다.</p>
      )}
        </>
    )
}