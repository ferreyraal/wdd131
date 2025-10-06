

function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('open');
}

const services = [
    // INDUSTRIAL
    { name: "Warehouse Management", type: "industrial", img: "images/warehouse.jpg", desc: "Secure and organized storage solutions with real-time inventory control." },
    { name: "Container Unloading", type: "industrial", img: "images/container.jpg", desc: "Efficient unloading and inspection of goods from containers." },
    { name: "Cross-Docking Operations", type: "industrial", img: "images/crossdocking.jpeg", desc: "Streamlined transfer of goods to reduce storage time and improve distribution flow." },

    // E-COMMERCE
    { name: "Order Fulfillment", type: "ecommerce", img: "images/fulfillment.jpeg", desc: "Picking, packing, and dispatching online orders accurately and on time." },
    { name: "Inventory Control", type: "ecommerce", img: "images/inventory.jpg", desc: "Real-time tracking of stock levels for online sales." },
    { name: "Returns Management", type: "ecommerce", img: "images/returns.jpeg", desc: "Simplified process for handling customer returns and exchanges." },

    // TRANSPORT
    { name: "Urban Delivery", type: "transport", img: "images/urbandelivery.jpg", desc: "Last - mile delivery services across city and suburban areas." },
    { name: "Freight Transportation", type: "transport", img: "images/freight.jpg", desc: "Safe and reliable shipment of goods nationwide." },
    { name: "Express Shipping", type: "transport", img: "images/express.jpeg", desc: "Fast-track delivery for urgent shipments." },
];

function displayServices(list) {
    const container = document.getElementById("servicesContainer");
    if (!container) return;
    container.innerHTML = "";
    list.forEach(service => {
        const card = `
      <div class="service-card">
        <img src="${service.img}" alt="${service.name}" loading="lazy">
        <h3>${service.name}</h3>
        <p>${service.desc}</p>
      </div>`;
        container.innerHTML += card;
    });
}
displayServices(services);

function filterServices(type) {
    const filtered = type === "all" ? services : services.filter(s => s.type === type);
    displayServices(filtered);
}

const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const type = document.getElementById("type").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out the form in its entirety.");
            return;
        }

        const formData = { name, email, type, message };
        localStorage.setItem("lastMessage", JSON.stringify(formData));

        const resultDiv = document.getElementById("formResult");
        resultDiv.textContent = `Thanks ${name}, for your message "${type}".`;
        form.reset();
    });
}

