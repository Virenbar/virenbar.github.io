<template>
  <div class="space__stars">
    <div class="space__twinkling">
      <div class="container">
        The Space background test
      </div>
    </div>
  </div>
</template>
<style scoped>
.space__stars,
.space__twinkling {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block
}

.space__stars {
  background: url("~/assets/image/space/stars.png")top center;
  z-index: 0
}

.space__twinkling {
  background: url("~/assets/image/space/twinkling.png");
  animation: 10s twinkle infinite;
  animation-direction: alternate-reverse;
  animation-timing-function: linear
}

@keyframes twinkle {
  0% {
    background-position: 0
  }

  to {
    background-position: -100px 0
  }
}
</style>
