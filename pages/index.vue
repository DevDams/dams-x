<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section class="relative landing mt-20 container mx-auto">
        <div class="landing-name mt-56">
          <h1 class="text-myblack uppercase font-bold">Adams <br> Aimé-Désiré</h1>
        </div>
        <div class="landing-para w-2/3 mt-10 ml-32">
          <p class="text-4xl uppercase">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat odio aliquid blanditiis. Ratione ipsa, doloremque veritatis quam veniam laboriosam accusamus molestias ut a, debitis earum voluptates non officiis recusandae doloribus.
          </p>
        </div>
        <div class="landing-button absolute mt-20 right-20">
          <nuxt-link to="/work" class="text-3xl uppercase flex">
            My work
            <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 200.981 200.981"
            style="enable-background:new 0 0 200.981 200.981;"
            xml:space="preserve">
              <g>
                <g>
                  <g>
                    <polygon
                    style="fill:#010002;"
                    points="17.511,10.264 129.068,10.264 129.068,0 0.007,0 0.007,129.068 10.257,129.068
                    10.271,17.515 193.72,200.981 200.974,193.727"/>
                  </g>
                </g>
              </g>
            </svg>
          </nuxt-link>
        </div>
      </div>
      <div data-scroll-section class="home container mx-auto h-screen w-screen">
        <h1 class="text-myblack uppercase">Adams <br> Aimé-Désiré</h1>
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
  height: 820px;
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

.landing-button svg {
  width: 30px;
  transform: rotate(90deg);
}
</style>
