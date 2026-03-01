@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

:root{
  --nav-bg: #2f4252;
  --accent: #caa15b;
  --page-bg: #f6f0e6;
  --text: #22303b;
  --muted: #6b7a86;
  --shadow: 0 10px 30px rgba(0,0,0,.12);
  --shadow-soft: 0 8px 18px rgba(0,0,0,.10);
}

*{ box-sizing:border-box; margin:0; padding:0; }

body{
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: radial-gradient(1200px 700px at 30% 0%, #fff7ea 0%, var(--page-bg) 60%);
  color: var(--text);
}

img{ max-width:100%; display:block; }
a{ text-decoration:none; color: inherit; }

/* ===== HEADER (match screenshot) ===== */
.header{
  background: var(--nav-bg);
  height: 70px;
  display:flex;
  align-items:center;
}

.nav-wrap{
  width: min(1100px, 92%);
  margin: 0 auto;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap: 18px;
}

.nav-links{
  display:flex;
  align-items:center;
  gap: 34px;
}

.nav-link{
  color: #f5f7fa;
  font-weight: 600;
  font-size: 22px;
  padding: 14px 4px;
  position: relative;
}

.nav-link:hover{ color: var(--accent); }
.nav-link.active{ color: var(--accent); }

/* gold underline curve */
.nav-link.active::after{
  content:"";
  position:absolute;
  left: -8px;
  right: -8px;
  bottom: 6px;
  height: 12px;
  border: 3px solid var(--accent);
  border-top: none;
  border-radius: 0 0 999px 999px;
}

/* social icons */
.social{
  display:flex;
  align-items:center;
  gap: 10px;
  margin-left: 8px;
}

.social-btn{
  width: 44px;
  height: 44px;
  display:grid;
  place-items:center;
  border-radius: 12px;
  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.14);
}

.social-btn img{
  width: 22px;
  height: 22px;
}

/* ===== HERO ===== */
.hero{
  width: min(1100px, 92%);
  margin: 46px auto 0;
  display:grid;
  grid-template-columns: 360px 1fr;
  gap: 48px;
  align-items:center;
}

/* Blend logo with background */
.hero-image--blend{
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  display:flex;
  justify-content:center;
}

.blend-logo{
  width: 280px;
  height: auto;
  mix-blend-mode: multiply;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,.12));
}

/* smaller title like you asked */
.hero-text h1{
  font-size: 54px;
  line-height: 1.05;
  letter-spacing: .4px;
}

.subtitle{
  font-family: "Playfair Display", serif;
  font-size: 22px;
  color: var(--muted);
  margin-top: 10px;
  margin-bottom: 18px;
}

.hero-text p{
  color: #5b6b77;
  line-height: 1.8;
  max-width: 62ch;
}

/* ===== FUN FACT (Index) ===== */
.vision-simple{
  width: min(1100px, 92%);
  margin: 58px auto 10px;
  text-align:center;
}

.vision-simple h2{
  font-size: 42px; /* smaller */
  margin-bottom: 18px;
  font-weight: 900;
}

.accent{ color: var(--accent); }

.vision-card{
  background: rgba(255,255,255,.55);
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 22px;
  box-shadow: var(--shadow-soft);
  padding: 18px;
  display:flex;
  justify-content:center;
}

.vision-image{
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 12px 26px rgba(0,0,0,.14);
  margin: 0 auto;
}

/* smaller image */
.vision-image--small{
  max-width: 680px;
}

/* References under image */
.references{
  margin-top: 12px;
  max-width: 900px;
  margin-left:auto;
  margin-right:auto;
  text-align:left;
}

.ref-title{
  font-weight: 800;
  color: #2f4252;
  margin-bottom: 6px;
}

.ref-list{
  padding-left: 18px;
  color: #5b6b77;
  line-height: 1.8;
}

.ref-list a{
  color: var(--accent);
  font-weight: 800;
}
.ref-list a:hover{ text-decoration: underline; }

/* ===== Every Perspective Matters ===== */
.perspective{
  width: min(1100px, 92%);
  margin: 56px auto 40px;
}

.perspective h2{
  font-size: 44px;     /* smaller */
  margin-bottom: 10px;
  color:#000;          /* black */
  letter-spacing:.2px;
}

.perspective .subline{
  color:#000;
  opacity:.78;
  font-size:17px;
  max-width:62ch;
}

/* GIF container */
.gif-container{
  display:grid;
  grid-template-columns: 260px 1fr;
  gap: 28px;
  align-items:center;
  background: rgba(255,255,255,.55);
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 22px;
  box-shadow: var(--shadow-soft);
  padding: 22px;
  margin-top: 18px;
}

.gif-container img{
  width: 220px;
  border-radius: 16px;
  box-shadow: 0 12px 26px rgba(0,0,0,.16);
}

.gif-text p{
  font-size: 17px;
  line-height: 1.9;
  color: #000;
  opacity:.78;
  max-width: 62ch;
}

/* ===== Heart CVD hover feature ===== */
.cvd-feature{
  margin-top: 10px;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap: 14px;
}

.heart-wrap{
  display:flex;
  align-items:center;
  gap: 12px;
}

