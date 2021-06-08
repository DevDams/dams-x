<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section>
        <div class="relative container mx-auto mt-20">
          <div class="intro_title mt-48">
            <h1 class="text-6xl font-bold uppercase">Leave a little text</h1>
          </div>
        </div>
      </div>
      <!-- Left box -->
      <div data-scroll-section>
        <div class="contact-content relative container mx-auto flex flex-col sm:flex-col md:flex-row mt-16">
          <div class="w-full md:w-1/2 left-box sm:w-full md:mr-4">
            <p class="font-normal text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officiis dolorum debitis totam! Pariatur voluptate maxime distinctio dignissimos deserunt quisquam magnam quas voluptatibus cumque, quos tempora modi, rem, veritatis voluptas.
            </p>
            <div class="adress mt-8 text-lg font-bold uppercase">
              <p>
                @ : <a href="mailto:ad.aimedesire@gmail.com">ad.aimedesire@gmail.com</a>
              </p>
              <p>
                Tel : <a href="tel:+2550778812111">+225 07 78 81 2111</a>
              </p>
            </div>
            <!-- social network light theme -->
            <div class="social-network flex mt-4">
              <a href="https://www.github.com/DevDams/" class="px-2 lg:pr-2 xl:pr-4">
                <img src="~/assets/icons/github-2.svg" alt="">
              </a>
              <a href="https://www.linkedin.com/in/adamsaimedesireofficial/" class="px-2 lg:px-2 xl:px-4">
                <img src="~/assets/icons/linkedin-2.svg" alt="">
              </a>
              <a href="https://twitter.com/dams9ix" class="px-2 lg:px-2 xl:px-4">
                <img src="~/assets/icons/twitter-2.svg" alt="">
              </a>
              <a href="https://www.instagram.com/dams9ix/" class="px-2 lg:px-2 xl:px-4">
                <img src="~/assets/icons/instagram-2.svg" alt="">
              </a>
            </div>
            <!-- social network dark theme -->
            <div class="social-network-2 flex mt-4 hidden">
              <a href="https://www.github.com/DevDams/" class="px-2 lg:pr-2 xl:pr-4">
                <img src="~/assets/icons/github.svg" alt="">
              </a>
              <a href="https://www.linkedin.com/in/adamsaimedesireofficial/" class="px-2 lg:px-2 xl:px-4">
                <img src="~/assets/icons/linkedin.svg" alt="">
              </a>
              <a href="https://twitter.com/dams9ix" class="px-2 lg:px-2 xl:px-4">
                <img src="~/assets/icons/twitter.svg" alt="">
              </a>
              <a href="https://www.instagram.com/dams9ix/" class="px-2 lg:px-2 xl:px-4">
                <img src="~/assets/icons/instagram.svg" alt="">
              </a>
            </div>
          </div>
          <div class="w-full sm:w-full md:w-1/2 right-box">
            <div class="form flex items-center justify-center mt-20 sm:mt-20 md:mt-0">
              <form action="" class="w-96 flex flex-col justify-around -mt-8">
                <label for="name" class="w-full h-16">
                  <input
                  class="w-full h-16 border"
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="off"
                  placeholder="Enter your name here">
                </label>
                <label for="email" class="w-full h-16">
                  <input
                  class="w-full h-16 border"
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="off"
                  placeholder="Your email here">
                </label>
                <label for="message" class="w-full h-24">
                  <textarea class="w-full h-32 border" name="message" id="message" placeholder="Your message here"></textarea>
                </label>
                <button type="submit" class="relative px-16 py-4 mt-8 text-white font-semibold uppercase bg-myblack">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll'
export default {
  head () {
    return {
      title: 'Contact me - Adams Aimé-Désiré',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Send me a simple message. It can be just to say hello or leave me a cute motivation message'
        }
      ]
    }
  },
  mounted () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    })
    const target = document.querySelector('#target')
    scroll.scrollTo(target)
  }
}
</script>

<style scoped>
#target {
  width: 92%;
  margin: auto;
}

body.dark .social-network {
  display: none;
}

body.dark .social-network-2 {
  display: flex;
}

.contact-content {
  height: 710px;
}

form {
  height: 27rem;
}

textarea {
  resize: none;
}

button {
  transition: .3s all ease;
}

button:hover {
  background-color: #000000;
}

#name, #email, #message {
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background: transparent;
}

#name::placeholder, #email::placeholder, #message::placeholder {
  color: black;
  text-transform: uppercase;
  font-weight: 600;
}

#name:focus, #email:focus, #message:focus {
  border-bottom: 2px solid black;
}

body.dark #name, body.dark #email, body.dark #message {
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  background: transparent;
}

body.dark #name::placeholder, body.dark #email::placeholder, body.dark #message::placeholder {
  color: white;
  font-weight: 600;
  text-transform: uppercase;
}

body.dark #name:focus, body.dark #email:focus, body.dark #message:focus {
  border-bottom: 2px solid white;
}

body.dark button {
  background: white;
  color: #131313;
  font-weight: 700;
}

@media (max-width: 767px) {
  .contact-content {
    height: 1000px;
  }
}

@media (max-width: 374px) {
  .intro_title h1 {
    font-size: 45px;
  }
}
</style>
