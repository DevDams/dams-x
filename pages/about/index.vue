<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section class="about-home container mx-auto">
        <div class="sm:w-full md:w-3/4 lg:w-2/3">
          <h1 class="text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-myblack font-semibold uppercase pt-64">You are here, okay let's tell more about myself</h1>
          <p class="mt-10 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint modi dolores possimus libero exercitationem id quae obcaecati tempore, culpa facere mollitia quis aperiam molestias enim rerum consectetur doloremque dicta ab!
          </p>
        </div>
      </div>
      <!-- xhat's my background -->
      <div data-scroll-section class="relative about-background">
        <div class="background-info container mx-auto mt-16 flex flex-col md:flex-row">
          <div class="left-box w-10/12 md:w-3/5">
            <h2 class="text-6xl xl:text-8xl font-bold text-myblack">
              What's my background ?
            </h2>
          </div>
          <div class="right-box w-full md:w-3/5 xl:w-2/5 pl-0 pt-8 md:pt-0 lg:pl-4 xl:pl-0">
            <p class="text-lg xl:pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et labore omnis quos natus mollitia quidem, saepe est nisi ex iure animi sunt ad sapiente quas. Nulla dolore maiores nesciunt? <br><br>
              In tempore ea quos quis optio accusantium? Repudiandae eaque totam repellat quae nobis unde? Repudiandae voluptatum dolores beatae, esse debitis ullam magnam laborum eaque veniam accusamus totam quam veritatis assumenda?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et labore omnis quos natus mollitia quidem, saepe est nisi ex iure animi sunt ad sapiente quas. Nulla dolore maiores nesciunt? <br><br>
              In tempore ea quos quis optio accusantium? Repudiandae eaque totam repellat quae nobis unde? Repudiandae voluptatum dolores beatae, esse debitis ullam magnam laborum eaque veniam accusamus totam quam veritatis assumenda?
            </p>
          </div>
        </div>
      </div>
      <!-- Competencies -->
      <div data-scroll-section class="relative about-skills">
        <div class="skills-info">
          <div class="skills-title container mx-auto">
            <div class="left-box w-10/12 md:w-3/5">
              <h2 class="text-6xl xl:text-8xl font-bold text-myblack">
                Core <br> competencies
              </h2>
            </div>
          </div>
          <div class="w-full marquee bg-myblack flex items-center absolute mt-16">
            <div class="text uppercase text-white text-7xl">Front-end development javascript html css integretion</div>
            <div class="text uppercase text-white text-7xl">nuxtjs vuejs wordpress UI</div>
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
      title: 'About - Adams Aimé-Désiré',
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
#target {
  width: 92%;
  margin: auto;
}

h2, p {
  font-family: 'Lato', sans-serif;
}
/* font-family: 'Krona One', sans-serif;
  font-family: 'Lato', sans-serif; */
.about-home {
  height: 680px;
  font-family: 'Lato', sans-serif;
}

.about-background {
  height: 650px;
}

.about-skills {
  height: 600px;
}

.marquee {
  height: 150px;
  white-space: nowrap;
  overflow: hidden;
}

.marquee .text {
  font-family: 'Krona One', sans-serif;
  font-size: 100px;
  padding-left: 100%;
  display: inline-block;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  100%{
    transform: translate(-100%, 0);
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .about-home {
    height: 710px;
  }
}

@media (max-width: 768px) {
  .about-home {
    height: 620px;
  }
}

@media (max-width: 550px) {
  .about-background {
    height: 780px;
  }
}

@media (max-width: 535px) {
  .about-home {
    height: 750px;
  }
}

@media (max-width: 465px) {
  .about-background {
    height: 950px;
  }
}

@media (max-width: 420px) {
  .about-home {
    height: 670px;
  }

  .about-home h1 {
    font-size: 35px;
  }

  .about-home p {
    font-size: 21px;
  }

  .about-background h2 {
    font-size: 3rem;
  }
}

@media (max-width: 350px) {
  .about-home {
    height: 700px;
  }

  .about-background h2 {
    margin-top: 20px;
  }
}

@media (max-width: 308px) {
  .about-background h2 {
    font-size: 2.75rem;
  }
}
</style>
