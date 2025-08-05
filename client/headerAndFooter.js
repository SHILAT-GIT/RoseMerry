document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
});

function loadHeader() {
  const header = document.getElementById("header");
  header.innerHTML = `
    <header class="main-header">
     <div class="top-header">
      <img src="logo.jpg" alt="RoseMerry's logo" class="logo" />
    
      <div class="header-buttons">
        <button>התחברות</button>
        <button>הרשמה</button>
      </div>
       </div>


      <nav class="nav-bar">
        <div class="nav-right">
          <a href="#" class="nav-item">עמוד הבית</a>
          <span class="separator">|</span>
          <a href="#" class="nav-item">אודותנו</a>
        </div>

         <div class="search-box">
    <input type="text" id="searchInput" placeholder="חיפוש...">
     <i class="fas fa-search search-icon"></i>
     </div>

        <div class="nav-left">
          <a href="#" class="nav-icon">❤️</a>
          <span class="separator">|</span>
          <a href="#" class="nav-icon">🛒</a>
        </div>
      </nav>

      <div class="tabs-bar">
  <a href="#">חדש באתר </a>
  <a href="#">בשמים לנשים <span class="arrow">▾</span></a>
  <a href="#">בשמים לגברים <span class="arrow">▾</span></a>
</div>

    </header>
  `;
}

function loadFooter(){
    const footer=document.getElementById("footer");
    footer.innerHTML=`
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