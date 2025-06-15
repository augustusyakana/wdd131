export async function getData(keyword) {
    const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${keyword}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1f9f149f47mshf80b07667dc70efp11c707jsn5e41c5b893f9',
            'x-rapidapi-host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data[0])
        return data[0];

    } catch (error) {
        console.error("error", error);
    }
}


export function buildRecipe(result, recipeContainer) {
    const title = document.createElement('h3')
    title.textContent = result.title;
    title.setAttribute('class', 'recipe-title')

    const ingredientDiv = document.createElement('div');
    ingredientDiv.setAttribute('class', 'ingredients');


    let ingredients = result.ingredients.split('|');
    let ingredientTitle = document.createElement('h3');
    ingredientTitle.textContent = 'Ingredients';
    const ul = document.createElement('ul');
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ul.appendChild(li);
    })
    ingredientDiv.appendChild(ul);

    const servings = document.createElement('p');
    servings.innerHTML = `<h3>Servings </h3> ${result.servings}`;
    const instructionsTitle = document.createElement('h3');
    instructionsTitle.textContent = 'Instructions'
    const instructionsDiv = document.createElement('div');
    instructionsDiv.setAttribute('class', 'instructions')
    const instructions = document.createElement('p');
    instructions.innerHTML = `${result.instructions}`;
    instructionsDiv.appendChild(instructions)

    recipeContainer.appendChild(title);
    recipeContainer.appendChild(ingredientTitle)
    recipeContainer.appendChild(ingredientDiv)
    recipeContainer.appendChild(servings)
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
        const exists = favorites.some(fav => fav.title === item.title)

        if (!exists) {

            if (item) {
                console.log(item)
                favorites.push(item)
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert('Added to favorites!');
            }

        } else {
            alert('Already in favorites');

        }
    }
}

