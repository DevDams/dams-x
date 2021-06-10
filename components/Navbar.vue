<template>
  <div>
    <div class="navbar w-screen h-20 bg-myblack">
      <div class="container mx-auto h-full text-white flex items-center justify-between">
        <div class="logo">
          <nuxt-link to="/">
            <h1 class="text-3xl uppercase">aimé.</h1>
          </nuxt-link>
        </div>
        <div class="navbar-item md:text-2xl lg:text-2xl xl:text-3xl uppercase" :class="{ 'active': isHide }" >
          <span  class="py-4 md:px-6 lg:px-6 xl:px-8" @click="closeNav">
            <nuxt-link to="/about">about</nuxt-link>
          </span>
          <span class="py-4 md:px-6 lg:px-6 xl:px-8" @click="closeNav">
            <nuxt-link to="/work">work</nuxt-link>
          </span>
          <span class="py-4 md:px-6 lg:px-6 xl:px-8" @click="closeNav">
            <nuxt-link to="/blog">blog</nuxt-link>
          </span>
          <span class="py-4 md:px-6 lg:px-6 xl:px-8" @click="closeNav">
            <nuxt-link to="/contact">contact</nuxt-link>
          </span>
        </div>
        <div class="social-network hidden md:hidden lg:block lg:flex">
          <a href="https://www.linkedin.com/in/adamsaimedesireofficial/" class="lg:px-2 xl:px-4">
            <img src="~/assets/icons/linkedin.svg" alt="">
          </a>
          <a href="https://twitter.com/dams9ix" class="lg:px-2 xl:px-4">
            <img src="~/assets/icons/twitter.svg" alt="">
          </a>
          <a href="https://www.instagram.com/dams9ix/" class="lg:px-2 xl:px-4">
            <img src="~/assets/icons/instagram.svg" alt="">
          </a>
        </div>
        <div class="burger block z-10 md:hidden">
          <button class="hamburger hamburger--minus" type="button" :class="{ 'is-active' : isActive }" @click="hamburger">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div class="overlay" :class="{ 'visible' : visible}" @click="maskMenu"></div>
    </div>
    <div v-if="load" class="loader w-screen h-screen bg-black flex items-center justify-center">
      <img class="w-16" src="~/assets/icons/oval.svg" alt="spinner">
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route () {
      this.load = true
      setTimeout(() => {
        this.load = false
      }, 2000)
    }
  },
  data () {
    return {
      isActive: false,
      isHide: true,
      visible: false,
      load: false
    }
  },
  methods: {
    hamburger () {
      this.isActive = !this.isActive
      this.isHide = !this.isHide
      this.visible = !this.visible
    },
    maskMenu () {
      this.isActive = !this.isActive
      this.isHide = !this.isHide
      this.visible = !this.visible
    },
    closeNav () {
      this.isActive = !this.isActive
      this.isHide = !this.isHide
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped>
button {
  outline: none;
}

.navbar {
  font-family: 'Lato', sans-serif;
  z-index: 15;
}

@media (max-width: 768px) {
  .navbar-item {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #131313;
    transform: translateX(0);
    transition: .3s all ease-in-out;
    z-index: 5;
  }
  .navbar-item a {
    font-size: 35px;
    padding: 5px 0;
    margin: 15px 0;
  }
  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vh;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    z-index: 3;
  }
  .visible {
    display: block;
  }
  .active {
    transform: translateX(100%);
  }
}

@media (max-width: 640px) {
  .logo {
    padding-left: 15px;
  }
}
</style>
