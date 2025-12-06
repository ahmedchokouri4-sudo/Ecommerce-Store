let category_nav_list = document.querySelector(".category-nav-list");

function open_category_list() {
  category_nav_list.classList.toggle("active");
}

let nav_links = document.querySelector(".nav-links");

function open_menu() {
  nav_links.classList.toggle("active");
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

  const checkout_items = document.getElementById("checkout_items");

  if (checkout_items) {
    checkout_items.innerHTML = "";
  }

  var total_price = 0;
  var total_count = 0;

  cartItemsContainer.innerHTML = "";
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((item, index) => {
    let total_price_item = item.price * item.quantity;
    total_price += total_price_item;
    total_count += item.quantity;
    cartItemsContainer.innerHTML += `
    
    <div class="item-cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price-cart">$${total_price_item}</p>
                    <div class="quantity-control">
                        <button class="decrease-quantity" data-index=${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase-quantity" data-index=${index}>+</button>
                    </div>
                </div>
                <button class="delete-item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
            </div>
    
    `;

    if (checkout_items) {
      checkout_items.innerHTML += `
      
      <div class="item_cart">

                            <div class="image_name">
                                <img src="${item.img}" alt="">

                                <div class="content">
                                    <h4>Lorem ipsum dolor sit.</h4>
                                    <p class="price_cart">$${total_price_item}</p>
                                    <div class="quantity_control">
                                        <button class="decrease_quantity" data-index=${index}>-</button>
                                        <span class="quantity">${item.quantity}</span>
                                        <button class="increase_quantity" data-index=${index}>+</button>
                                    </div>
                                </div>
                            </div>


                            <button class="delete_item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>



                        </div>
      
      
      `;
    }
  });

  const price_cart_total = document.querySelector(".price-cart-total");
  const Count_item_cart = document.querySelector(".count-item-cart");
  const count_itm_header = document.querySelector(".count-item-header");

  price_cart_total.innerHTML = `$${total_price}`;
  Count_item_cart.innerHTML = total_count;
  count_itm_header.innerHTML = total_count;
  if (checkout_items) {
    const subtotal_checkout = document.querySelector(".subtotal_checkout");
    const total_checkout = document.querySelector(".total_checkout");

    subtotal_checkout.innerHTML = `$${total_price}`;
    total_checkout.innerHTML = `$${total_price + 20}`;
  }
  const increaseButtons = document.querySelectorAll(".increase-quantity");
  const decreaseButtons = document.querySelectorAll(".decrease-quantity");

  increaseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = event.target.getAttribute("data-index");
      increaseQuantity(itemIndex);
    });
  });

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = event.target.getAttribute("data-index");
      decreaseQuantity(itemIndex);
    });
  });

  // CHECKOUT INCREASE / DECREASE
  const increaseButtonsCheckout =
    document.querySelectorAll(".increase_quantity");
  const decreaseButtonsCheckout =
    document.querySelectorAll(".decrease_quantity");

  increaseButtonsCheckout.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = event.target.getAttribute("data-index");
      increaseQuantity(itemIndex);
    });
  });

  decreaseButtonsCheckout.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = event.target.getAttribute("data-index");
      decreaseQuantity(itemIndex);
    });
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

  // DELETE INSIDE CHECKOUT PAGE
  const deleteButtonsCheckout = document.querySelectorAll(".delete_item");

  deleteButtonsCheckout.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = event.target
        .closest("button")
        .getAttribute("data-index");
      removefromeCart(itemIndex);
    });
  });
}

function increaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function decreaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
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
