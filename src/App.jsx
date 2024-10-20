import { useState } from "react";
import Header from "./components/Header.jsx";
import mainImage from "./assets/요리.png";
import Recipe from "./components/Recipe.jsx";

function App() {
  const [recipes,addRecipe] = useState([]);

  function handleRecipe(newRecipe) {
    addRecipe(...recipes,newRecipe);
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
      <Recipe onClick={handleRecipe} recipes={recipes}/>
    </>
  );
}

export default App;
