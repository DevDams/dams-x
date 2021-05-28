<template>
  <div id="target">
    <div data-scroll-container>
      <div class="container mx-auto h-screen flex flex-col items-center justify-center">
        <img class="file-error" src="~/assets/icons/file-error.svg" alt="">
        <img class="file-error-2 hidden" src="~/assets/icons/file-error-2.svg" alt="">
        <p class="text-3xl mt-6">
          Blog posts will be available soon...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll'
export default {
  head () {
    return {
      title: 'Blog - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Articles, tips about web, design, and may be everything cool about internet'
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
body.dark .file-error {
  display: none;
}

body.dark .file-error-2 {
  display: block;
}

img {
  width: 70px;
}
</style>
