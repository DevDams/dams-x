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
          <p class="text-2xl font-medium">
            Take a look at some of the thing i've done with passion
          </p>
        </div>
        <div class="home-project-area mt-20">
          <div class="area-1 flex">
            <div class="project-title w-1/2 flex">
              <h3 class="text-lg font-medium uppercase ml-32">MAD.AC agency website clone</h3>
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
              <img class="pr-16" src="~/assets/images/mad_.png" alt="">
            </div>
          </div>
          <div class="area-2 mt-24 flex">
            <div class="project-image w-1/2">
              <img class="pl-16" src="~/assets/images/pinky_.png" alt="">
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
              <h3 class="text-lg font-medium uppercase">Bloc note app</h3>
            </div>
          </div>
          <div class="home-project-more text-center mt-28">
            <nuxt-link to="/work" class="relative px-16 py-6 text-black font-bold uppercase">
              See more
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- Contact section -->
      <div data-scroll-section class="home relative container mx-auto w-screen">
        <div class="home-contact-title mt-20">
          <h1 class="text-6xl font-black uppercase pl-20">Let's get in touch</h1>
        </div>
        <div class="home-contact-eamil text-center mt-28">
          <p class="text-2xl uppercase">Email :</p>
          <p class="text-6xl font-semibold mt-6">
            <a href="mailto:ad.aimedesire@gmail.com">
              ad.aimedesire@gmail.com
            </a>
          </p>
        </div>
        <div class="home-contact-eamil text-center mt-16">
          <p class="text-2xl uppercase">Phone :</p>
          <p class="text-6xl font-semibold mt-6">
            <a href="tel:+2250778812111">+225 07 78 81 2111</a>
          </p>
        </div>
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
  color: #e0e0e0;
}

body.dark .home-project-more a::after, body.dark .home-project-more a::before {
  content: '';
  position: absolute;
  border: 2px solid #e0e0e0;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  left: 0;
  bottom: 0;
  z-index: -1;
  transition: transform .3s ease;
}

body.dark .home-project-more a:hover::after {
  transform: translate(-4px, -4px);
}

body.dark .home-project-more a:hover::before {
  transform: translate(4px, 4px);
}

h1 {
  font-family: 'Krona One', sans-serif;
}

p {
  font-family: 'Lato', sans-serif;
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

.home-project-more a::after, .home-project-more a::before {
  content: '';
  position: absolute;
  border: 2px solid black;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  left: 0;
  bottom: 0;
  z-index: -1;
  transition: transform .3s ease;
}

.home-project-more a:hover::after {
  transform: translate(-4px, -4px);
}

.home-project-more a:hover::before {
  transform: translate(4px, 4px);
}

.home-contact-title a {
  font-family: 'Krona One', sans-serif;
}
</style>
