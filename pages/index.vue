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
          content: 'Adams Aimé-Désiré, javascript front-end développeur. Travaillonns ensemble et construisons de grande chose.'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@nuxt_js'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@dams9ix'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://damsx.netlify.app/'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Portfolio - Adams Aimé-Désiré'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Adams Aimé-Désiré, javascript front-end développeur. Travaillonns ensemble et construisons de grande chose.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://damsx.netlify.app/_nuxt/img/big-logo.053ce4c.png'
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Adams Aimé-Désiré logo'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Portfolio - Adams Aimé-Désiré'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://damsx.netlify.app/'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Portfolio - Adams Aimé-Désiré'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Adams Aimé-Désiré, javascript front-end développeur. Travaillonns ensemble et construisons de grande chose.'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://damsx.netlify.app/_nuxt/img/big-logo.053ce4c.png'
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: 'Adams Aimé-Désiré logo'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