.heart{
  width: 56px;
  height: 56px;
  cursor: pointer;
  filter: drop-shadow(0 8px 16px rgba(0,0,0,.12));
  transition: transform .15s ease;
}

.heart:hover{ transform: translateY(-1px) scale(1.02); }

.cvd-label{
  color:#000;
  opacity:.72;
  font-weight: 600;
}

/* pause button */
.pause-btn{
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,.14);
  background:#fff;
  font-weight: 800;
  cursor:pointer;
}
.pause-btn:hover{ border-color: rgba(0,0,0,.24); }

/* Apply filter to the heart via classes */
.heart.cvd-normal{ filter: none; }
.heart.cvd-protanopia{ filter: url(#cvd-protanopia); }
.heart.cvd-deuteranopia{ filter: url(#cvd-deuteranopia); }
.heart.cvd-tritanopia{ filter: url(#cvd-tritanopia); }
.heart.cvd-achromatopsia{ filter: url(#cvd-achromatopsia); }

/* ===== About + Contact PAGE LAYOUT ===== */
.page{
  width: min(1100px, 92%);
  margin: 50px auto 60px;
}

.page-title{
  text-align:center;
  font-size: 52px;  /* smaller */
  margin-top: 10px;
  margin-bottom: 18px;
}

.page-lead{
  max-width: 78ch;
  margin: 0 auto 40px;
  color: #5b6b77;
  line-height: 1.9;
  font-size: 18px;
}

.page-lead.center{ text-align:center; }

.section-title{
  font-size: 30px; /* slightly smaller */
  color: var(--accent);
  margin: 12px 0 14px;
}

.section-text{
  max-width: 78ch;
  color: #5b6b77;
  line-height: 1.9;
  margin-bottom: 30px;
}

/* About cards */
.cards{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 20px;
}

.card{
  background: rgba(255,255,255,.70);
  border: 3px solid rgba(202,161,91,.75);
  border-radius: 18px;
  padding: 26px 20px;
  box-shadow: var(--shadow-soft);
  text-align:center;
}

.card-icon{
  width: 72px;
  height: 72px;
  border-radius: 999px;
  background: rgba(202,161,91,.18);
  display:grid;
  place-items:center;
  font-size: 30px;
  margin: 0 auto 14px;
  color: #6b5528;
}

.card h3{
  font-size: 20px;
  margin-bottom: 8px;
}

.card p{
  color: #5b6b77;
  line-height: 1.7;
}

/* Contact panel */
.contact-panel{
  background: var(--nav-bg);
  border-radius: 18px;
  padding: 28px;
  box-shadow: var(--shadow);
  max-width: 950px;
  margin: 0 auto;
}

.contact-panel-title{
  color: var(--accent);
  font-size: 40px;
  margin-bottom: 8px;
}

.contact-panel-sub{
  color: rgba(245,247,250,.85);
  margin-bottom: 18px;
  line-height: 1.7;
}

.contact-form{
  display:grid;
  gap: 14px;
}

.contact-form label{
  color: #f5f7fa;
  font-weight: 800;
}

.contact-form input,
.contact-form textarea{
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 2px solid var(--accent);
  outline: none;
  font-size: 16px;
}

.contact-form textarea{
  min-height: 170px;
  resize: vertical;
}

/* ===== SIMULATOR PAGE ===== */
.sim-section{
  width: min(1100px, 92%);
  margin: 46px auto 40px;
}

.sim-section h1{ font-size: 42px; } /* smaller */

.sim-section p{
  margin-top: 10px;
  color: #5b6b77;
  line-height: 1.8;
  max-width: 70ch;
}

.sim-frame{
  margin-top: 18px;
  border-radius: 18px;
  overflow:hidden;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(0,0,0,.06);
  background: #fff;
}

.sim-frame iframe{
  width: 100%;
  height: 800px;
  border: 0;
}

/* button */
.btn{
  margin-top: 14px;
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,.12);
  background: #fff;
  cursor: pointer;
  font-weight: 700;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  transition: transform .15s ease, border-color .15s ease;
}

.btn:hover{
  transform: translateY(-1px);
  border-color: rgba(0,0,0,.22);
}

/* ===== FOOTER ===== */
.footer{
  margin-top: 70px;
  background: var(--nav-bg);
  color: #f5f7fa;
  border-top: 1px solid rgba(255,255,255,.10);
}

.footer-wrap{
  width: min(1100px, 92%);
  margin: 0 auto;
  padding: 20px 0;
  display:flex;
  flex-wrap:wrap;
  gap: 10px 22px;
  align-items:center;
  justify-content:space-between;
}

.footer-name{
  font-weight: 800;
  letter-spacing: .2px;
}

.footer-email{
  color: var(--accent);
  font-weight: 700;
}

.footer-email:hover{ text-decoration: underline; }

.footer-copy{ opacity: .9; }

/* ===== Responsive ===== */
@media (max-width: 900px){
  .hero, .gif-container{
    grid-template-columns: 1fr;
  }
  .cards{ grid-template-columns: 1fr; }
  .hero-text h1{ font-size: 44px; }
  .page-title{ font-size: 44px; }
  .nav-link{ font-size: 18px; }
}