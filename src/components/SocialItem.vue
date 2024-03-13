<!-- The template for Social Items.
Created by Xea Xeanuts -->

<template>
  <div class="socialBlock">
    <div class="socialProfile">
      <slot name="profileImg"></slot>
    </div>
    <div class="socialText">
      <slot name="socialName"></slot>
      <slot name="accName"></slot>
    </div>
  </div>
</template>

<style>
@media (prefers-color-scheme: light) {
  .socialBlock {
    background-color: white;
  }
}

@media (prefers-color-scheme: dark) {
  .socialBlock {
    background-color: #292929;
    opacity: 0.8;
  }
  .socialText {
    color: white;
  }
}

.socialBlock {
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border-radius: 3vw;
  min-width: 16vw;
  height: 60px;
  align-self: center;
}

.socialProfile {
  color: #000;
  width: fit-content;
  margin: 0%;
  top: 50%;
}
.socialText {
  width: 80%;
}

</style>
