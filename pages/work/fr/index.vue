<template>
  <div id="target" class="pt-36">
    <div data-scroll-container>
      <div data-scroll-section>
        <h1 class="intro-text w-11/12 sm:w-full mx-auto text-5xl text-center uppercase font-bold">
          Chose sur lesquelles j'ai travaillé
        </h1>
      </div>
      <div
        data-scroll-section
        class="container mx-auto flex flex-col sm:flex-row items-center h-96 mt-24"
      >
        <div class="w-11/12 sm:w-1/2 h-full bg-black"></div>
        <div class="w-11/12 sm:w-1/2 sm:pl-8 md:pl-16 mt-6 sm:mt-0 pr-6 py-4">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <a href="https://pinkix.netlify.app/">Note App.</a>
          </h2>
          <h3 class="font-semibold text-md lg:text-lg mt-4">
            #NuxtJS #CSS #localStorage #Frontend
          </h3>
          <p class="text-md lg:text-xl mt-2">
            Pinkix est une application de note construite avec NuxtJs, permettant de sauvegarder vos idées ou juste l'utiliser comme un bloc note.
          </p>
          <div class="mt-4 flex items-center justify-between sm:w-64">
            <a href="" class="font-semibold underline text-lg">Github</a>
            <a href="https://pinkix.netlify.app/" class="font-semibold underline text-lg">Explorer</a>
          </div>
        </div>
      </div>
      <div
        data-scroll-section
        class="container mx-auto flex flex-col-reverse sm:flex-row items-center h-96 mt-16 sm:mt-24"
      >
        <div class="w-11/12 sm:w-1/2 sm:pl-8 md:pl-16 mt-6 sm:mt-0 pr-6 py-4">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <a href="#">MAD Agency - clone</a>
          </h2>
          <h3 class="font-semibold text-md lg:text-lg mt-4">
            #HTML #CSS #Jacascript #Frontend
          </h3>
          <p class="text-md lg:text-xl mt-2">
            Ce projet est une replique de la page d'accueil du site web official de <a href="mad.ac" class="underline">MAD agency</a> sorti en Marsh 2021.
          </p>
          <div class="mt-4 flex items-center justify-between sm:w-64">
            <a href="" class="font-semibold underline text-lg">Github</a>
            <a href="#" class="font-semibold underline text-lg">Explorer</a>
          </div>
        </div>
        <div class="w-11/12 sm:w-1/2 h-full bg-black"></div>
      </div>
      <div
        data-scroll-section
        class="container mx-auto flex flex-col sm:flex-row items-center h-96 mt-16 sm:mt-24"
      >
        <div class="w-11/12 sm:w-1/2 h-full bg-black"></div>
        <div class="w-11/12 sm:w-1/2 sm:pl-8 md:pl-16 mt-6 sm:mt-0 pr-6 py-4">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <a href="http://hi-shared.herokuapp.com/">Hi Share</a>
          </h2>
          <h3 class="font-semibold text-md lg:text-lg mt-4">
            #NuxtJS #CSS #TailwindCss #Node #mongoDB #Cloudinary #Fullstack
          </h3>
          <p class="text-md lg:text-xl mt-2">
            Hi Share est un site de partage d'image à travers des liens, en téléchargeant vos images sur le site puis en partageant le lien généré.
          </p>
          <div class="mt-4 flex items-center justify-between sm:w-64">
            <a href="" class="font-semibold underline text-lg">Github</a>
            <a href="http://hi-shared.herokuapp.com/" class="font-semibold underline text-lg">Explorer</a>
          </div>
        </div>
      </div>
      <div
        data-scroll-section
        class="container mx-auto flex flex-col-reverse sm:flex-row items-center h-96 mt-16 sm:mt-24"
      >
        <div class="w-11/12 sm:w-1/2 sm:pl-8 md:pl-16 mt-6 sm:mt-0 pr-6 py-4">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <a href="https://muse-x.netlify.app/">Muse-X</a>
          </h2>
          <h3 class="font-semibold text-md lg:text-lg mt-4">
            #NuxtJS #CSS #TailwindCss #Node #mongoDB #Cloudinary #Fullstack
          </h3>
          <p class="text-md lg:text-xl mt-2">
            Muse-X est un site de partage de musique reposant sur la meme idée que youtube. Où les utilisateur peuvent crée des comptes et partager les musiques qui les intéressent.
          </p>
          <div class="mt-4 flex items-center justify-between sm:w-64">
            <a href="" class="font-semibold underline text-lg">Github</a>
            <a href="https://muse-x.netlify.app/" class="font-semibold underline text-lg">Explorer</a>
          </div>
        </div>
        <div class="w-11/12 sm:w-1/2 h-full bg-black"></div>
      </div>
      <div
        data-scroll-section
        class="container mx-auto flex items-center h-24 mt-16 sm:mt-32"
      ></div>
    </div>
  </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll'
export default {
  layout: 'francais',
  head () {
    return {
      title: 'Mes projets - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Retrouvez ici tout les projets personnels sur lesquels jai travaillé.'
        }
      ]
    }
  },
  mounted () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    })
    const target = document.querySelector('#target')
    scroll.scrollTo(target)
  }
}
</script>

<style scoped>
@media (max-width: 350px) {
  .intro-text {
    font-size: 36px;
  }
}
</style>
