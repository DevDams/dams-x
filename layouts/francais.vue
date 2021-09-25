<template>
  <div>
    <div>
      <NavbarFrancais class="navbar fixed top-0 z-40" />
      <Nuxt />
      <div class="w-11/12 mx-auto">
        <ToggleButton class="toggleBtn fixed left-2 bottom-5 transform z-40" />
        <LanguageFR class="langueBtn fixed right-6 bottom-5 z-40" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    if (localStorage.getItem('darkmode')) {
      document.body.classList.toggle('dark')
      document.querySelector('.check').checked = true
    }
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  transition: .3s all ease-out;
  background-color: #eee;
}

body.dark {
  background-color: #131313;
  color: #fff;
}

body.dark .navbar {
  background-color: #131313;
}

.toggleBtn {
  margin-left: 30px;
}

button {
  outline: none;
}

a button {
  outline: none;
}

@media (max-width: 640px) {
  .toggleBtn {
    margin-left: 20px;
  }
}
</style>
