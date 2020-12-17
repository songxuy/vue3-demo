<template>
  <div
    style="position: relative;height: 100%;width:100%;"
    :style="{ paddingLeft: paddingLeft + 'px' }"
  >
    <div
      style="position: absolute;left:50%;top:50%;transform: translate(-50%,-50%);"
      :style="{ width: cardWidth + 'px', height: cardHeight + 'px' }"
    >
      <div
        class="card"
        style="z-index: 13;"
        :style="{
          width: cardWidth + 'px',
          height: cardHeight + 'px',
          left: left + 'px',
          top: top + 'px',
          'border-radius': borderRadius + 'px',
          backgroundColor: cardBgColor,
        }"
        :class="{ animation: isAnimating, shadowEffect: hasShadow, boderEffect: hasBorder }"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchcancel="touchCancel"
        @touchend="touchCancel"
      >
        <slot name="firstCard"></slot>
      </div>
      <div
        class="card"
        style="z-index: 12;"
        :style="{
          width: width2 + 'px',
          height: height2 + 'px',
          left: left2 + 'px',
          top: top2 + 'px',
          'border-radius': borderRadius + 'px',
          backgroundColor: cardBgColor,
        }"
        :class="{ animation: isAnimating, shadowEffect: hasShadow, boderEffect: hasBorder }"
      >
        <slot name="secondCard"></slot>
      </div>
      <div
        class="card"
        style="z-index: 11;"
        :style="{
          width: width3 + 'px',
          height: height3 + 'px',
          left: left3 + 'px',
          top: top3 + 'px',
          'border-radius': borderRadius + 'px',
          backgroundColor: cardBgColor,
        }"
        :class="{ animation: isAnimating, shadowEffect: hasShadow, boderEffect: hasBorder }"
      >
        <slot name="thirdCard"></slot>
      </div>
      <div
        class="card"
        style="z-index: 10;"
        :style="{
          width: width4 + 'px',
          height: height4 + 'px',
          left: left4 + 'px',
          top: top4 + 'px',
          'border-radius': borderRadius + 'px',
          backgroundColor: cardBgColor,
          opacity: opacity4,
        }"
        :class="{ animation: isAnimating, shadowEffect: hasShadow, boderEffect: hasBorder }"
      ></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  props: {
    // 正常卡片宽度
    cardWidth: {
      type: Number,
      default: 260,
    },
    // 正常卡片高度
    cardHeight: {
      type: Number,
      default: 300,
    },
    // 卡片层叠的横向边距
    leftPad: {
      type: Number,
      default: 10,
    },
    // 卡片层叠的纵向边距
    topPad: {
      type: Number,
      default: 6,
    },
    // 卡片背景色
    cardBgColor: {
      type: String,
      default: '#fff',
    },
    // 卡片拖拽方向
    dragDirection: {
      type: String,
      default: 'all', //all,vertical,horizontal
    },
    // 卡片的圆角弧度
    borderRadius: {
      type: Number,
      default: 10,
    },
    // 卡片触发飞卡效果的距离
    throwTriggerDistance: {
      type: Number,
      default: 100,
    },
    // 飞卡的移动距离
    throwDistance: {
      type: Number,
      default: 1000,
    },
    // 是否开启卡片描边效果
    hasBorder: {
      type: Boolean,
      default: false,
    },
    // 是否开启阴影效果
    hasShadow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      left: 0,
      top: 0,
      startLeft: 0,
      startTop: 0,
      isDrag: false,
      isThrow: false,
      needBack: false,
      isAnimating: false,

      left2: 0,
      top2: 0,
      width2: 0,
      height2: 0,

      left3: 0,
      top3: 0,
      width3: 0,
      height3: 0,

      left4: 0,
      top4: 0,
      width4: 0,
      height4: 0,
      opacity4: 0,

      paddingLeft: 0,
      paddingTop: 0,
    });
    const onDragStart = function() {
      emit('ondragstart');
    };
    const onDragMove = function(obj) {
      emit('ondragmove', obj);
    };
    const onDragStop = function(obj) {
      emit('ondragstop', obj);
    };
    const onThrowFail = function() {
      emit('onthrowfail');
    };
    const onThrowStart = function() {
      emit('onthrowstart');
    };
    const onThrowDone = function() {
      emit('onthrowdone');
    };
    const resetAllCardDown = function() {
      state.left = 0;
      state.top = 0;

      state.width2 = props.cardWidth - props.leftPad * 2;
      state.height2 = props.cardHeight - props.topPad * 2;
      state.left2 = props.leftPad;
      state.top2 = props.topPad * 3;

      state.width3 = props.cardWidth - props.leftPad * 4;
      state.height3 = props.cardHeight - props.topPad * 4;
      state.left3 = props.leftPad * 2;
      state.top3 = props.topPad * 6;

      state.width4 = props.cardWidth - props.leftPad * 6;
      state.height4 = props.cardHeight - props.topPad * 6;
      state.left4 = props.leftPad * 3;
      state.top4 = props.topPad * 9;
      state.opacity4 = 0;
    };
    const resetAllCard = function() {
      resetAllCardDown();
    };
    const makeCardThrow = function() {
      state.isThrow = true;
      state.needBack = false;

      const angle = Math.atan2(state.top - 0, state.left - 0);
      state.left = Math.cos(angle) * props.throwDistance;
      state.top = Math.sin(angle) * props.throwDistance;

      state.width2 = props.cardWidth;
      state.height2 = props.cardHeight;
      state.left2 = 0;
      state.top2 = 0;

      state.width3 = props.cardWidth - props.leftPad * 2;
      state.height3 = props.cardHeight - props.topPad * 2;
      state.left3 = props.leftPad;
      state.top3 = props.topPad * 3;

      state.width4 = props.cardWidth - props.leftPad * 4;
      state.height4 = props.cardHeight - props.topPad * 4;
      state.left4 = props.leftPad * 2;
      state.top4 = props.topPad * 6;
      state.opacity4 = 1;

      state.isAnimating = true;

      onThrowStart();
      setTimeout(function() {
        state.isThrow = false;
        state.isAnimating = false;
        onThrowDone();
        resetAllCard();
      }, 400);
    };
    const makeCardBack = function() {
      state.isThrow = false;
      state.needBack = true;

      if (state.needBack) {
        state.left = 0;
        state.top = 0;
      }

      state.isAnimating = true;
      setTimeout(function() {
        onThrowFail();
        state.isAnimating = false;
        state.needBack = true;
      }, 600);
    };
    const getDistance = (x1, y1, x2, y2) => {
      const _x = Math.abs(x1 - x2);
      const _y = Math.abs(y1 - y2);
      return Math.sqrt(_x * _x + _y * _y);
    };
    const touchStart = e => {
      if (state.isAnimating) return;

      state.isDrag = true;
      state.needBack = false;
      state.isThrow = false;
      const curTouch = e.touches[0];
      state.startLeft = curTouch.clientX - state.left;
      state.startTop = curTouch.clientY - state.top;
      onDragStart();
    };
    const touchMove = function(e) {
      if (state.isAnimating) return;
      const curTouch = e.touches[0];
      if (props.dragDirection == 'all' || props.dragDirection == 'horizontal')
        state.left = curTouch.clientX - state.startLeft;
      if (props.dragDirection == 'all' || props.dragDirection == 'vertical')
        state.top = curTouch.clientY - state.startTop;
      const distance = getDistance(0, 0, state.left, state.top);
      onDragMove({ left: state.left, top: state.top, distance: distance });
    };
    const touchCancel = function(e) {
      let distance = getDistance(0, 0, state.left, state.top);

      state.isDrag = false;
      onDragStop({ left: state.left, top: state.top, distance: distance });
      if (state.isAnimating) return;

      /* const curTouch = e.touches[0]; */
      distance = getDistance(0, 0, state.left, state.top);
      if (distance > props.throwTriggerDistance) {
        makeCardThrow();
      } else {
        makeCardBack();
      }
    };
    resetAllCard();
    return {
      ...toRefs(state),
      getDistance,
      touchStart,
      touchMove,
      touchCancel,
      resetAllCardDown,
      resetAllCard,
      makeCardThrow,
      makeCardBack,
      onDragStart,
      onDragMove,
      onDragStop,
      onThrowFail,
      onThrowStart,
      onThrowDone,
    };
  },
};
</script>

<style>
.card {
  position: absolute;
  overflow: hidden;
}
.card.boderEffect {
  border: 1px solid #ccc;
}
.card.shadowEffect {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
}
.card.animation {
  transition: opacity 0.4s ease-out, left 0.4s ease-out, top 0.4s ease-out, width 0.4s ease-out,
    height 0.4s ease-out;
}
</style>
