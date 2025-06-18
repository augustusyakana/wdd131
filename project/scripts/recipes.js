const recipesPageContainer = document.querySelector('.recMealContainer')

const categorySchedule =
{
    Monday: {
        title: "Mediterranean Monday",
        category: ['Lamb', 'Vegetarian']
    },
    Tuesday: {
        title: "Beef & Pork Tuesday",
        category: ['Beef', 'Pork']
    },
    Wednesday: {
        title: "World Flavors Wednesday",
        category: ['Miscellaneous', 'Seafood']
    },
    Thursday: {
        title: "Throwback Thursday",
        category: ['Side', 'Pasta']
    },
    Friday: {
        title: "FryDay (Fried Food)",
        category: ['Chicken', 'Starter']
    },
    Saturday: {
        title: "Savory Saturday",
        category: ['Goat', 'Seafood']
    },
    Sunday: {
        title: "Slow-Cooked Sunday",
        category: ['Dessert', 'Lamb']
    }
}

const weekDay = new Date().toLocaleDateString('en-US', { weekday: 'long' })
const todayTheme = categorySchedule[weekDay];
if (todayTheme) {
    const { title, category } = todayTheme;
    const chosenCategory = category[Math.floor(Math.random() * category.length)]
    document.querySelector('.recipesThemeTitle').textContent = title;
    const results = await getMealsByCategory(chosenCategory);
    displayPreviews(results)
}

async function getMealsByCategory(category) {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`);
        const data = await res.json();
        if (!data.meals || data.meals.length === 0) {
            console.warn(`No meals found for category: ${category}`);
            return [];
        }
        console.log(typeof (data.meals))
        return data.meals;
    } catch (error) {
        console.error('Error fetching meals by category:', error);
        return [];
    }
}

function displayPreviews(meals) {
    meals.forEach(meal => {
        const card = document.createElement('div');
        card.setAttribute('class', 'previewCard')

        const img = document.createElement('img');
        img.src = meal.strMealThumb;
        img.alt = `photo of ${meal.strMeal}`;
        img.setAttribute('class', 'previewImg');

        const title = document.createElement('h2');
        title.setAttribute('class', 'previewTitle')
        title.textContent = meal.strMeal;

        card.appendChild(img)
        card.appendChild(title);

        recipesPageContainer.appendChild(card)
    })

}