

const currentYear = new Date().getFullYear();

const yearSpan = document.getElementById('year');

yearSpan.textContent = currentYear;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = document.lastModified;