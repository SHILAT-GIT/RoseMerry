document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
});

function loadHeader() {
  const header = document.getElementById("header");
  header.innerHTML = `
    <header class="main-header">
     <div class="top-header">
      <a href="homePage.html" class="logo-container"><img src="logo.jpg" alt="RoseMerry's logo" class="logo" /></a>
    
      <div class="header-buttons">
        <button>התחברות</button>
        <button>הרשמה</button>
      </div>
       </div>


      <nav class="nav-bar">
        <div class="nav-right">
          <a href="homePage.html" class="nav-item">עמוד הבית</a>
          <span class="separator">|</span>
          <a href="aboutPage.html" class="nav-item">אודותנו</a>
        </div>

  <div class="search-box">
    <input type="text" id="searchInput" placeholder="חיפוש...">
     <button class="search-button" id="searchButton">
       <i class="fas fa-search"></i>
     </button>
  </div>

        <div class="nav-left">
          <a href="favoritesPage.html" class="nav-icon">❤️</a>
          <span class="separator">|</span>
          <a href="cartPage.html" class="nav-icon">🛒</a>
        </div>
      </nav>

      <div class="tabs-bar">
  <a href="newPage.html">חדש באתר </a>
  <a href="femalePage.html">בשמים לנשים </a>
  <a href="malePage.html">בשמים לגברים </a>
</div>

    </header>
  `;
}

function loadFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML = `
    <div class="footer-section">
      <h3>צרו איתנו קשר</h3>
      <div class="footer-icons">
        <i class="fas fa-phone"></i>
        <i class="fas fa-envelope"></i>
        <i class="fas fa-globe"></i>
      </div>
   
      <h3>עקבו אחרינו</h3>
      <div class="footer-icons">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-tiktok"></i>
      </div>
    </div>
    `;
}