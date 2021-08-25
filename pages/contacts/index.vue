<template>
  <div>
    <div class="contact-content relative flex md:items-center w-full h-screen">
      <div
        class="content container mx-auto flex flex-col md:flex-row items-center mt-20 md:mt-0"
      >
        <div class="content-text w-full md:w-1/2 px-8">
          <div class="para">
            <p class="text-3xl font-semibold">
              You have an idea?, a project you want completed but you need help
              ?, or you need a new dev on your team ? <br /><br />
              Send me a message, it will be a pleasure to discuss it with you.
            </p>
          </div>
          <div class="social-icon mt-5 md:mt-10 w-64 flex justify-between">
            <a
              href="https://twitter.com/dams9ix"
              class="w-10 h-10 flex items-center justify-center"
            >
              <button class="w-full h-full">
                <img
                  src="~assets/icons/twitter-black.svg"
                  alt="twitter icon"
                  class="black w-8 h-8"
                />
                <img
                  src="~assets/icons/twitter-white.svg"
                  alt="twitter icon"
                  class="white w-8 h-8"
                />
              </button>
            </a>
            <a
              href="https://instagram.com/adam.9ix"
              class="w-10 h-10 flex items-center justify-center"
            >
              <button class="w-full h-full">
                <img
                  src="~assets/icons/instagram-black.svg"
                  alt="twitter icon"
                  class="black w-8 h-8"
                />
                <img
                  src="~assets/icons/instagram-white.svg"
                  alt="twitter icon"
                  class="white w-8 h-8"
                />
              </button>
            </a>
            <a
              href="https://linkedin.com/in/adamsaimedesireofficial"
              class="w-10 h-10 flex items-center justify-center"
            >
              <button class="w-full h-full">
                <img
                  src="~assets/icons/linkedin-black.svg"
                  alt="twitter icon"
                  class="black w-8 h-8"
                />
                <img
                  src="~assets/icons/linkedin-white.svg"
                  alt="twitter icon"
                  class="white w-8 h-8"
                />
              </button>
            </a>
            <a
              href="https://github.com/DevDams"
              class="w-10 h-10 flex items-center justify-center"
            >
              <button class="w-full h-full">
                <img
                  src="~assets/icons/github-black.svg"
                  alt="twitter icon"
                  class="black w-8 h-8"
                />
                <img
                  src="~assets/icons/github-white.svg"
                  alt="twitter icon"
                  class="white w-8 h-8"
                />
              </button>
            </a>
          </div>
        </div>
        <div
          class="content-form w-full md:w-1/2 flex items-center justify-center"
        >
          <div class="contact-form flex items-center justify-center">
            <form action="" class="w-full">
              <div class="input w-full h-14">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                  class="w-full h-full px-4 text-lg font-medium border-2 border-gray-500 rounded-md"
                />
              </div>
              <div class="input w-full h-14 mt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  required
                  class="w-full h-full px-4 text-lg font-medium border-2 border-gray-500 rounded-md"
                />
              </div>
              <div class="input w-full mt-4">
                <textarea
                  name="content"
                  id=""
                  placeholder="Your message"
                  required
                  class="w-full px-4 pt-4 border-2 border-gray-500 text-lg font-medium rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full px-4 mt-4 h-12 bg-black text-white font-semibold text-xl rounded-md"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
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
  }
}
</script>

<style scoped>
body .black {
  display: block;
}

body .white {
  display: none;
}

body.dark .black {
  display: none;
}

body.dark .white {
  display: block;
}

body.dark input, body.dark textarea {
  color: black;
  border: 2px solid black;
  background: rgb(240, 237, 237);
}

body.dark input::placeholder, body.dark textarea::placeholder {
  color: #6b7280;
}

.contact-form {
  width: 70%;
  height: 500px;
  margin-top: 40px;
}

input {
  outline: none;
}

textarea {
  resize: none;
  height: 120px;
  outline: none;
}

input:focus,
textarea:focus {
  border-color: black;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@media (max-width: 1279px) {
  .contact-form {
    width: 85%;
  }
}

@media (max-width: 1023px) {
  .contact-form {
    width: 100%;
  }

  .content-text {
    margin-top: 70px;
  }
}

@media (min-width: 768px) and (max-height: 600px) {
  .content {
    margin-top: 150px;
    padding-bottom: 50px;
  }
}

@media (min-width: 768px) and (max-height: 530px) {
  .content {
    margin-top: 200px;
    padding-bottom: 50px;
  }
}

@media (max-width: 767px) {
  p {
    font-size: 28px;
  }

  .contact-form {
    width: 85%;
    height: 430px;
    margin-top: 0;
    margin-bottom: 50px;
  }
}

@media (max-width: 420px) {
  .content-text {
    padding: 0 20px;
  }
}

@media (max-width: 318px) {
  p {
    font-size: 26px;
  }
}
</style>
