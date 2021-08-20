<template>
<<<<<<< HEAD
  <div class="">
    <Nuxt />
    <ToggleButton class="toggleBtn fixed bottom-16 left-16 transform" />
=======
  <div class="noise-bg">
    <div class="bg-color">
      <Navbar class="navbar fixed top-0 z-20" />
      <Nuxt />
      <ToggleButton class="toggleBtn fixed bottom-10 left-24 transform" />
    </div>
>>>>>>> b38428cadb1dd8a0d68b8a6afc12173b296caccf
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
<<<<<<< HEAD
  color: #efefef;
=======
  color: #fff;
}

body.dark .navbar {
  background-color: #131313;
>>>>>>> b38428cadb1dd8a0d68b8a6afc12173b296caccf
}

@media (max-width: 768px) {
  .toggleBtn {
    right: 8px;
  }
}
</style>
