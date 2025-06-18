export async function getData() {


    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const data = await response.json();
        if (data && data.meals && data.meals.length > 0) {
            const meal = data.meals[0];
            // console.log(data.meals[0].strMealThumb)
            return meal;
        } else {
            console.log('no meal found')
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    };
}

function getIngredients(meal) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim()) {
            ingredients.push(`${measure ? measure : ''} ${ingredient}`.trim())
        }
    }

    return ingredients;
}


export function buildRecipe(result, recipeContainer) {

    const img = document.createElement('img');
    img.setAttribute('src', result.strMealThumb)
    img.setAttribute('alt', `photo of ${result.strMeal}`)
    img.setAttribute('class', 'mealImg')

    const titleCat = document.createElement('div');
    titleCat.setAttribute('class', 'titleCat');

    const title = document.createElement('h3')
    title.textContent = result.strMeal;
    title.setAttribute('class', 'recipe-title')

    const category = document.createElement('p');
    category.textContent = `Category: ${result.strCategory}`;
    category.setAttribute('class', 'category')

    titleCat.appendChild(title);
    titleCat.appendChild(category);

    const ingredients = getIngredients(result);
    const ingredientDiv = document.createElement('div');
    ingredientDiv.setAttribute('class', 'ingredients');
    let ingredientTitle = document.createElement('h3');
    ingredientTitle.textContent = 'Ingredients';
    const ul = document.createElement('ul');
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ul.appendChild(li);
    })
    ingredientDiv.appendChild(ul);


    const instructionsDiv = document.createElement('div');
    instructionsDiv.setAttribute('class', 'instructions')
    const instructionsTitle = document.createElement('h3');
    instructionsTitle.textContent = 'Instructions'
    const instructions = document.createElement('p');
    instructions.innerHTML = `${result.strInstructions}`;
    instructionsDiv.appendChild(instructions)

    const link = document.createElement('a');
    link.href = result.strYoutube;
    link.target = '_blank'
    link.setAttribute('class', 'ytLink')
    link.textContent = 'Watch Tutorial';

    recipeContainer.appendChild(img)
    recipeContainer.appendChild(titleCat)
    recipeContainer.appendChild(ingredientTitle)
    recipeContainer.appendChild(ingredientDiv)
    // recipeContainer.appendChild(servings)
    recipeContainer.appendChild(link);
    recipeContainer.appendChild(instructionsTitle)
    recipeContainer.appendChild(instructionsDiv)

}

export function clearContainer(recipeContainer) {
    recipeContainer.innerHTML = '';
}

export function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

export function savetoFavorite(item, favorites) {

    if (!item) {
        alert('Generate a recipe first!')
    } else {
        const exists = favorites.some(fav => fav.idMeal === item.idMeal)

        if (!exists) {

            if (item) {
                // console.log(item)
                favorites.push(item)
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert('Added to favorites!');
            }

        } else {
            alert('Already in favorites');

        }
    }
}

