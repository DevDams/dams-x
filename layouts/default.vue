<template>
  <div class="">
    <Nuxt />
    <ToggleButton class="toggleBtn fixed bottom-16 left-16 transform" />
  </div>
</template>

<script>
export default {}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  transition: .3s all ease-out;
}

body.dark {
  background-color: #131313;
  color: #efefef;
}

@media (max-width: 768px) {
  .toggleBtn {
    right: 8px;
  }
}
</style>
