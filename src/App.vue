<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/logo.png" width="90" height="90" />

    <div class="wrapper">
     

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <hr />

  <footer>
    <div class="footer-content">
      <p >© 2023 Dein Unternehmen. Alle Rechte vorbehalten.</p>
      <nav>
        <RouterLink to="/Impressum">Impressum</RouterLink>
        
        <RouterLink to="/Datenschutz">Datenschutz</RouterLink>
      </nav>
    </div>
  </footer>

</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
footer {
    background-color: #ffffff00;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 1rem;
  }

  .footer-content {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer nav a {
    margin: 0 15px;
    color: rgb(4, 130, 58);
    text-decoration: none;
  }

  footer nav a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
  header, footer {
    padding: 1rem; /* Reduce padding */
  }

  nav {
    /* Adjust navigation for smaller screens */
    margin-top: 1rem;
    font-size: 14px; /* Smaller font size */
  }

  .logo {
    width: 70px; /* Smaller logo for mobile */
    height: 70px;
  }
}

@media (max-width: 480px) {
  
  nav {
    font-size: 12px; /*smaller font size */
  }
}
</style>
