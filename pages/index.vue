<template>
  <div>
    <div class="home-content relative w-full h-screen flex flex-col items-center justify-center">
      <div class="content absolute container mx-auto px-20">
        <div class="para-1 para-left relative px-6">
          <div>
            <p class="text-3xl font-semibold px-3 sm:px-6">
              I'm a <span class="font-extrabold">javascript developer</span> with good ability in front-end using tool like Vue.js, NuxtJS, React and TailwindCss. But also in back-end using NodeJS, Express and MongoDB.
            </p>
          </div>
        </div>
        <div class="para-2 para-right relative text-right px-6">
          <div>
            <p class="text-3xl font-semibold px-3 sm:px-6">
              I turn your paperball into a beautiful paperplane. You have an project idea ?, I have the skills needed to realize your idea.
            </p>
          </div>
        </div>
        <div class="home-btn relative">
          <div class="btn absolute left-10 -bottom-56">
            <nuxt-link to="/contacts">
              <button class="text-2xl font-extrabold">Contact me</button>
            </nuxt-link>
            <span class="block">or know more</span>
            <nuxt-link to="/about">
              <button class="about-btn text-2xl font-extrabold">About me</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
.para-1 > div {
  width: 600px;
  position: absolute;
  left: 0;
  top: -180px;
}

.para-2 > div {
  position: absolute;
  right: 0;
  width: 600px;
  top: 10px;
}

a button {
  outline: none;
}

@media (min-width: 1536px) {
  .content {
    padding: 0 120px;
  }
}

@media (min-width: 1279px) {
  .home-btn .btn {
    top: 160px;
  }
}

@media (max-width: 1279px) {
  .content {
    padding: 0 10px;
  }

  .para-2 > div {
    top: 20px;
  }

  .home-btn .btn {
    top: 190px;
  }

  .home-btn {
    padding-bottom: 50px;
  }
}

@media (max-width: 620px) {
  .content p {
    font-size: 28px;
  }

  .para-1 > div {
    width: 100%;
  }

  .para-2 > div {
    width: 100%;
  }
}

@media (max-width: 533px) {
  .content {
    top: 440px;
  }
  .para-2 > div {
    top: 60px;
  }

  .home-btn .btn {
    top: 250px;
    left: 10px;
  }

  .home-btn .btn button {
    font-size: 28px;
  }
}

@media (max-height: 896px) {
  .content {
    top: 370px;
  }

  .about-btn {
    margin-bottom: 90px;
  }
}

@media (max-height: 805px) {
  .content {
    top: 340px;
    bottom: 50px;
  }
}

@media (max-width: 448px) {
  .para-2 > div {
    top: 100px;
  }

  .home-btn .btn {
    top: 300px;
  }
}

@media (max-width: 396px) {
  .para-2 > div {
    top: 140px;
  }

  .home-btn .btn {
    top: 365px;
  }
}

@media (max-width: 356px) {
  .para-2 > div {
    top: 180px;
  }

  .home-btn .btn {
    top: 425px;
  }
}

@media (max-width: 328px) {
  .home-btn .btn {
    top: 450px;
  }
}

@media (max-width: 318px) {
  .content p {
    font-size: 26px;
  }

  .para-2 > div {
    top: 170px;
  }

  .home-btn .btn {
    top: 450px;
  }

  .home-btn .btn button {
    font-size: 26px;
  }
}
</style>
