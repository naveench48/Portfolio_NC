class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
//    Code goes here
        `;
    }
  }
  customElements.define('main-footer', Footer);