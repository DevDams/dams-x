<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section class="mt-36">
        <h1 class="text-5xl text-center uppercase font-bold">Thing that i worked on</h1>
      </div>
      <div data-scroll-section class="container mx-auto flex items-center h-96 mt-24">
        <div class="w-1/2 h-full bg-black"></div>
        <div class="w-1/2 pl-6 pr-16 py-4">
          <h2 class="text-5xl font-bold">
            <a href="#">Note App.</a>
          </h2>
          <h3 class="font-semibold text-lg mt-4">#NuxtJS #CSS #localStorage #Frontend</h3>
          <p class="text-xl mt-2">Pinkix is a note app build with NuxtJs that allow to save your idea or just use it like a block note.</p>
        </div>
      </div>
      <div data-scroll-section class="container mx-auto flex items-center h-96 mt-24">
        <div class="w-1/2 pl-16 pr-6 py-4">
          <h2 class="text-5xl font-bold">
            <a href="#">MAD Agency - clone</a>
          </h2>
          <h3 class="font-semibold text-lg mt-4">#HTML #CSS #Jacascript #Frontend</h3>
          <p class="text-xl mt-2">This project is a clone of the home page of the MAD agency official website released in Marsh 2021.</p>
        </div>
        <div class="w-1/2 h-full bg-black"></div>
      </div>
      <div data-scroll-section class="container mx-auto flex items-center h-96 mt-24">
        <div class="w-1/2 h-full bg-black"></div>
        <div class="w-1/2 pl-16 pr-6 py-4">
          <h2 class="text-5xl font-bold">
            <a href="#">Hi Share</a>
          </h2>
          <h3 class="font-semibold text-lg mt-4">#NuxtJS #CSS #TailwindCss #Node #mongoDB #Cloudinary #Fullstack</h3>
          <p class="text-xl mt-2">Hi Share is a website for sharing image files through a link by uploading them to the site and then sharing the generated link.</p>
        </div>
      </div>
      <div data-scroll-section class="container mx-auto flex items-center h-96 mt-24">
        <div class="w-1/2 pl-16 pr-6 py-4">
          <h2 class="text-5xl font-bold">
            <a href="#">Muse-X</a>
          </h2>
          <h3 class="font-semibold text-lg mt-4">#NuxtJS #CSS #TailwindCss #Node #mongoDB #Cloudinary #Fullstack</h3>
          <p class="text-xl mt-2">Muse-X is a music sharing website based on the same idea as youtube, where users create an account and share the music that interests them.</p>
        </div>
        <div class="w-1/2 h-full bg-black"></div>
      </div>
      <div data-scroll-section class="container mx-auto flex items-center h-24 mt-32"></div>
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
</style>
