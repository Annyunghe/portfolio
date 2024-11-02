import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import mainImage from "./assets/요리.png";
import RecipeList from "./components/RecipeList.jsx";
import axios from 'axios';

function App() {
  const [recipes,addRecipe] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/recipes')
    .then(response=>addRecipe(response.data))
  },[])

  function handleRecipe(newRecipe) {
    axios.post('http://localhost:3000/recipes',newRecipe)
    .then(response=>{
      addRecipe([...recipes,newRecipe]);
    })
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
      <RecipeList onAddRecipe={handleRecipe} recipes={recipes}/>
    </>
  );
}

export default App;
