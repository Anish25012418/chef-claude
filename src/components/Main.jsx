import { useState } from "react";

export default function Main(){
    const [ingredients, setIngredients] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const ingredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, ingredient]);
    }
    const ingredientsList = ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>));
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input type='text' name="ingredient" placeholder="E.g Chicken" aria-label="Add ingredient"/>
                <button type={"submit"}>+ Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}