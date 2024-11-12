import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import mainImage from "./assets/요리.png";
import RecipeList from "./components/RecipeList.jsx";
import axios from "axios";

function App() {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/recipes")
      .then((response) => setRecipe(response.data));
  }, []);

  function handleRecipe(newRecipe) {
    axios.post("http://localhost:3000/recipes", newRecipe).then((response) => {
      setRecipe([...recipes, newRecipe]);
    });
  }

  async function handleLike(id) {
    try {
      const updatedRecipe = recipes.find((recipe) => id == recipe.id);
      if (updatedRecipe && !updatedRecipe.liked) {
        const response = await axios.patch(
          `http://localhost:3000/recipes/${id}`,
          {
            like: updatedRecipe.like + 1,
            liked: true,
          }
        );
        setRecipe((prevRecipes) =>
          prevRecipes.map((recipe) =>
            id == recipe.id && !recipe.liked
              ? { ...recipe, like: recipe.like + 1, liked: true }
              : recipe
          )
        );
      }
    } catch (error) {
      console.log("Error updating recipe", error);
    }

    console.log("like button Click");
  }

  return (
    <>
      <div className="w-52 h-full mx-auto">
        <img
          src={mainImage}
          alt="mainImage"
          className="rounded-3xl object-contain"
        ></img>
      </div>

      <Header />
      <RecipeList
        onAddRecipe={handleRecipe}
        recipes={recipes}
        onLike={handleLike}
      />
    </>
  );
}

export default App;
