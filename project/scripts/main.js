import { buildRecipe, clearContainer, getFavorites, savetoFavorite, getData } from './utils.js'

document.querySelector('#copyright').textContent = new Date().getFullYear();
document.querySelector('#lastmod').textContent = `Last Modified: ${document.lastModified}`
const recipeContainer = document.querySelector('.recipeCard')
const container = document.querySelector('.container');
const favebtn = document.querySelector('.fave');

let currentRecipe;

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
    const result = await getData(keyword)

    currentRecipe = result;
    clearContainer(recipeContainer);
    buildRecipe(result, recipeContainer)


})

favebtn.addEventListener('click', () => {
    savetoFavorite(currentRecipe, getFavorites())
});

