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
                deletediv(item, div);
            });
            div.appendChild(dlt)
            favoritesContainer.appendChild(div);
        })
    }
}

function deletediv(item, div) {
    // Remove from favorites array
    let newList = favorites.filter(fav => fav.title !== item.title);
    favorites = newList;
    // Update localStorage
    localStorage.setItem("favorites", JSON.stringify(newList));
    // Remove the element from the DOM

    div.remove();
    favoritesContainer.innerHTML = '';
    displayFavorites();
}

displayFavorites();



