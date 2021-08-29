<template>
  <div class="w-full mynavbar bg-white">
    <div class="bar w-full h-20 shadow-md z-30">
      <div class="container h-full bg-white mx-auto flex items-center justify-between px-6">
        <div class="logo text-4xl font-extrabold">
          <div>
            <nuxt-link to="/">
              <button class="text-3xl font-bold outline-none rounded-md p-1">ai.</button>
            </nuxt-link>
          </div>
        </div>
        <div class="menu">
          <button class="text-2xl font-bold outline-none" @click="openMenu">{{ text }}</button>
        </div>
      </div>
    </div>
    <div class="menu_items absolute w-full h-screen top-0 left-0 bg-white flex items-center justify-center text-center" :class="open ? 'active' : ''">
        <div class="items mt-6">
          <ul>
            <li>
              <nuxt-link to="/">
                <button class="lg:text-6xl sm:text-5xl font-medium"  @click="openMenu">Home</button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">
                <button class="lg:text-6xl sm:text-5xl font-medium lg:mt-12 sm:mt-10"  @click="openMenu">About</button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/work">
                <button class="lg:text-6xl sm:text-5xl font-medium lg:mt-12 sm:mt-10"  @click="openMenu">Projects</button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contacts">
                <button class="lg:text-6xl sm:text-5xl font-medium lg:mt-12 sm:mt-10"  @click="openMenu">Contacts</button>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      text: 'menu'
    }
  },
  methods: {
    openMenu () {
      this.open = !this.open
      if (this.open) {
        this.text = 'close'
      } else {
        this.text = 'menu'
      }
    }
  }
}
</script>

<style scoped>
body.dark .logo a button {
  border-color: white;
}

body.dark .bar {
  background-color: #131313;
}

body.dark .menu_items {
  background-color: #131313;
}

body.dark .bar .container {
  background-color: #131313;
}

.bar {
  height: 70px;
}

button {
  outline: none;
}

.menu_items {
  z-index: -30;
  transform: translateY(-100%);
  transition: .4s all ease-in-out;
}

.menu_items.active {
  transform: translateY(0);
}

@media (max-width: 640px) {
  .items ul li button {
    margin-top: 36px;
    font-weight: 600;
    font-size: 40px;
  }
}

@media (max-height: 570px) {
  .items {
    margin-top: 30px;
  }
}

@media (max-height: 515px) {
  .items {
    margin-top: 50px;
  }
}

@media (max-height: 478px) {
  .items ul li button {
    margin-top: 20px;
  }
}
</style>
