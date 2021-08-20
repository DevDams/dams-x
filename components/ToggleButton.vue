<template>
  <div>
    <div class="toogle container mx-auto flex items-end">
      <label class="switch relative block">
        <input type="checkbox" class="check" @change="dark">
        <span class="slider round absolute top-0 left-0 right-0 bottom-0 bg-white border-myblack"></span>
      </label>
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
  },
  methods: {
    dark () {
      if (localStorage.getItem('darkmode')) {
        localStorage.removeItem('darkmode')
        document.body.classList.toggle('dark')
      } else {
        localStorage.setItem('darkmode', 'enabled')
        document.body.classList.toggle('dark')
      }
    }
  }
}
</script>

<style scoped>
.toogle {
  height: 0;
}

.switch {
  width: 60px;
  height: 35px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  transition: .3s all ease-in-out;
  border: 3px solid black;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.slider::before {
  position: absolute;
  content: '';
  bottom: 14px;
  top: 6.5px;
  background-color: rgb(0, 0, 0);
  transition: .3s;
}

input:checked + .slider {
  background-color: black;
  border: 3px solid white;
}

input:checked + .slider::before {
  transform: translateX(23px);
  background-color: white;
}

.slider.round {
  border-radius: 35px;
}

.slider.round::before {
  width: 50%;
  height: 90%;
  border-radius: 50%;
  margin-top: -4.8px;
  margin-left: 3px;
}

@media (max-width: 776px) {
  .switch {
    transform: scale(.9);
  }
}
</style>
