<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="title">
    <h1>XeanutsP</h1>
    <h3>I did this just in case I'm too lazy adding my social profiles</h3>
  </div>

  <RouterView></RouterView>
</template>

<style>
@media (prefers-color-scheme: dark) {
  .title h1 {
    background-image: linear-gradient(325deg, rgba(0, 0, 28, 1) 0%, rgba(96, 250, 255, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}

.title {
  display: flexbox;
  margin: 1vw;
}
.title h1 {
  font-size: 8vw;
  margin: 0;
  padding-bottom: 0cm;
}
.title h3 {
  font-size: 1.2vw;
  margin: 0;
}
</style>
