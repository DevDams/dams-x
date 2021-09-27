<template>
  <div class="w-full h-screen text-left">
    <div class="w-9/12 h-full mx-auto px-0 md:px-6 flex flex-col items-center justify-center">
      <div class="mt-14">
        <p class="text-xl sm:text-2xl md:text-3xl xl:text-5xl">
          Je suis Aimé, développeur javascript spécialisé vue.js
        </p>
        <p class="text-xl sm:text-2xl md:text-3xl xl:text-5xl">
          Je transforme votre boule de papier en un magnifique avion en papier, en créant des trucs géniaux que les gens appellent généralement site web ou application.
        </p>
        <div class="mt-6">
          <nuxt-link to="/about/fr" class="text-xl sm:text-2xl md:text-3xl xl:text-5xl font-medium">plus...</nuxt-link>
        </div>
        <div class="contact-btn text-right mt-10">
          <nuxt-link to="/contacts/fr" class="text-xl sm:text-2xl md:text-3xl xl:text-5xl">Contacts</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'francais',
  head () {
    return {
      title: 'Portfolio - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Adams Aimé-Désiré, front-end développeur. Travaillonns ensemble et construisons de grande chose.'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
