<template>
  <div>
    <div class="error-content w-screen h-screen flex flex-col items-center justify-center">
      <img class="white" src="~/assets/icons/404.svg" alt="error svg">
      <img class="black hidden" src="~/assets/icons/404-white.svg" alt="error svg">
      <p class="text-4xl font-semibold mt-6 sm:mt-14 mb-6">Oupsss... sorry page not found</p>
      <nuxt-link to="/">
        <button class="relative text-lg font-bold px-10 py-2 bg-black text-white rounded-lg shadow-lg">
          Go home
        </button>
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

body.dark img.white {
  display: none;
}

body.dark img.black {
  display: block;
}

body.dark a button {
  background: rgb(245, 245, 245);
  color: black;
}

.error-content img {
  width: 200px;
  margin-left: -10px;
}

@media (max-width: 455px) {
  .error-content p {
    font-size: 24px;
  }
}
</style>
