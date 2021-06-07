<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section>
        <div class="relative container mx-auto mt-20">
          <div class="intro_title mt-48">
            <h1 class="text-6xl font-bold uppercase">Select Work</h1>
            <p class="mt-4 pl-12">
              These are some of my recent personal project. <br>
              always subject to change.
            </p>
          </div>
        </div>
      </div>
    </div>
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
