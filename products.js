const products = [
    { name: "Cane-sofa", price: 50000.00 },
    { name: "Cane swing chair", price: 7000.00 },
    { name: "Baby chair", price: 4500.00 },
    { name: "Bar table and chair", price: 12000.00 },
	{ name: "Bed head board", price: 20000.00 },
	{ name: "Woven lamp", price: 1500.00 },
	{ name: "Table lamp", price: 1200.00 },
	{ name: "Chimney lamp", price: 1000.00 },
	{ name: "Food table covers", price: 900.00 },
	{ name: "String hopper modules", price: 650.00 },
	{ name: "Winnowing fan", price: 550.00 },
	{ name: "Book rack", price: 2800.00 },
	{ name: "Basket", price: 550.00 },
	{ name: "Stationery holder", price: 250.00 },
	{ name: "Table decoration", price: 275.00 }
	
];

function displayProducts() {
    const productTableBody = document.getElementById("productTableBody");    
    productTableBody.innerHTML = "";
    
    products.forEach(product => {
        const row = document.createElement("tr");
        const itemNameCell = document.createElement("td");		
        const priceCell = document.createElement("td");
        
        itemNameCell.textContent = product.name;
        priceCell.textContent = `$${product.price.toFixed(2)}`;

        row.appendChild(itemNameCell);
        row.appendChild(priceCell);
        productTableBody.appendChild(row);
    });
}

window.addEventListener("load", displayProducts);