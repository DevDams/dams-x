<template>
  <div id="target" class="pt-36">
    <div data-scroll-container>
      <div data-scroll-section>
        <h1 class="intro-text w-11/12 sm:w-full mx-auto text-5xl text-center uppercase font-bold">
          Thing that i worked on
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
          <p class="text-md: lg:text-xl mt-2">
            Pinkix is a note app build with NuxtJs that allow to save your idea
            or just use it like a block note.
          </p>
          <div class="mt-4 flex items-center justify-between sm:w-64">
            <a href="" class="font-semibold underline text-lg">Github</a>
            <a href="https://pinkix.netlify.app/" class="font-semibold underline text-lg">Explore</a>
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
          <p class="text-md: lg:text-xl mt-2">
            This project is a clone of the home page of the <a href="mad.ac" class="underline">MAD agency</a> official
            website released in Marsh 2021.
          </p>
          <div class="mt-4 flex items-center justify-between sm:w-64">
            <a href="" class="font-semibold underline text-lg">Github</a>
            <a href="#" class="font-semibold underline text-lg">Explore</a>
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
          <p class="text-md: lg:text-xl mt-2">
            Hi Share is a website for sharing image files through a link by
            uploading them to the site and then sharing the generated link.
          </p>
          <div class="mt-4 flex items-center justify-between sm:w-64">
            <a href="" class="font-semibold underline text-lg">Github</a>
            <a href="http://hi-shared.herokuapp.com/" class="font-semibold underline text-lg">Explore</a>
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
          <p class="text-md: lg:text-xl mt-2">
            Muse-X is a music sharing website based on the same idea as youtube,
            where users create an account and share the music that interests
            them.
          </p>
          <div class="mt-4 flex items-center justify-between sm:w-64">
            <a href="" class="font-semibold underline text-lg">Github</a>
            <a href="https://muse-x.netlify.app/" class="font-semibold underline text-lg">Explore</a>
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
  head () {
    return {
      title: 'My work - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'See here all the awesome personal project I build'
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
