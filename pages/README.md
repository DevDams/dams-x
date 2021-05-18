# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

<!-- <div class="marquee bg-myblack flex items-center absolute">
<div class="text uppercase text-white">Front-end and javascript developer</div>
</div> -->

.marquee {
  width: 80%;
  height: 150px;
  right: -550px;
  top: 300px;
  transform: rotate(90deg);
  white-space: nowrap;
  overflow: hidden;
}

.marquee .text {
  font-family: 'Krona One', sans-serif;
  font-size: 100px;
  padding-left: 100%;
  display: inline-block;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  100%{
    transform: translate(-100%, 0);
  }
}