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
          <nuxt-link to="/about" class="text-3xl uppercase flex">
            About me
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
          <nuxt-link to="/contact" class="text-3xl uppercase flex">
            Contact me
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
      <div data-scroll-section class="home relative container mx-auto w-screen">
        <div class="home-project ml-80 mt-32 w-3/4">
          <h1 class="text-myblack text-6xl uppercase text-right">I love build or rebuild thing with code</h1>
        </div>
        <div class="home-para text-right mr-16 mt-8">
          <p class="text-2xl">
            Take a look at some of the thing i've done with passion
          </p>
        </div>
        <div class="home-project-area mt-20">
          <div class="area-1 flex">
            <div class="project-title w-1/2 flex">
              <h3 class="text-lg uppercase ml-32">MAD.AC agency website clone</h3>
              <svg
              class="ml-3 -mt-2"
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
            </div>
            <div class="project-image w-1/2">
              <img class="pr-16" src="~/assets/images/mad.png" alt="">
            </div>
          </div>
          <div class="area-2 mt-24 flex">
            <div class="project-image w-1/2">
              <img class="pl-16" src="~/assets/images/pinky.png" alt="">
            </div>
            <div class="project-title w-1/2 flex">
              <svg
              class="ml-64 -mt-2"
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
              <h3 class="text-lg uppercase">Bloc note app</h3>
            </div>
          </div>
          <div class="home-project-more text-center mt-28">
            <nuxt-link to="/work" class="px-16 py-6 bg-myblack text-white font-medium uppercase">
              See more
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- Contact section -->
      <div data-scroll-section class="home relative container mx-auto w-screen">
        <h1>Contact me fast</h1>
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
body.dark .landing {
  border-bottom: 1px solid white;
}

body.dark .home {
  border-bottom: 1px solid white;
}

body.dark .home-project-more a {
  background-color: #e0e0e0;
  color: black;
}

h1 {
  font-family: 'Krona One', sans-serif;
}

p {
  font-family: 'Lato', sans-serif;
  font-weight: 500;
}

.landing {
  height: 850px;
  border-bottom: 1px solid black;
}

.landing-name h1 {
  font-size: 135px;
  line-height: 1.2em;
}

.landing-button svg {
  width: 30px;
  transform: rotate(90deg);
  margin-left: 10px;
}

.home {
  height: 1300px;
  border-bottom: 1px solid black;
}

.home-project-area .area-1 .project-title svg {
  width: 30px;
  height: 30px;
  transform: rotate(180deg);
}

.home-project-area .area-2 .project-title svg {
  width: 30px;
  height: 30px;
  transform: rotate(-90deg);
}
</style>
