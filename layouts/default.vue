<template>
  <div class="noise-bg">
    <div class="bg-color">
      <Navbar class="navbar fixed top-0" />
      <Nuxt />
      <ToggleButton class="toggleBtn fixed top-24 right-10 transform rotate-90" />
    </div>
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
  color: #c3c3c3;
}

@media (max-width: 768px) {
  .toggleBtn {
    right: 8px;
  }
}
</style>
