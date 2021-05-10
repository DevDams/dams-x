<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section class=".home container mx-auto h-screen w-screen">
        <h1 class="text-6xl text-green-600">Hello</h1>
        <h1>Bonjour about</h1>
      </div>
    </div>
  </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll'
export default {
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
.home {
  font-family: 'Krona One', sans-serif;
}
</style>
