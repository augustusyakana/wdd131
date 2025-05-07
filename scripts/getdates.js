const lastModified = document.lastModified;
const currentYear = new Date().getFullYear();

document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = lastModified;