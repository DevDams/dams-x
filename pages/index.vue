<template>
  <div>
    <div class="home-content relative w-full h-screen flex flex-col items-center justify-center">
      <div class="content container mx-auto">
        <p class="font-semibold text-4xl 2xl:text-5xl leading-snug">
          Hi, I'm Aimé ! A javascript developer specialized in vue.js/NuxtJs.
          I turn your paper ball into a beautiful paper plane <img src="~/assets/icons/plane-black.svg" alt="paper plane icon" class="inline w-14"> Are you ready ? <br>
        </p>
        <p class="mt-6 font-semibold text-4xl 2xl:text-5xl leading-snug">
          Let's <nuxt-link to="/contacts"><span class="underline">work together</span></nuxt-link> or learn more <nuxt-link to="/contacts"><span class="underline">abut me</span></nuxt-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Portfolio - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Adams Aimé-Désiré, front-end developer. Let\'s wrok together and build awesome stuff'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content {
  width: 850px;
}

@media (min-width: 1536px) {
  .content {
    width: 930px;
  }
}
</style>
