<template>
  <div class="noise-bg">
    <div class="bg-color">
      <Navbar />
      <Nuxt />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
html {
  /* font-family: 'Krona One', sans-serif;
  font-family: 'Lato', sans-serif; */
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
.noise-bg::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: .04;
  z-index: 1000;
  pointer-events: none;
  background-image: url(./assets/bg-images/noise.gif);
}
</style>
