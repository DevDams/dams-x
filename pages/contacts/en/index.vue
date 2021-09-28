<template>
  <div>
    <div class="relative w-full h-screen text-center">
      <div
        class="relative w-9/12 h-full mx-auto px-0 md:px-6 flex items-center justify-center"
      >
        <div class="mt-6">
          <p class="text-3xl sm:text-5xl xl:text-6xl font-normal">
            Let's talk about your project
          </p>
          <p class="text-lg sm:text-2xl md:text-2xl xl:text-xl mt-6">
            ...and create something cool together
          </p>
          <div class="form-btn mt-4 sm:mt-6">
            <button
              class="text-xl sm:text-3xl xl:text-3xl uppercase font-medium"
              @click="openForm"
            >
              Get in touch
            </button>
          </div>
          <div class="network-btn mt-10">
            <a
              href="https://linkedin.com/in/adamsaimedesireofficial"
              target="_blank"
              class="text-lg sm:text-2xl xl:text-2xl mx-1 sm:mx-3"
              >LinkedIn</a
            >
            <a
              href="https://github.com/DevDams"
              target="_blank"
              class="text-lg sm:text-2xl xl:text-2xl mx-1 sm:mx-3"
              >Github</a
            >
            <a
              href="https://twitter.com/dams9ix"
              target="_blank"
              class="text-lg sm:text-2xl xl:text-2xl mx-1 sm:mx-3"
              >Twitter</a
            >
            <a
              href="https://instagram.com/adam.9ix"
              target="_blank"
              class="text-lg sm:text-2xl xl:text-2xl mx-1 sm:mx-3"
              >Instagram</a
            >
          </div>
        </div>
      </div>
      <div
        class="absolute blur bg-myblack w-full h-full top-0 left-0 flex items-center justify-center"
        :class="open ? 'block' : 'hidden'"
        @click="openForm"
      ></div>
      <div
        class="box absolute bg-white top-1/2 left-1/2"
        :class="open ? 'block' : 'hidden'"
      >
        <div class="box-header bg-myblack text-mygray text-center px-4 py-3">
          <h3 class="font-semibold capitalize text-2xl">
            Let's work together !
          </h3>
          <p class="text-lg capitalize">
            Leave me a message and i will get in touch as soon as possible
          </p>
        </div>
        <form v-if="response === ''" action="post" class="px-4 mt-6">
          <div class="fullname">
            <input
              v-model="fullname"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full name"
              class="px-2 border-2 border-gray-300 focus:border-gray-600 w-full h-12 font-normal text-myblack"
            />
          </div>
          <div class="email mt-3">
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="px-2 border-2 border-gray-300 focus focus:border-myblack w-full h-12 font-normal text-myblack"
            />
          </div>
          <div class="message mt-3">
            <textarea
              v-model="message"
              name="message"
              id="message"
              placeholder="Message"
              class="px-2 pt-2 border-2 border-gray-300 focus focus:border-myblack w-full h-28"
            ></textarea>
          </div>
          <button
            type="submit"
            id="submit"
            class="mt-3 bg-myblack text-mygray w-full h-11 font-semibold flex items-center justify-center"
            @click="sendMessage"
          >
            <p v-if="!load">Send</p>
            <img v-if="load" src="~/assets/icons/oval.svg" alt="spinner icon" class="w-6">
          </button>
        </form>
        <div v-if="response !== ''" class="success-error bg-white w-full h-56 mt-12 flex items-center justify-center">
          <p class="text-xl font-medium text-center">{{ response.messageEn }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head () {
    return {
      title: 'Contact me - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Send me a simple message. It can be just to say hello or leave me a cute motivation message'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@nuxt_js'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@dams9ix'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://damsx.netlify.app/contacts/en'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Contact me - Adams Aimé-Désiré'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Send me a simple message. It can be just to say hello or leave me a cute motivation message'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://damsx.netlify.app/_nuxt/img/big-logo.053ce4c.png'
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Adams Aimé-Désiré logo'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Portfolio - Adams Aimé-Désiré'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://damsx.netlify.app/contacts/en'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Contact me - Adams Aimé-Désiré'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Send me a simple message. It can be just to say hello or leave me a cute motivation message'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://damsx.netlify.app/_nuxt/img/big-logo.053ce4c.png'
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: 'Adams Aimé-Désiré logo'
        }
      ]
    }
  },
  data () {
    return {
      open: false,
      load: false,
      fullname: '',
      email: '',
      message: '',
      response: ''
    }
  },
  methods: {
    openForm () {
      this.open = !this.open
    },
    async sendMessage (e) {
      try {
        e.preventDefault()
        this.load = true
        const data = {
          fullname: this.fullname,
          email: this.email,
          message: this.message
        }
        await axios.post('https://damsx.herokuapp.com/api/post/message', data).then((response) => {
          this.response = response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
button,
input,
textarea {
  outline: none;
}

textarea {
  resize: none;
}

body.dark form {
  color: #131313;
}

body.dark .success-error p {
  color: #131313;
}

.blur {
  opacity: 0.3;
  z-index: 100;
}

.box {
  width: 350px;
  height: 450px;
  transform: translate(-50%, -50%);
  z-index: 999;
}

@media (max-width: 440px) {
  .box {
    width: 90%;
  }

  .box-header h3,
  .box-header p {
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
