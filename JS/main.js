let category_nav_list = document.querySelector(".category-nav-list");

function open_category_list() {
  category_nav_list.classList.toggle("active");
}

var cart = document.querySelector(".cart");

function open_close_cart() {
  cart.classList.toggle("active");
}

fetch("products.json")
  .then((Response) => Response.json())
  .then((data) => {
    const addTocartbutton = document.querySelectorAll(".btn-add-cart");

    addTocartbutton.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("data-id");
        const selectedProduct = data.find((product) => product.id == productId);

        addTocart(selectedProduct);

        const allMatchingbuttons = document.querySelectorAll(
          `.btn-add-cart[data-id="${productId}"]`
        );

        allMatchingbuttons.forEach((btn) => {
          btn.classList.add("active");
          btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Item in cart `;
        });
      });
    });
  });

function addTocart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ ...product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}
cartItemsContainer = "";
function updateCart() {
  const cartItemsContainer = document.getElementById("cart_items");
  cartItemsContainer.innerHTML = "";
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((item, index) => {
    cartItemsContainer.innerHTML += `
    
    <div class="item-cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price-cart">$${item.price}</p>
                    <div class="quantity-control">
                        <button class="decrease-quantity">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase-quantity">+</button>
                    </div>
                </div>
                <button class="delete-item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
            </div>
    
    `;
  });

  const deleteButtons = document.querySelectorAll(".delete-item");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = event.target
        .closest("button")
        .getAttribute("data-index");
      removefromeCart(itemIndex);
    });
  });
}

function removefromeCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const removeProduct = cart.splice(index, 1)[0];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  updateButtonsState(removeProduct.id);
}

function updateButtonsState(productId) {
  const allMatchingbuttons = document.querySelectorAll(
    `.btn-add-cart[data-id="${productId}"]`
  );
  allMatchingbuttons.forEach((button) => {
    button.classList.remove("active");
    button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> add to cart`;
  });
}

updateCart();
