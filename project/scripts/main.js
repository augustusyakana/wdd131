

document.querySelector('#copyright').textContent = new Date().getFullYear();
document.querySelector('#lastmod').textContent = `Last Modified: ${document.lastModified}`
const recipeContainer = document.querySelector('.recipeCard')
const container = document.querySelector('.container');

const recipeKeywords = [
    // Proteins
    "chicken", "beef", "pork", "lamb", "turkey", "salmon", "tuna", "shrimp", "crab", "lobster", "cod", "steak", "ribs",

    // Vegetables
    "potato", "tomato", "onion", "spinach", "zucchini", "carrot", "broccoli", "mushroom", "lettuce", "bell pepper",

    // Grains
    "rice", "pasta", "bread", "quinoa", "oats", "spaghetti", "tortilla", "risotto", "dumplings",

    // Dairy & Eggs
    "cheese", "milk", "butter", "cream", "egg", "yogurt",

    // Dish Types
    "soup", "salad", "stew", "curry", "sandwich", "wrap", "burger", "pizza", "lasagna", "burrito", "taco", "sushi",

    // Desserts
    "cake", "cookie", "brownie", "pie", "pudding", "ice cream", "cupcake", "cheesecake", "donut", "muffin",

    // Drinks
    "smoothie", "milkshake", "tea", "coffee", "juice", "lemonade",

    // Diet Styles
    "vegan", "vegetarian", "keto", "gluten-free", "low carb", "high protein", "Mediterranean",

    // Cuisines
    "Italian", "Mexican", "Indian", "Chinese", "Japanese", "Thai", "Greek", "Korean", "Filipino",

    // Cooking Methods
    "grilled", "baked", "fried", "air fryer", "instant pot", "slow cooker"
];

function getRandomKeyword() {
    const randomQuery = recipeKeywords[Math.floor(Math.random() * recipeKeywords.length)]
    return randomQuery;
}



document.querySelector('.genBtn').addEventListener('click', async () => {

    let keyword = getRandomKeyword()

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
        const result = data[0];
        clearContainer();
        buildRecipe(result)


    } catch (error) {
        console.error(error);
    }
})

function buildRecipe(result) {
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

function clearContainer() {
    recipeContainer.innerHTML = '';
}



