<template>
  <div id="target">
    <div data-scroll-container></div>
  </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll'
export default {
  head () {
    return {
      title: 'Contact me - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Send me a simple message. It can be just to say hello or leave me a cute motivation message'
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
