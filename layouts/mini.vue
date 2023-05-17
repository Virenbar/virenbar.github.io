<template>
  <div class="min-vh-100 d-flex flex-column">
    <header class="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
      <nav class="container font-monospace">
        <NuxtLink class="navbar-brand" to="/">
          <img alt="" class="d-inline-block align-top rounded-circle" height="32" src="https://gravatar.com/avatar/e405f42d63f70e88dec627087aec4318" width="32">
          {{}}
          <Gradient text="@Virenbar" />
        </NuxtLink>
      </nav>
    </header>
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <div class="scanlines" />
      <div class="scanline" />
      <div class="container p-3">
        <slot />
      </div>
    </main>
    <PageFooter />
  </div>
</template>
