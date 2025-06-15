import { buildRecipe, getFavorites, savetoFavorite } from './utils.js'
const favoritesContainer = document.querySelector('.favoritesContainer')
const deletebtn = document.querySelector('.fave-dlt');

let favorites = getFavorites();

function displayFavorites() {
    if (favorites.length < 1) {
        favoritesContainer.innerHTML = `<p>Nothing in favorites right now</p>`
    } else {
        favorites.forEach(item => {
            const div = document.createElement('div');
            div.setAttribute('class', 'faveCard')
            buildRecipe(item, div)
            const dlt = document.createElement('button');
            dlt.textContent = "❌"
            dlt.setAttribute('class', 'fave-dlt')
            dlt.addEventListener('click', () => {
                // Remove from favorites array
                favorites = favorites.filter(fav => fav.id !== item.id);

                // Update localStorage
                localStorage.setItem("favorites", JSON.stringify(favorites));

                // Remove the element from the DOM
                div.remove();
                displayFavorites();
            });
            div.appendChild(dlt)
            favoritesContainer.appendChild(div);
        })
    }
}

displayFavorites();



