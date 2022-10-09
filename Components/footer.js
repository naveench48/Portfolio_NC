class footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
//    Code goes here
        `;
    }
  }
  customElements.define('main-footer', footer);