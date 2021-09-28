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
          content: 'Adams Aimé-Désiré, javascript front-end developer. Let\'s wrok together and build awesome stuff'
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
          content: 'https://damsx.netlify.app/en'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Portfolio - Adams Aimé-Désiré'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Adams Aimé-Désiré, javascript front-end developer. Let\'s wrok together and build awesome stuff'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://res.cloudinary.com/dams9ix/image/upload/v1632838794/logo_kxkl24.png'
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
          content: 'https://damsx.netlify.app/en'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Portfolio - Adams Aimé-Désiré'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Adams Aimé-Désiré, javascript front-end developer. Let\'s wrok together and build awesome stuff'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://res.cloudinary.com/dams9ix/image/upload/v1632838794/logo_kxkl24.png'
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
