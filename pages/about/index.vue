<template>
  <div id="target" class="pt-36">
    <div data-scroll-container>
      <!-- Block 1 -->
      <div data-scroll-section class="container mx-auto">
        <div class="mt-16 px-6 sm:px-0">
          <div class="title lg:pl-16">
            <h1 class="text-5xl sm:text-6xl font-bold">Let's talk a little more <br> about me...</h1>
          </div>
          <div class="content sm:flex sm:items-center mt-14 lg:px-16">
            <div class="bg-black hidden sm:block sm:w-2/5"></div>
            <div class="content-text 2xl:w-3/5">
              <p class="text-lg sm:text-xl font-normal">
                I'm N'DA Adams Aimé-Désiré, i'm 21 and I live in Ivory Cost. I love everything about art, animation, design, UI and UX.
              </p>
              <p class="text-lg sm:text-xl font-normal mt-4">
                My travel with the code starts in 2019 at the university where a friend, for the first time, show me what makes all thise website and application we use.
                Since that, I stopped my study at the campus to focus myself on programming.
              </p>
              <p class="text-lg sm:text-xl font-normal mt-4">
                You may be asking you why I left the university as easily, the answer is simple; Because I discover that I love code more than everything else.
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
            <h1 class="text-5xl sm:text-6xl font-bold">What are the <br> competencies I have ?</h1>
          </div>
          <div class="content flex items-center mt-14 lg:px-16">
            <div class="content-text md:pr-16 md:pr-32 2xl:pr-0 2xl:w-3/5">
              <p class="text-lg sm:text-xl font-normal">
                Having started learning programming on my own, Iacquired skills that I have deepened through <nuxt-link to="/work" class="underline">the projects I have worked on.</nuxt-link>
                Also, my move to NaN, which is a code training school, was somthing very useful in my progress and my learning.
              </p>
              <h1 class="text-2xl sm:text-3xl font-semibold mt-4">
                Here are the skills I have
              </h1>
              <p class="text-lg sm:text-xl font-medium mt-2">
                Front-end : <span class="capitalize font-normal">html css tailwindcss vue.js nuxtjs react</span>
              </p>
              <p class="text-lg sm:text-xl font-medium mt-2">
                Back-end : <span class="capitalize font-normal">javascript nodejs expressjs mongoDB</span>
              </p>
              <p class="text-lg sm:text-xl font-medium mt-2">
                Others : <span class="capitalize font-normal">Ux/Ui design adobe ['Xd', 'Illustrator', 'Photoshop']</span>
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
            <h1 class="text-5xl sm:text-6xl font-bold lg:pl-16">My interests</h1>
          </div>
          <div class="content mt-10 lg:px-16">
            <div class="content-text md:w-3/5">
              <p class="text-lg sm:text-xl font-normal">
                Although I chose to be a developer, I am also attracted to areas unrelated to programming. I have a real love for biology and animals, especially cats. I spend most of my free time playing games, writing, or reading. And when I can, I cook just for fun
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Block 3 -->
      <div data-scroll-section class="container mx-auto">
        <div class="bottom-link mt-28 sm:mt-36 px-6 sm:px-0">
          <p class="text-center text-xl sm:text-3xl font-medium uppercase">Ready to go ? <nuxt-link to="/contacts"><span class="underline">Contact me</span></nuxt-link></p>
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
  head () {
    return {
      title: 'About - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Adams Aimé-Désiré, front-end developer. Let\'s wrok together and build awesome stuff'
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
