// class CartIcon {
//   constructor() {
//     this.cartIcons = document.querySelectorAll('a[href$="/cart"]');
//     this.cartDrawer = document.querySelector('.cart-drawer');
//     this.closeIcon = document.querySelector('.close');
//     this.initialize();
//   }

//   initialize() {
//     this.closeIcon.addEventListener('click', (event) => {
//       this.closeCartDrawer();
//     });
//     this.cartIcons.forEach((icon) => {
//       icon.addEventListener('click', (event) => {
//         event.preventDefault();
//         this.openCartDrawer();
//       });
//     });
//   }

//   openCartDrawer() {
//     this.cartDrawer.classList.remove('translate-x-full');
//     this.cartDrawer.classList.add('translate-x-0');
//   }

//   closeCartDrawer() {
//     this.cartDrawer.classList.remove('translate-x-0');
//     this.cartDrawer.classList.add('translate-x-full');
//   }
// }

// const cartIcon = new CartIcon();
