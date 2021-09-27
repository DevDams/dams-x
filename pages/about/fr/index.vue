<template>
  <div id="target" class="pt-36">
    <div data-scroll-container>
      <!-- Block 1 -->
      <div data-scroll-section class="container mx-auto">
        <div class="mt-16 px-6 sm:px-0">
          <div class="title lg:pl-16">
            <h1 class="text-5xl sm:text-6xl font-bold">Parlons un peu <br> plus de moi...</h1>
          </div>
          <div class="content sm:flex sm:items-center mt-14 lg:px-16">
            <div class="bg-black hidden sm:block sm:w-2/5"></div>
            <div class="content-text 2xl:w-3/5">
              <p class="text-lg sm:text-xl font-normal">
                Je suis N'DA Adams Aimé-Désiré, j'ai 21 ans et je vis en Cote d'Ivoire. J'aime tout ce qui concerne l'art, l'animation, le design, UI et UX.
              </p>
              <p class="text-lg sm:text-xl font-normal mt-4">
                Mon aventure avec le code démarre en 2019 à l'université, où pour la première fois un ami, m'offre un aperçu de ce qui fait tous ces sites et app que nous utilisons. Depuis, j'ai arreté mes études à la fac pour me concentrer entièrement à la programmation.
              </p>
              <p class="text-lg sm:text-xl font-normal mt-4">
                Vous pouvez vous demander pourquoi j'ai quitté l'université aussi facilement; la réponse est simple : Parce que j'ai découvert que j'aimais le code plus que tout.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Block 2 -->
      <div data-scroll-section class="container mx-auto">
        <div class="block mt-28 sm:mt-36 px-6 sm:px-0">
          <div class="title sm:flex sm:items-center">
            <div class="hidden sm:block sm:w-1/5 md:w-3/5 xl:w-2/4"></div>
            <h1 class="text-5xl sm:text-6xl font-bold">Quelles sont mes<br> compétences ?</h1>
          </div>
          <div class="content flex items-center mt-14 lg:px-16">
              <div class="content-text md:pr-16 mdm:pr-32 2xl:pr-0 2xl:w-3/5">
              <p class="text-lg sm:text-xl font-normal">
                Ayant commencé l'apprentissage de la programmation en autodidacte, j'ai acquis des compétences que j'ai approfondis au fil des <nuxt-link to="/work/fr" class="underline">projets sur lesquels j'ai travaillé.</nuxt-link>
                Aussi, mon passage <a href="https://nan.ci" class="underline font-medium">NaN</a>, qui est une école de formation à la programmation, a été quelque chose de vraiment utile dans mon apprentissage.
              </p>
              <h1 class="text-2xl sm:text-3xl font-semibold mt-4">
                Les compétences que j'ai
              </h1>
              <p class="text-lg sm:text-xl font-medium mt-2">
                Front-end : <span class="capitalize font-normal">html css tailwindcss vue.js nuxtjs react</span>
              </p>
              <p class="text-lg sm:text-xl font-medium mt-2">
                Back-end : <span class="capitalize font-normal">javascript nodejs expressjs mongoDB</span>
              </p>
              <p class="text-lg sm:text-xl font-medium mt-2">
                Autres : <span class="capitalize font-normal">Ux/Ui design adobe ['Xd', 'Illustrator', 'Photoshop']</span>
              </p>
            </div>
            <div class="bg-black hidden sm:block sm:w-2/5"></div>
          </div>
        </div>
      </div>
      <!-- Block 3 -->
      <div data-scroll-section class="container mx-auto">
        <div class="block mt-28 sm:mt-36 sm:pl-10 px-6 sm:px-0 md:pl-16 lg:pl-16 xl:pl-24 xl:pl-32">
          <div class="title flex items-center">
            <h1 class="text-5xl sm:text-6xl font-bold lg:pl-16">Mes centres d'intérets</h1>
          </div>
          <div class="content mt-10 lg:px-16">
            <div class="content-text md:w-3/5">
              <p class="text-lg sm:text-xl font-normal">
                En plus du développement, j'ai un penchant pour certains domaines de l'informatique tels que : la modélisation 3D, le design, l'intelligence artificielle. J'aime aussi la biologie et les animaux, spécialement les chats. Je passe la plupart de mon temps libre à jouer à des jeux vidéos, écrire ou lire. Et quand je le peux, je cuisine, juste pour le fun.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Block 3 -->
      <div data-scroll-section class="container mx-auto">
        <div class="bottom-link mt-28 sm:mt-36 px-6 sm:px-0">
          <p class="text-center text-xl sm:text-3xl font-medium uppercase">Près à partir ?<br><nuxt-link to="/contacts"><span class="underline text-center">Contactez moi</span></nuxt-link></p>
        </div>
      </div>
      <div
        data-scroll-section
        class="footer container mx-auto h-24 mt-10 sm:mt-16 sm:32 md:mt-64"
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
      title: 'A propos - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Adams Aimé-Désiré, front-end développeur. Travaillonns ensemble et construisons de grande chose.'
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
@media (max-width: 360px) {
  .title h1 {
    font-size: 36px;
  }

  .block {
    margin-top: 50px;
  }

  .content {
    margin-top: 30px;
  }

  .bottom-link {
    margin-top: 80px;
  }
}
</style>
