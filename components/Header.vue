<template>
  <header class="navbar navbar-expand-lg navbar-dark px-3 sticky-top">
    <nav class="container font-monospace">
      <a class="navbar-brand mx-auto" href="https://virenbar.github.io/FTB/">
        <img height="36" width="112" src="https://www.feed-the-beast.com/_next/static/media/logo.2265aa43.svg" alt="FTB">
      </a>
      <button
        aria-controls="global-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
        data-bs-target="#navbar"
        data-bs-toggle="collapse"
        type="button">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" href="/home">
              Home
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
