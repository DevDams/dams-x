<template>
  <div id="target">
    <!-- Home intro -->
    <div data-scroll-container>
      <div data-scroll-section class="relative landing mt-20 container mx-auto">
        <div class="landing-name mt-56">
          <h1 class="text-myblack uppercase font-black">Adams <br class="banane"> Aimé-Désiré</h1>
        </div>
        <div class="landing-para mt-10 sm:ml-6 md:ml-32 md:w-2/3">
          <p class="lg:text-3xl xl:text-4xl uppercase">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat odio aliquid blanditiis. Ratione ipsa, doloremque veritatis quam veniam laboriosam accusamus molestias ut a, debitis earum voluptates non officiis recusandae doloribus.
          </p>
        </div>
        <div class="landing-button absolute mt-20 sm:right-0 md:right-20">
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
      <!-- Home project section -->
      <div data-scroll-section class="home relative container mx-auto sm:w-screen">
        <div class="home-project mt-20 sm:mt-20 md:w-full md:mt-32 lg:ml-64 xl:ml-80 lg:w-3/4">
          <h1 class="text-myblack text-4xl sm:text-5xl md:text-6xl font-black uppercase text-right">I love build or rebuild thing with code</h1>
        </div>
        <div class="home-para text-right xl:mr-16 mt-8">
          <p class="text-2xl font-medium">
            Take a look at some of the thing i've done with passion
          </p>
        </div>
        <div class="home-project-area mt-20">
          <div class="area-1 flex flex-col sm:flex-row">
            <div class="project-title md:w-1/2 flex">
              <h3 class="text-2xl md:text-lg font-medium uppercase lg:ml-32">MAD.AC agency website clone</h3>
              <svg
              class="hidden sm:hidden md:block md:ml-3 -mt-2"
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
            <div class="project-image mt-4 sm:w-2/3 md:w-1/2">
              <img class="md:pr-16" src="~/assets/images/mad.png" alt="Mad agence website clone capture">
            </div>
          </div>
          <div class="area-2 mt-24 flex flex-col-reverse sm:flex-row">
            <div class="project-image mt-4 sm:w-2/3 md:w-1/2">
              <img class="md:pl-16" src="~/assets/images/pinky.png" alt="Pinky bloc note app capture">
            </div>
            <div class="project-title w-1/2 flex">
              <svg
              class="hidden sm:hidden md:block md:ml-36 lg:ml-64 -mt-2"
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
              <h3 class="text-2xl md:text-lg font-medium uppercase sm:ml-28 md:ml-0">Bloc note app</h3>
            </div>
          </div>
          <div class="home-project-more relative text-center mt-28">
            <nuxt-link to="/work" class="relative px-16 py-6 text-myblack font-semibold uppercase">
              See more
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- Contact section -->
      <div data-scroll-section class="home-contact relative container mx-auto sm:w-screen">
        <div class="home-contact-title mt-16 sm:mt-24 md:mt-32">
          <h1 class="text-5xl sm:text-6xl uppercase font-bold lg:pl-10 xl:pl-20 tracking-tighter">let's get in touch</h1>
          <p class="pt-8 font-medium text-xl sm:font-medium sm:text-xl sm:pt-8 md:text-2xl md:pt-16 lg:pl-10 lg:pt-24 xl:pl-20">
            You have a project ? <br> I will be happy to discuss it with you.
          </p>
        </div>
        <div class="home-contact-address mt-16 sm:mt-16 md:mt-28 lg:mt-32 text-center">
          <p class="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mt-4">
            <a href="mailto:ad.aimedesire@gmail.com">
              ad.aimedesire@gmail.com
            </a>
          </p>
          <p class="font-medium text-4xl mt-3 sm:text-4xl sm:mt-3 md:text-5xl md:mt-9 lg:text-6xl">
            <a href="tel:+2250778812111">
              +225 07 78 81 2111
            </a>
          </p>
        </div>
        <div class="home-contact-button absolute bottom-14 right-10 sm:bottom-16 sm:right-10 md:bottom-16 md:right-8 lg:right-10 lg:bottom-20 xl:right-10 xl:bottom-72">
          <nuxt-link to="/contact" class="text-2xl sm:text-3xl flex">
            Just say hello
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
    </div>
  </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll'
export default {
  head () {
    return {
      title: 'Portfolio - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Adams Aimé-Désiré, front-end developer. Let\'s wrok together and build awesome stuff'
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
  border: 2px solid white;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  left: 0;
  bottom: 0;
  z-index: -1;
  transition: transform .3s ease;
}

body.dark .home-project-more a:hover::after {
  transform: translate(-6px, -6px);
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
  height: 1330px;
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

.home-project-area img {
  transition: transform .25s;
  will-change: transform;
}

.home-contact {
  height: 950px;
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
  transform: translate(-6px, -6px);
}

.home-contact-button svg {
  width: 30px;
  transform: rotate(90deg);
  margin-left: 10px;
}

@media (min-width: 1024px) and (max-width: 1280px) {
  .landing {
    height: 770px;
  }

  .landing-name h1 {
    font-size: 110px;
  }

  .home {
    height: 1100px;
  }

  .home-contact {
    height: 800px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .landing {
    height: 690px;
  }

  .landing-name h1 {
    font-size: 90px;
  }

  .home {
    height: 1020px;
  }

  .home-contact {
    height: 750px;
  }
}

@media (min-width: 640px) and (max-width: 768px) {
  .landing {
    height: 720px;
  }

  .landing-name h1 {
    text-align: center;
    font-size: 100px;
  }

  .home {
    height: 1000px;
  }

  .home-contact {
    height: 620px;
  }
}

@media (max-width: 640px) {
  #target {
    width: 92%;
    margin: auto;
  }

  .landing {
    height: 650px;
  }

  .landing-name h1 {
    text-align: center;
    font-size: 80px;
  }

  .home {
    height: 1300px;
  }

  .home-project-more a {
    padding: 20px 35px;
  }

  .home-contact {
    height: 540px;
  }

  .home-contact-button svg {
    width: 21px;
  }
}

@media (max-width: 545px) {
  .home {
    height: 1200px;
  }
}

@media (max-width: 430px) {
  .home {
    height: 1120px;
  }

  .landing-name h1 {
    font-size: 60px;
  }

  .landing-button a {
    font-size: 21px;
  }

  .landing-button svg {
    width: 20px;
  }

  .home-contact-address p {
    font-size: 24px;
    font-weight: 600;
  }

  .home-contact-title h1 {
    font-size: 35px;
  }

  .home-contact-button {
    right: 10px;
  }
}

@media (max-width: 413px) {
  .home {
    height: 1200px;
  }
}

@media (max-width: 350px) {
  .home {
    height: 1120px;
  }
}

@media (max-width: 350px) {
  .home-contact-title h1 {
    font-size: 30px;
  }
}

@media (max-width: 324px) {
  .home {
    height: 1200px;
  }
}
</style>
