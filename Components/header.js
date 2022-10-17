class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="header_section">
      <div id="header_container">
        <div class="logo">
          <h1>NC<span class="logo-dot">.</span></h1>
        </div>

        <div class="navigation">
          <div class="Menu-List">
            <div class="menu-list-items"><a href="#hero_section">Home</a></div>
            <div class="menu-list-items"><a href="#skills_cards">Works</a></div>
            <div class="menu-list-items"><a href="#">Resume</a></div>
            <div class="menu-list-items">
              <a href="#aboutme_section">About</a>
            </div>
            <div class="menu-list-items"><a href="#">Contact</a></div>
          </div>
        </div>
      </div>
    </div>
      `;
  }
}
customElements.define('main-header', Header);