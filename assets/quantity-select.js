class QuantitySelect {
  constructor() {
    this.productQuantitySelects =
      document.querySelectorAll(".product-quantity");
    this.cartCount = document.querySelectorAll(".cart-count");
    this.initialize();
  }

  initialize() {
    this.productQuantitySelects.forEach((select) => {
      select.addEventListener("change", (e) => {
        let productId = e.target.name;
        let quantity = e.target.value;
        let postData = {
          updates: {
            [productId]: quantity,
          },
        };
        this.updateCartQuantity(postData);
      });
    });
  }

  async updateCartQuantity(postData) {
    // post cart quantity update to Shopify AJAX API
    try {
      await fetch(window.Shopify.routes.root + "cart/update.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      this.getCart();
    } catch (error) {
      console.error(error);
    }
  }

  async getCart() {
    try {
      let response = await fetch(window.Shopify.routes.root + "cart.js", {
        method: "GET",
      });
      const cart = await response.json();
      this.updateCartCount(cart);
      this.updateSubtotal();
    } catch (error) {
      console.error(error);
    }
  }

  updateCartCount(cart) {
    this.cartCount.forEach((cartEl) => {
      cartEl.innerHTML = cart.item_count;
    });
  }

  async updateSubtotal() {
    try {
      const response = await fetch("/?section_id=cart");
      const text = await response.text();

      console.log(text);

      this.buildSubtotal(text);
    } catch (error) {
      console.error(error);
    }
  }

  buildSubtotal(text) {
    const html = document.createElement("div");
    html.innerHTML = text;
    const newSubtotal = html.querySelector(".cart").innerHTML;
    const myFuckingCart = document.querySelector(".cart").innerHTML;
    console.log("Hi derek" + myFuckingCart);
    document.querySelector(".cart").innerHTML = newSubtotal;
    document.querySelectorAll(".product-quantity").forEach((select) => {
      select.addEventListener("change", (e) => {
        let productId = e.target.name;
        let quantity = e.target.value;
        let postData = {
          updates: {
            [productId]: quantity,
          },
        };
        this.updateCartQuantity(postData);
      });
    });
  }
}

const cartQuantitySelect = new QuantitySelect();
