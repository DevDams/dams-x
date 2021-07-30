<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section>
      </div>
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
