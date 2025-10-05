const products = [
    { id: 1, name: "Smart Thermostat" },
    { id: 2, name: "Wireless Speaker" },
    { id: 3, name: "LED Light Bulb" },
    { id: 4, name: "Smart Door Lock" },
    { id: 5, name: "Robot Vacuum" }
];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
});


const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = document.lastModified;


