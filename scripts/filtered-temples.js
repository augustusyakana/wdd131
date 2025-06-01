const hamMenu = document.querySelector('.ham-menu');
const offScreen = document.querySelector('.off-screen');

const copyright = document.querySelector('#copyright');
const lastmod = document.querySelector('#lastmodified');

const btns = document.querySelectorAll('.btn');
const title = document.querySelector('#title');

const templesContainer = document.querySelector('.temples');

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2022, May, 22",
        area: 6861,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
        templeName: "Kona Hawaii",
        location: "Kailua Kona, Hawaii",
        dedicated: "2000,January, 23-24",
        area: 12325,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/kona-hawaii-temple/kona-hawaii-temple-40578-main.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii",
        dedicated: "2010, November, 21",
        area: 42100,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
    }
];

copyright.textContent = new Date().getFullYear();
lastmod.textContent = document.lastModified;

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})

const displayTemples = (temples) => {
    temples.forEach(temple => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const name = document.createElement('h2');
        name.textContent = temple.templeName;
        name.setAttribute('class', 'name')
        card.appendChild(name);

        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;
        location.setAttribute('class', 'location');
        card.appendChild(location);

        const dedication = document.createElement('p');
        dedication.textContent = `Dedicated: ${temple.dedicated}`;
        dedication.setAttribute('class', 'dedication');
        card.appendChild(dedication);

        const area = document.createElement('p');
        area.textContent = `Area: ${Number(temple.area)} sq ft`;
        area.setAttribute('class', 'area');
        card.appendChild(area);

        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = `Photo ${temple.templeName} Temple`
        image.loading = 'lazy';
        image.setAttribute('class', 'image');
        card.appendChild(image);

        templesContainer.appendChild(card)
    })
}

displayTemples(temples)

const clearTemples = () => {
    templesContainer.innerHTML = '';
}

btns.forEach(button => {
    button.addEventListener('click', (e) => {
        hamMenu.classList.toggle('active');
        offScreen.classList.toggle('active');
        e.preventDefault();
        let filteredTemples = [];
        let pageTitle = 'All Temples'
        if (button.id === 'new') {
            pageTitle = "New Temples"
            filteredTemples = temples.filter(temple => {
                const year = Number(temple.dedicated.split(',')[0].trim())
                return year > 2000
            })
            console.log(filteredTemples);
        } else if (button.id === 'old') {
            pageTitle = 'Old Temples'
            filteredTemples = temples.filter(temple => {
                const year = temple.dedicated.split(',')[0].trim()
                return year < 1990
            })

        } else if (button.id === 'large') {
            pageTitle = 'Large Temples';
            filteredTemples = temples.filter(temple => temple.area > 90000)

        } else if (button.id === 'small') {
            pageTitle = 'Small Temples'
            filteredTemples = temples.filter(temple => temple.area < 10000)
        } else {
            filteredTemples = temples;
        }
        title.textContent = pageTitle;
        clearTemples();
        displayTemples(filteredTemples);

    })

})