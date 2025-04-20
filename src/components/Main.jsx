import {useState} from "react";
import IngredientsList from "./IngredientsList.jsx";
import { getRecipe } from "../ai.js";
import AIRecipe from "./AIRecipe.jsx";

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")

    async function getRecipeFromAI(){
        const generatedRecipe = await getRecipe(ingredients)
        setRecipe(generatedRecipe)
        console.log(generatedRecipe)
    }

    const handleSubmit = (formData) => {
        const newIngredient = formData.get("ingredient");
        if (newIngredient !== "" && !ingredients.includes(newIngredient)) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        }
    }
    return (
        <main>
            <form className="add-ingredient-form" action={handleSubmit}>
                <input type='text' name="ingredient" placeholder="E.g Chicken" aria-label="Add ingredient"/>
                <button type={"submit"}>+ Add ingredient</button>
            </form>
            <p className="note"><i>Note: Enter an ingredient first.</i></p>
            {ingredients.length > 0 &&
                <IngredientsList ingredients={ingredients} getRecipe={getRecipeFromAI}/>
            }
            {recipe && <AIRecipe recipe={recipe} />}
        </main>
    )
}