<script setup>
useHead({
  bodyAttrs: {
    class: "end",
  },
});
</script>
<template>
  <div>
    The End background test
  </div>
</template>
<style>
/* Source: https://rebane2001.com/mapartcraft/supporters/ */
.end {
  background: url("~/assets/image/end/bg1.png"), url("~/assets/image/end/bg1.png"), url("~/assets/image/end/bg2.png");
  /* background-position: left top, left top; */
  /* background-repeat: repeat, repeat, repeat; */
  background-size: 512px, 768px, 32px;
  /* background-color: black; */
  background-blend-mode: screen;
  animation-name: the_end;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  /* overflow: scroll;
  overflow-x: hidden; */
}

@keyframes the_end {
  0% {
    background-position: -512px 0, -768px 0, -256px -128px;
  }

  100% {
    background-position: 0 0, 0 0, 0 0;
  }
}
</style>
