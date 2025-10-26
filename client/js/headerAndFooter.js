document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
});

function loadHeader() {
  const header = document.getElementById("header");
  header.innerHTML = `
    <header class="main-header">
     <div class="top-header">
      <a href="../pages/homePage.html" class="logo-container"><img src="../images/logo1.jpg" alt="RoseMerry's logo" class="logo" /></a>
    
      <div class="header-buttons">
        <button>התחברות</button>
        <button>הרשמה</button>
      </div>
     </div>


      <nav class="nav-bar">
        <div class="nav-right">
          <a href="../pages/homePage.html" class="nav-item">עמוד הבית</a>
          <span class="separator">|</span>
          <a href="../pages/aboutPage.html" class="nav-item">אודותנו</a>
        </div>
        <div class="nav-left">
          <div class="search-box">
            <input type="text" id="searchInput" placeholder="חיפוש...">
             <button class="search-button" id="searchButton">
               <i class="fas fa-search"></i>
             </button>
          </div>

          <div class="nav-icon-div">
            <a href="../pages/favoritesPage.html" class="nav-icon"><i class="fa-solid fa-heart" ></i></a>
            <span class="separator">|</span>
            <a href="../pages/cartPage.html" class="nav-icon"><i class="fa-solid fa-cart-shopping" ></i></a>
          </div>
        </div>
      </nav>

      <div class="tabs-bar">
       <a href="../pages/newPage.html">חדש באתר </a>
       <a href="../pages/femalePage.html">בשמים לנשים </a>
       <a href="../pages/malePage.html">בשמים לגברים </a>
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