<template>
  <div>
    <Favicon />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: unknown) => { return titleChunk ? `${titleChunk} - @Virenbar` : '@Virenbar'; },
  meta: [
    { name: 'description', content: 'The personal website of Virenbar, a .NET and TS developer living and working in Ural, Yekaterinburg.' }
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
      integrity: 'sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF',
      crossorigin: 'anonymous',
      defer: 'true'
    }, {
      src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
      integrity: 'sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p',
      crossorigin: 'anonymous',
      defer: 'true'
    }, {
      src: 'https://kit.fontawesome.com/3d652cc361.js',
      crossorigin: 'anonymous'
    }
  ]
})
</script>
