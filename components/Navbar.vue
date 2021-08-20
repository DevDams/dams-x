<template>
  <div class="w-full">
    <div class="w-full h-20 bg-white shadow-md z-30">
      <div class="container h-full bg-white mx-auto flex items-center justify-between px-6">
        <div class="logo text-4xl font-extrabold">
          <div>
            <nuxt-link to="/">
              <button class="text-4xl font-bold outline-none">ai.</button>
            </nuxt-link>
          </div>
        </div>
        <div class="menu">
          <button class="text-3xl font-bold outline-none" @click="openMenu">{{ text }}</button>
        </div>
      </div>
    </div>
    <div class="menu_items absolute w-full h-screen top-0 left-0 bg-white flex items-center justify-center text-center" :class="open ? 'block' : 'hidden'">
        <div class="items">
          <ul>
            <li>
              <nuxt-link to="/">
                <button class="text-6xl font-medium">Home</button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">
                <button class="text-6xl font-medium mt-14">About</button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/projects">
                <button class="text-6xl font-medium mt-14">Projects</button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/projects">
                <button class="text-6xl font-medium mt-14">Contacts</button>
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
      text: 'Menu'
    }
  },
  methods: {
    openMenu () {
      this.open = !this.open
      if (this.open) {
        this.text = 'Close'
      } else {
        this.text = 'Menu'
      }
    }
  }
}
</script>

<style scoped>
button {
  outline: none;
}

.menu_items {
  z-index: -30;
}

body.dark .menu_items {
  background-color: #131313;
}
</style>
