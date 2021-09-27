<template>
  <div class="w-full mynavbar bg-mygray px-5">
    <!-- Desktop menu -->
    <div class="hidden md:block bar bg-mygray w-full h-20 z-30">
      <div class="flex w-11/12 h-full mx-auto items-center justify-between">
        <div class="menu-desktop text-4xl font-extrabold">
          <div>
            <nuxt-link to="/fr">
              <button class="text-xl lg:text-2xl font-medium outline-none rounded-md py-1">Accueil</button>
            </nuxt-link>
            <nuxt-link to="/about/fr">
              <button class="text-xl lg:text-2xl font-medium outline-none rounded-md py-1 ml-5">A Propos</button>
            </nuxt-link>
            <nuxt-link to="/work/fr">
              <button class="text-xl lg:text-2xl font-medium outline-none rounded-md py-1 ml-5">Projets</button>
            </nuxt-link>
            <nuxt-link to="/contacts/fr">
              <button class="text-xl lg:text-2xl font-medium outline-none rounded-md py-1 ml-5">Contacts</button>
            </nuxt-link>
          </div>
        </div>
        <div class="email h-full flex items-center mt-3">
          <a href="mailto:ad.aimedesire@gmail.com" class="text-2xl">ad.aimedesire@gmail.com</a>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <div class="md:hidden bar-mobile bg-mygray relative w-full h-20 z-30">
      <div class="flex w-11/12 h-full relative mx-auto items-center justify-between z-30">
        <div class="menu-mobile text-4xl font-extrabold">
          <div>
            <button class="text-xl font-medium" @click="openMenu">{{ text }}</button>
          </div>
        </div>
        <div class="email h-full flex items-center mt-3">
          <a href="mailto:ad.aimedesire@gmail.com" class="text-xl" id="email-mob">Email</a>
          <a href="mailto:ad.aimedesire@gmail.com" class="text-xl" id="email-link">ad.aimedesire@gmail.com</a>
        </div>
      </div>
      <div class="menu-mobile--items absolute top-0 -left-5 bg-mygray w-screen h-screen z-10">
        <div class="flex items-center justify-center h-full text-center">
          <div class="flex flex-col -ml-2">
            <nuxt-link to="/fr">
              <button class="text-4xl sm:text-5xl font-medium outline-none rounded-md py-1" @click="openMenu">Accueil</button>
            </nuxt-link>
            <nuxt-link to="/about/fr">
              <button class="text-4xl sm:text-5xl font-medium outline-none rounded-md py-1 mt-4 sm:mt-8" @click="openMenu">A Propos</button>
            </nuxt-link>
            <nuxt-link to="/work/fr">
              <button class="text-4xl sm:text-5xl font-medium outline-none rounded-md py-1 mt-4 sm:mt-8" @click="openMenu">Projets</button>
            </nuxt-link>
            <nuxt-link to="/contacts/fr">
              <button class="text-4xl sm:text-5xl font-medium outline-none rounded-md py-1 mt-4 sm:mt-8" @click="openMenu">Contacts</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      text: 'Menu',
      copied: false,
      copied_text: 'Copie email'
    }
  },
  methods: {
    openMenu () {
      this.open = !this.open
      const items = document.querySelector('.menu-mobile--items')
      if (this.open) {
        items.style.display = 'block'
        items.style.opacity = '1'
        this.text = 'Fermer'
      } else {
        items.style.display = 'none'
        items.style.opacity = '0'
        this.text = 'Menu'
      }
    }
    // copyEmail () {
    //   this.copied_text = 'Copié !'
    //   setTimeout(() => {
    //     this.copied_text = 'Copie email'
    //   }, 1500)
    //   navigator.clipboard.writeText('ad.aimedesire@gmail.com')
    // }
  }
}
</script>

<style scoped>
button {
  outline: none;
  position: relative;
}

body.dark .logo a button {
  border-color: white;
}

body.dark .bar {
  background-color: #131313;
}

body.dark .bar-mobile {
  background-color: #131313;
}

body.dark .menu-mobile--items {
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

body.dark .menu-desktop button::after {
  background-color: #eee;
}

.menu-mobile--items {
  opacity: 0;
  display: none;
  transition: all .3s ease-out;
}

.menu-desktop button::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 5px;
  left: 0;
  background-color: #131313;
  transform-origin: bottom right;
  transition: transform .3s ease-out;
}

.menu-desktop button:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.bar-mobie .email input {
  outline: none;
  border: none;
  background-color: #eee;
  visibility: hidden;
}

#email-mob {
  display: none;
}

.copy-text {
  display: none;
}

@media (max-width: 440px) {
  #email-link {
    display: none;
  }

  #email-mob {
    display: block;
  }

  .copy-text {
    display: block;
  }
}
</style>
