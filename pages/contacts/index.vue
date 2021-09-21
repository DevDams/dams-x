<template>
  <div>
    <div class="relative w-full h-screen text-center">
      <div class="relative w-9/12 h-full mx-auto px-0 md:px-6 flex items-center justify-center">
        <div class="mt-6">
          <p class="text-3xl sm:text-5xl xl:text-5xl font-normal">Let's talk about your project</p>
          <p class="text-lg sm:text-2xl md:text-2xl xl:text-xl mt-6">...and create something cool together</p>
          <div class="form-btn mt-4 sm:mt-6">
            <button class="text-xl sm:text-3xl xl:text-3xl uppercase font-semibold" @click="openForm">Get in touch</button>
          </div>
          <div class="network-btn mt-10">
            <a href="https://linkedin.com/in/adamsaimedesireofficial" target="_blank" class="text-lg sm:text-2xl xl:text-2xl mx-1 sm:mx-3">LinkedIn</a>
            <a href="https://github.com/DevDams"  target="_blank" class="text-lg sm:text-2xl xl:text-2xl mx-1 sm:mx-3">Github</a>
            <a href="https://twitter.com/dams9ix"  target="_blank" class="text-lg sm:text-2xl xl:text-2xl mx-1 sm:mx-3">Twitter</a>
            <a href="https://instagram.com/adam.9ix"  target="_blank" class="text-lg sm:text-2xl xl:text-2xl mx-1 sm:mx-3">Instagram</a>
          </div>
        </div>
      </div>
      <div class="absolute blur bg-myblack w-full h-full top-0 left-0 flex items-center justify-center" :class="open ? 'block' : 'hidden'" @click="openForm"></div>
      <div class="box absolute bg-white top-1/2 left-1/2" :class="open ? 'block' : 'hidden'">
        <div class="box-header bg-myblack text-mygray text-center px-4 py-3">
          <h3 class="font-semibold capitalize text-2xl">Let's work together !</h3>
          <p class="text-lg capitalize">Leave your message and i will get in touch as soon as possible</p>
        </div>
        <form action="post" class="px-4 mt-6">
          <div class="fullname">
            <input type="text" name="fullname" id="fullname" class="px-2 border-2 border-gray-300 focus:border-gray-600 w-full h-12 font-normal text-myblack">
          </div>
          <div class="email mt-3">
            <input type="email" name="email" id="email"  class="px-2 border-2 border-gray-300 focus focus:border-myblack w-full h-12 font-normal text-myblack">
          </div>
          <div class="message mt-3">
            <textarea name="message" id="message"  class="px-2 pt-2 border-2 border-gray-300 focus focus:border-myblack w-full h-28"></textarea>
          </div>
          <button type="submit" class="mt-3 bg-myblack text-mygray w-full h-11 font-semibold">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Contact me - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Send me a simple message. It can be just to say hello or leave me a cute motivation message'
        }
      ]
    }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    openForm () {
      this.open = !this.open
    }
  }
}
</script>

<style scoped>
button, input, textarea {
  outline: none;
}

textarea {
  resize: none;
}

.blur {
  opacity: .3;
}

.box {
  width: 350px;
  height: 450px;
  transform: translate(-50%, -50%);
}

@media (max-width: 440px) {
  .box {
    width: 90%;
  }

  .box-header h3, .box-header p {
    font-size: 18px;
  }
}

@media (max-width: 393px) {
  .network-btn a {
    font-size: 16px;
  }
}

@media (max-width: 332px) {
  .box {
    height: 475px;
  }
}
</style>
