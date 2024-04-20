<script setup lang="ts">
const L = useLanyard({ method: "ws", id: "132479201470185472" });
</script>
<template>
  <li>Status: {{ L?.discord_status }}</li>
  <li>Activity: {{ L?.activities[0]?.name }}</li>
</template>

