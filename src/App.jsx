import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import mainImage from "./assets/요리.png";
import RecipeList from "./components/RecipeList.jsx";
import Recent from "./components/Recent.jsx";
import Rank from "./components/Rank.jsx";
import axios from "axios";

function App() {
  const [recipes, setRecipe] = useState([]);
  const [recentViewed, setRecentViewed] = useState([]);

  //레시피 불러오기
  useEffect(() => {
    axios
      .get("http://localhost:3000/recipes")
      .then((response) => setRecipe(response.data));
  }, []);

  //최근 본 레시피 불러오기
  useEffect(() => {
    axios
      .get("http://localhost:3000/recentViewed")
      .then((response) => setRecentViewed(response.data));
  }, []);

  //레시피 추가 기능
  function handleRecipe(newRecipe) {
    axios.post("http://localhost:3000/recipes", newRecipe).then((response) => {
      setRecipe([...recipes, newRecipe]);
    });
  }

  //좋아요 기능
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

  //레시피 클릭 핸들러(최근 레시피 조회)
  function handleRecentRecipe(recipe) {
    if (!recentViewed.some((item) => item.id == recipe.id)) {
      axios
        .post("http://localhost:3000/recentViewed", recipe)
        .then(() => {
          setRecentViewed((prevRecipes) =>
            [recipe, ...prevRecipes].slice(0, 5)
          );
        })
        .catch((error) => console.error("Error adding recent recipe", error));
    }
  }

  return (
    <>
      <Router>
        <div className="w-52 h-full mx-auto">
          <img
            src={mainImage}
            alt="mainImage"
            className="rounded-3xl object-contain"
          ></img>
        </div>

        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <RecipeList
                onAddRecipe={handleRecipe}
                recipes={recipes}
                onLike={handleLike}
                onViewed={handleRecentRecipe}
              />
            }
          />
          <Route
            path="/recent"
            element={<Recent recipes={recentViewed} onLike={handleLike}/>}
          />
          <Route path="/rank" element={<Rank recipes={recipes} onLike={handleLike}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
