<template>
  <div class="min-vh-100 d-flex flex-column">
    <PageHeaderMini />
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
