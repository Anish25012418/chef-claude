export default function IngredientsList(props) {
    const ingredientsList = props.ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>));
    return (
        <section className="ingredients-container">
            <h2>Ingredients on hand:</h2>
            <p className="note"><i>Note: Need at least 3 ingredients to generate a recipe.</i></p>
            <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
            {props.ingredients.length > 2 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            }
        </section>

    )
}