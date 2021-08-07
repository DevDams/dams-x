<template>
  <div class="noise-bg">
    <div class="error-content w-screen h-screen flex flex-col items-center justify-center">
      <img class="white" src="~/assets/icons/404-error.svg" alt="error svg">
      <img class="black hidden" src="~/assets/icons/404-error-2.svg" alt="error svg">
      <p class="text-4xl mt-16 mb-10">Oupsss... page not found</p>
      <nuxt-link to="/" class="relative text-lg uppercase px-10 py-3">
        Go home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Error - Page not found',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Oh you find a broken link... Sorry there is nothing to see here.'
        }
      ]
    }
  }
}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body.dark .error-content a::after, body.dark .error-content a::before {
  content: '';
  position: absolute;
  border: 2px solid white;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  left: 0;
  bottom: 0;
  z-index: -1;
  transition: transform .3s ease;
}

body.dark img.white {
  display: none;
}

body.dark img.black {
  display: block;
}

.error-content img {
  width: 200px;
}

.error-content a::after, .error-content a::before {
  content: '';
  position: absolute;
  border: 2px solid black;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  left: 0;
  bottom: 0;
  z-index: -1;
  transition: transform .3s ease;
}

.error-content a:hover::after {
  transform: translate(-6px, -6px);
}

@media (max-width: 768px) {
  .error-content img {
    width: 120px;
  }
}

@media (max-width: 455px) {
  .error-content p {
    font-size: 24px;
  }
}
</style>
