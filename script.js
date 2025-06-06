const products = [
  { name: "Pastel de diamantes", price: 350, image: "https://i.pinimg.com/736x/e3/08/f7/e308f78d0dfe2821625f86e7adc8050d.jpg" },
  { name: "Pastel de cristales", price: 250, image: "https://i.pinimg.com/736x/d5/d3/2e/d5d32eba20390f2ec27d47a0f44c4c64.jpg" },
  { name: "Pastel de rosas", price: 150, image: "https://i.pinimg.com/736x/84/75/87/8475877e929628a4b8f44389c9191952.jpg" },
  { name: "Pastel Misterioso", price: 300, image: "https://i.pinimg.com/736x/0a/3f/c8/0a3fc8a1e10f4481b5fae55391b320aa.jpg" },
  { name: "Pastel Eclipse", price: 200, image: "https://i.pinimg.com/736x/3d/a3/13/3da3134084438f9c27113f1576179b30.jpg" },
  { name: "Pastel de Medianoche", price: 180, image: "https://i.pinimg.com/736x/b1/18/1f/b1181ff79243603768dd0fc01bddd970.jpg" }
];

let cart = [];

function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach((product, i) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card text-light bg-dark h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-header text-center">${product.name}</div>
        <div class="card-body text-center">
          <p>Bs. ${product.price}</p>
          <button class="btn btn-outline-light" onclick="addToCart(${i})">Agregar</button>
        </div>
      </div>
    `;
    list.appendChild(col);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);  // elimina 1 elemento en la posición index
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      ${item.name} - Bs. ${item.price} 
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${i})" aria-label="Eliminar producto">
        <i class="bi bi-trash"></i>
      </button>
    `;

    cartItems.appendChild(li);
    sum += item.price;
  });

  total.textContent = `Bs. ${sum}`;
}

function makeOrder() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío. Por favor agrega productos antes de hacer el pedido.");
    return;
  }
  alert(`Gracias por tu compra. Total a pagar: Bs. ${cart.reduce((acc, item) => acc + item.price, 0)}`);
  cart = [];
  updateCart();
}

// Inicializar
renderProducts();
updateCart();
