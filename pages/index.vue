<template>
  <div id="target">
    <div data-scroll-container>
<<<<<<< HEAD
      <div data-scroll-section class=".home container mx-auto h-screen w-screen">
=======
      <div data-scroll-section class="relative landing mt-20 container mx-auto h-screen w-screen">
        <div class="landing-name mt-64">
          <h1 class="text-myblack uppercase font-bold">Adams <br> Aimé-Désiré</h1>
        </div>
        <div class="landing-para w-2/3 mt-10 ml-32">
          <p class="text-4xl uppercase">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat odio aliquid blanditiis. Ratione ipsa, doloremque veritatis quam veniam laboriosam accusamus molestias ut a, debitis earum voluptates non officiis recusandae doloribus.
          </p>
        </div>
        <div class="landing-button absolute mt-20 right-20">
          <nuxt-link to="/work" class="text-3xl uppercase">
            My work
            <img src="~/assets/icons/arrow.svg" alt="arrow svg" class="inline">
          </nuxt-link>
        </div>
      </div>
      <div data-scroll-section class="home container mx-auto h-screen w-screen">
        <h1 class="text-myblack uppercase">Adams <br> Aimé-Désiré</h1>
>>>>>>> 1af91baecbf1194ae4837879b5b49860210418e7
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
.landing {
  border-bottom: 1px solid black;
}

h1 {
  font-family: 'Krona One', sans-serif;
  font-size: 135px;
  line-height: 1.2em;
}

p {
  font-family: 'Lato', sans-serif;
  font-weight: 500;
}

.landing-button img {
  width: 40px;
  transform: rotate(90deg);
}
</style>
