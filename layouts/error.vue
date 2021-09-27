<template>
  <div>
    <div class="error-content w-screen h-screen text-center flex flex-col items-center justify-center">
      <img class="white" src="~/assets/icons/404.svg" alt="error svg">
      <img class="black hidden" src="~/assets/icons/404-white.svg" alt="error svg">
      <p class="text-3xl font-medium mt-4">Oupsss... Enmpty || Vide</p>
      <div class="home mt-8">
        <nuxt-link to="/fr">
          <button class="relative text-2xl uppercase underline font-bold">
            Home
          </button>
        </nuxt-link>
      </div>
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

 a button {
   outline: none;
 }

.error-content img {
  width: 180px;
  margin-left: -7px;
}

@media (max-width: 455px) {
  .error-content p {
    font-size: 24px;
  }
}
</style>
