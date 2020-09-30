<template>
  <div class="animate3">
    <div class="pic"></div>
    <div class="flex">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
    <transition-group
      name="more"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
    >
      <template v-if="show3">
        <div class="item" v-for="item in arr" v-bind:data-index="item" v-bind:key="item">
          <div class="square"></div>
          <div class="content">
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </div>
      </template>
    </transition-group>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const show1 = ref(false);
    const show2 = ref(false);
    const show3 = ref(false);
    const arr = ref([1, 2, 3, 4, 5, 6, 7, 8]);
    const beforeEnter = el => {
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      const delay = el.dataset.index * 300;
      setTimeout(() => {
        el.style.transition = 'opacity 0.3s ';
        el.style.opacity = 1;
        el.style.animation = 'one-in3 0.3s infinite';
        el.style['animation-iteration-count'] = 1;
        done();
      }, delay);
    };
    setTimeout(() => {
      show1.value = !show1.value;
      show2.value = !show2.value;
      show3.value = !show3.value;
    });
    return {
      show1,
      show2,
      show3,
      enter,
      beforeEnter,
      arr,
    };
  },
};
</script>
<style>
.pic {
  width: 97%;
  height: 120px;
  margin: 10px 5px 0px 5px;
  border-radius: 8px;
  background: #99d1d3;
}
.item {
  margin: 5px;
  padding: 0px;
  overflow: hidden;
}
.item div {
  display: inline;
  float: left;
}
.flex {
  margin: 5px;
  display: flex;
  justify-content: space-between;
}
.card {
  width: 65px;
  height: 65px;
  margin: 15px 12px;
  margin-top: 0px;
  border-radius: 8px;
  background: #cae5e8;
}
.item::after {
  content: '';
  clear: both;
  display: block;
}
.square {
  width: 20%;
  height: 75px;
  background: #cae5e8;
  border-radius: 8px;
}
.content {
  width: 79%;
}
.content div {
  margin: 15px;
  margin-top: 0px;
  padding: 0px;
  width: 95%;
  border-radius: 8px;
  line-height: 30px;
  background: #99d1d3;
}
.content div:last-child {
  width: 65%;
  background: #cae5e8;
}
.one-enter,
.one-leave-to {
  opacity: 0;
}
.one-enter-active,
.one-leave-active {
  transition: opacity 0.4s;
}
.container-3d {
  transform-origin: center top;
  transform-style: preserve-3d;
  perspective: 1000px;
}
.one-enter-active {
  animation: one-in 0.4s infinite;
}
@keyframes one-in3 {
  from {
    height: 100%;
    transform: rotateX(75deg);
  }
  to {
    height: 100%;
    transform: rotateX(0deg);
    /* transform-origin: 145%, 0; */
  }
}
</style>
