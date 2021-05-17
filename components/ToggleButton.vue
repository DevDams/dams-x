<template>
  <div>
    <div class="container">
      <label class="switch relative block">
        <input type="checkbox">
        <span class="slider round absolute top-0 left-0 right-0 bottom-0 bg-white border-2 border-myblack"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.switch {
  width: 90px;
  height: 55px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  transition: .3s all ease-in-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.slider::before {
  position: absolute;
  content: '';
  bottom: 14px;
  top: 8px;
  background-color: rgb(34, 34, 34);
  transition: .3s;
}

input:checked + .slider {
  background-color: black;
}

input:checked + .slider::before {
  transform: translateX(37px);
  background-color: white;
}

.slider.round {
  border-radius: 35px;
}

.slider.round::before {
  width: 50%;
  height: 90%;
  border-radius: 50%;
  margin-top: -5px;
  margin-left: 3px;
}
</style>
