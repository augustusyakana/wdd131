document.querySelector('#copyright').textContent = new Date().getFullYear();
document.querySelector('#lastmodified').textContent = `Last Modified: ${document.lastModified}`;
const productSelect = document.querySelector('#productInput');

let numberOfSubmits = JSON.parse(localStorage.getItem('numOfSubmits')) || 0;


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach((product) => {
    const option = document.createElement('option');
    const name = product.name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    option.text = name;
    option.value = product.id

    productSelect.appendChild(option)
})

document.querySelector('form').addEventListener('submit', () => {
    numberOfSubmits++;
    localStorage.setItem('numOfSubmits', JSON.stringify(numberOfSubmits));
})

let submits = document.getElementById('submits');

if (!submits) {
    console.log('there is no element', submits)
} else {
    submits.textContent = `You have submitted ${numberOfSubmits} ${numberOfSubmits === 1 ? "review" : "reviews"} so far!`
}