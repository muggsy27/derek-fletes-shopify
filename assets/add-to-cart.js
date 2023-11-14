class AddToCart {
  constructor() {
    this.addToCartForms = document.querySelectorAll('form[action$="/cart/add"]');
    this.cartCount = document.querySelectorAll('.cart-count');
    this.cartDrawer = document.querySelector('.cart-drawer');
    this.initialize();
  }

  initialize() {
    this.addToCartForms.forEach((form) => {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // use form data to build POST request object
        let formData = new FormData(form);
        let postData = {
          items: [
            {
              id: formData.get('size'),
              quantity: 1,
            },
          ],
        };

        // POST request to Shopify AJAX API
        this.updateCart(postData);
      });
    });
  }

  async updateCart(postData) {
    // post cart update to Shopify AJAX API
    try {
      await fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      // GET request to Shopify Section Rendering API
      this.getCart();

      // update cart & open cart drawer
      this.updateCartDrawer();
      this.openCartDrawer();
    } catch (error) {
      console.error(error);
    }
  }

  async getCart() {
    try {
      let response = await fetch(window.Shopify.routes.root + 'cart.js', {
        method: 'GET',
      });
      const cart = await response.json();
      this.updateCartCount(cart);
    } catch (error) {
      console.error(error);
    }
  }

  updateCartCount(cart) {
    this.cartCount.forEach((cartEl) => {
      cartEl.innerHTML = cart.item_count;
    });
  }

  async updateCartDrawer() {
    try {
      const response = await fetch('/?section_id=cart-drawer');
      const text = await response.text();

      this.buildCartDrawer(text);
    } catch (error) {
      console.error(error);
    }
  }

  buildCartDrawer(text) {
    const html = document.createElement('div');
    html.innerHTML = text;
    const newDrawer = html.querySelector('.cart-drawer').innerHTML;
    document.querySelector('.cart-drawer').innerHTML = newDrawer;
    const closeIcon = document.querySelector('.close');
    console.log(closeIcon);
    closeIcon.addEventListener('click', () => {
      this.closeCartDrawer();
    });
  }

  openCartDrawer() {
    this.cartDrawer.classList.remove('translate-x-full');
    this.cartDrawer.classList.add('translate-x-0');
  }

  closeCartDrawer() {
    console.log('sjdklfjdsl;kfjdslkfjklsdfj;ldkjf');
    this.cartDrawer.classList.remove('translate-x-0');
    this.cartDrawer.classList.add('translate-x-full');
  }
}

const addToCart = new AddToCart();
