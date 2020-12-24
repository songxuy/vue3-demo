<template>
  <div class="heart">
    <div class="gradient-heart-shape"></div>
    <ul class="hover-tips">
      <li data-name="姨妈红"></li>
      <li data-name="基佬紫"></li>
      <li data-name="箩底橙"></li>
      <li data-name="姣婆蓝"></li>
      <li data-name="大粪青"></li>
      <li data-name="原谅绿"></li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  components: {},
  setup() {
    console.log('ok');
  },
};
</script>

<style>
.heart {
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
}
ul {
  list-style: none;
}
.gradient-heart-shape {
  position: relative;
  width: 200px;
  height: 200px;
  top: 250px;
  left: 250px;
  background-image: linear-gradient(to bottom, #09f, #f66);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  transform: rotate(45deg);
}
.gradient-heart-shape::before,
.gradient-heart-shape::after {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  content: '';
}
.gradient-heart-shape::before {
  background-image: linear-gradient(to bottom, #09f, #f66);
  transform: translateX(-50%);
}
.gradient-heart-shape::after {
  background-image: linear-gradient(to bottom, #3c9, #09f 51%, transparent 50%, transparent);
  transform: translateY(-50%);
}
.hover-tips {
  display: flex;
  justify-content: space-between;
  width: 200px;
}
.hover-tips li {
  position: relative;
  padding: 2px;
  border: 2px solid transparent;
  border-radius: 100%;
  width: 24px;
  height: 24px;
  background-clip: content-box;
  cursor: pointer;
  transition: all 300ms;
}
.hover-tips li::before,
.hover-tips li::after {
  position: absolute;
  left: 50%;
  bottom: 100%;
  opacity: 0;
  transform: translate3d(0, -30px, 0);
  transition: all 300ms;
}
.hover-tips li::before {
  margin: 0 0 12px -35px;
  border-radius: 5px;
  width: 70px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  line-height: 30px;
  text-align: center;
  color: #fff;
  content: attr(data-name);
}
.hover-tips li::after {
  margin-left: -6px;
  border: 6px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.5);
  width: 0;
  height: 0;
  content: '';
}
.hover-tips li:nth-child(1) {
  background-color: #f66;
}
.hover-tips li:nth-child(1):hover {
  border-color: #f66;
}
.hover-tips li:nth-child(2) {
  background-color: #66f;
}
.hover-tips li:nth-child(2):hover {
  border-color: #66f;
}
.hover-tips li:nth-child(3) {
  background-color: #f90;
}
.hover-tips li:nth-child(3):hover {
  border-color: #f90;
}
.hover-tips li:nth-child(4) {
  background-color: #09f;
}
.hover-tips li:nth-child(4):hover {
  border-color: #09f;
}
.hover-tips li:nth-child(5) {
  background-color: #9c3;
}
.hover-tips li:nth-child(5):hover {
  border-color: #9c3;
}
.hover-tips li:nth-child(6) {
  background-color: #3c9;
}
.hover-tips li:nth-child(6):hover {
  border-color: #3c9;
}
.hover-tips li:hover::before,
.hover-tips li:hover::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>
