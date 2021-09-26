<template>
  <div class="w-full h-screen text-left">
    <div class="w-9/12 h-full mx-auto px-0 md:px-6 flex flex-col items-center justify-center">
      <div class="mt-10">
        <p class="text-xl sm:text-2xl md:text-3xl xl:text-5xl">
          I'm Aimé, a javascript developer specialized in vue.js
        </p>
        <p class="text-xl sm:text-2xl md:text-3xl xl:text-5xl">
          I turn your paper ball into a beautiful paper plane, creating awesome
          stuff that people usually call website, applications or platforms.
        </p>
        <div class="mt-6">
          <nuxt-link to="/about/en" class="text-xl sm:text-2xl md:text-3xl xl:text-5xl font-medium">more...</nuxt-link>
        </div>
        <div class="contact-btn text-right mt-10">
          <nuxt-link to="/contacts/en" class="text-xl sm:text-2xl md:text-3xl xl:text-5xl">Contacts</nuxt-link>
        </div>
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
          content:
            'Adams Aimé-Désiré, front-end developer. Let\'s wrok together and build awesome stuff'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
