fetch("products.json")
  .then((Response) => Response.json())
  .then((data) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const swiper_items_sale = document.getElementById("swiper_items_sale");
    const swiper_electronics = document.getElementById("swiper_electronics");
    const swiper_Appliances = document.getElementById("swiper_Appliances");
    const swiper_Mobiles = document.getElementById("swiper_Mobiles");

    data.forEach((product) => {
      if (product.old_price) {
        const isInCart = cart.some((cartItem) => cartItem.id === product.id);

        const persent_disc = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );

        swiper_items_sale.innerHTML += `
        
        <div class="swiper-slide product">
                        <span class="sale-present">%${persent_disc}</span>
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name-product"><a href="#">${
                          product.name
                        }</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old-price">$${product.old_price}</p>
                        </div>
                        <div class="icons">
                            <span class="btn-add-cart ${
                              isInCart ? "active" : ""
                            }  "   data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${
                                  isInCart ? "Item in cart" : "add to cart"
                                }
                            </span>
                            <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
        
        
        `;
      }
    });

    data.forEach((product) => {
      if (product.catetory == "electronics") {
        const isInCart = cart.some((cartItem) => cartItem.id === product.id);
        const persent_disc = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );

        const old_price_paragraph = product.old_price
          ? `<p class="old-price">$${product.old_price}</p>`
          : "";
        const persent_disc_div = product.old_price
          ? `<span class="sale-present">%${Math.floor(
              ((product.old_price - product.price) / product.old_price) * 100
            )}</span>`
          : "";

        swiper_electronics.innerHTML += `
        
        
        <div class="swiper-slide product"">
                        ${persent_disc_div}
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name-product"><a href="#">${
                          product.name
                        }</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old-price">${old_price_paragraph}</p>
                        </div>
                        <div class="icons">
                            <span class="btn-add-cart ${
                              isInCart ? "active" : ""
                            }  "   data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${
                                  isInCart ? "Item in cart" : "add to cart"
                                }
                            </span>
                            <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
        
        
        `;
      }
    });

    data.forEach((product) => {
      if (product.catetory == "appliances") {
        const isInCart = cart.some((cartItem) => cartItem.id === product.id);
        const persent_disc = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );

        const old_price_paragraph = product.old_price
          ? `<p class="old-price">$${product.old_price}</p>`
          : "";
        const persent_disc_div = product.old_price
          ? `<span class="sale-present">%${Math.floor(
              ((product.old_price - product.price) / product.old_price) * 100
            )}</span>`
          : "";

        swiper_Appliances.innerHTML += `
        
        
        <div class="swiper-slide product"">
                        ${persent_disc_div}
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name-product"><a href="#">${
                          product.name
                        }</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old-price">${old_price_paragraph}</p>
                        </div>
                        <div class="icons">
                            <span class="btn-add-cart ${
                              isInCart ? "active" : ""
                            }  "   data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${
                                  isInCart ? "Item in cart" : "add to cart"
                                }
                            </span>
                            <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
        
        
        `;
      }
    });

    data.forEach((product) => {
      if (product.catetory == "mobiles") {
        const isInCart = cart.some((cartItem) => cartItem.id === product.id);
        const persent_disc = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );

        const old_price_paragraph = product.old_price
          ? `<p class="old-price">$${product.old_price}</p>`
          : "";
        const persent_disc_div = product.old_price
          ? `<span class="sale-present">%${Math.floor(
              ((product.old_price - product.price) / product.old_price) * 100
            )}</span>`
          : "";

        swiper_Mobiles.innerHTML += `
        
        
        <div class="swiper-slide product"">
                        ${persent_disc_div}
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name-product"><a href="#">${
                          product.name
                        }</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old-price">${old_price_paragraph}</p>
                        </div>
                        <div class="icons">
                            <span class="btn-add-cart ${
                              isInCart ? "active" : ""
                            }  "   data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${
                                  isInCart ? "Item in cart" : "add to cart"
                                }
                            </span>
                            <span class="icon-product"><i class="fa-regular fa-heart"></i></span>
                        </div>
                    </div>
        
        
        `;
      }
    });
  });
