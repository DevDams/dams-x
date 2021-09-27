<template>
  <div>
    <div class="w-24 h-8 sm:h-10 shadow-xl flex items-center">
      <div class="w-1/2 h-full flex items-center justify-center cursor-pointer bg-mygray" @click="changeLangue">
        <button class="font-bold text-myblack">EN</button>
      </div>
      <div class="w-1/2 h-full flex items-center justify-center cursor-pointe bg-myblack" @click="changeLangue">
        <button class="font-bold text-mygray">FR</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      En: false,
      Fr: true,
      path: ''
    }
  },
  methods: {
    changeLangue () {
      if (this.$route.path === '/fr') {
        this.$router.push('/en')
      } else if (this.$route.path === '/about/fr') {
        this.$router.push('/about/en')
      } else if (this.$route.path === '/work/fr') {
        this.$router.push('/work/en')
      } else if (this.$route.path === '/contacts/fr') {
        this.$router.push('/contacts/en')
      } else if (this.$route.path === '/') {
        this.$router.push('/en')
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
