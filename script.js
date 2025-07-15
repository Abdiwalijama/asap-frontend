greet = document.getElementById("greet");
elements = document.getElementById("element")
gg = document.getElementById("g")

function user(num1, num2){
 return greet.innerHTML = `waxa`
}

user(4, 6);

function convertUsdToAud(dollars){
  return greet.innerHTML = `AUD = ${dollars * 1.5}`
}
convertUsdToAud(200)

let array = ["Apple ", "Banans ", "Egg ", "Orange "]
array.filter(element=>{
  return elements.innerHTML += element
})
  
console.log(array);

let nightClub = ["18 ","20 " ,16 ,  15 , 21]

let filterArray = nightClub.filter(e=>{
  if(e >= 18){
    return gg.innerHTML += e
  }
})

console.log(filterArray);

const STORAGE_KEY = "myCart";

// Load cart from localStorage or use default
let cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  { id: 1, name: "T-Shirt", price: 25 },
  { id: 2, name: "Jeans", price: 50 },
  { id: 3, name: "Hat", price: 15 }
];

const cartList = document.getElementById("cart-list");

// Save cart to localStorage
function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

// Render one item (used on page load only)
function renderCartItem(item) {
  const li = document.createElement("li");
  li.setAttribute("data-id", item.id);
  li.innerHTML += `
    ${item.name} - $${item.price}
    <button onclick="removeItem(this, ${item.id})">Remove</button>
  `;
  cartList.appendChild(li);
}

// Load and render cart on page load
cart.forEach(item => renderCartItem(item));

// Remove item on click
function removeItem(button, idToRemove) {
  // Remove from DOM
  const li = button.parentElement;
  li.remove();

  // Remove from cart array
  cart = cart.filter(item => item.id !== idToRemove);

  // Update localStorage
  saveCart();
}

// Save initial cart if not saved already
saveCart();

// Save initial cart if not saved already
saveCart();