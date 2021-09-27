<template>
  <div>
    <div class="w-24 h-8 sm:h-10 shadow-xl flex items-center">
      <div class="w-1/2 h-full flex items-center justify-center cursor-pointer bg-myblack" @click="changeLangue">
        <button class="font-bold text-mygray">EN</button>
      </div>
      <div class="w-1/2 h-full flex items-center justify-center cursor-pointer bg-mygray" @click="changeLangue">
        <button class="font-bold text-myblack">FR</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      En: true,
      Fr: false,
      path: ''
    }
  },
  methods: {
    changeLangue () {
      if (this.$route.path === '/en') {
        this.$router.push('/fr')
      } else if (this.$route.path === '/about/en') {
        this.$router.push('/about/fr')
      } else if (this.$route.path === '/work/en') {
        this.$router.push('/work/fr')
      } else if (this.$route.path === '/contacts/en') {
        this.$router.push('/contacts/fr')
      }
    }
  }
}
</script>

<style scoped>
button {
  outline: none;
  background: transparent;
}
</style>
