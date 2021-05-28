<template>
  <div id="target">
    <div data-scroll-container>
      <div class="container mx-auto h-screen flex items-center justify-center">
        <p class="text-3xl">
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

</style>
