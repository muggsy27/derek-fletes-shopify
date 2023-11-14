class Drawer {
  constructor() {
    this.drawer = document.querySelector('#drawer');
    this.drawerBackground = document.querySelector('#drawer-background');
    this.hamburgerMenu = document.querySelector('#hamburger-menu');

    this.isOpen = false;

    this.hamburgerMenu.addEventListener('click', (e) => {
      this.openDrawer();
    });
    this.drawerBackground.addEventListener('click', () => {
      this.closeDrawer();
    });
  }

  openDrawer() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.drawer.classList.add('translate-x-0');
      this.drawer.classList.remove('translate-x-[-100%]');
    }
  }

  closeDrawer() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.drawer.classList.remove('translate-x-0', this.isOpen);
      this.drawer.classList.add('translate-x-[-100%]', this.isOpen);
    }
  }
}

const drawer = new Drawer();
