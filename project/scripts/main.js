import { buildRecipe, clearContainer, getFavorites, savetoFavorite, getData } from './utils.js'



const recipeContainer = document.querySelector('.recipeCard')
const container = document.querySelector('.container');
const favebtn = document.querySelector('.fave');

let currentRecipe;

document.querySelector('.genBtn').addEventListener('click', async () => {
    const meal = await getData();
    // console.log(meal)
    currentRecipe = meal;
    clearContainer(recipeContainer);
    buildRecipe(meal, recipeContainer)

})

favebtn.addEventListener('click', () => {
    savetoFavorite(currentRecipe, getFavorites())
});

