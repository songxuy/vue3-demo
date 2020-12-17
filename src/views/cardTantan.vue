<template>
  <div class="tantan">
    <div
      v-if="actionName != ''"
      style="color:#fff;background: rgba(0,0,0,.3);padding:10px 20px;font-size:24px;position: absolute;z-index:999;left: 50%;top:50%;transform: translate(-50%,-50%);"
    >
      {{ actionName }}
    </div>
    <ezflycard
      @ondragmove="onCardDragMove"
      @ondragstop="onCardDragStop"
      @onthrowdone="onCardThrowDone"
      :cardWidth="200"
      :cardHeight="240"
      :throwTriggerDistance="100"
      :hasShadow="true"
    >
      <template v-slot:firstCard style="width:100%;height:100%;">
        <div v-if="cards[0]" class="tantanCard">
          <img :src="cards[0].image" style="width: 100%;height: 100%;" mode="aspectFill" />
        </div>
      </template>
      <template v-slot:secondCard style="width:100%;height:100%;">
        <div v-if="cards[1]" class="tantanCard">
          <img :src="cards[1].image" style="width: 100%;height: 100%;" mode="aspectFill" />
        </div>
      </template>
      <template v-slot:thirdCard style="width:100%;height:100%;">
        <div v-if="cards[2]" class="tantanCard">
          <img :src="cards[2].image" style="width: 100%;height: 100%;" mode="aspectFill" />
        </div>
      </template>
    </ezflycard>
  </div>
</template>

<script>
import ezflycard from '@/components/ezflycard.vue';
import { reactive, toRefs } from 'vue';
export default {
  components: {
    ezflycard,
  },
  setup() {
    const state = reactive({
      title: 'Hello',
      actionName: '',
      cards: [
        {
          image: require('../assets/bjt.jpeg'),
        },
        {
          image: require('../assets/saye.jpg'),
        },
        {
          image: require('../assets/bjt.jpeg'),
        },
        {
          image: require('../assets/saye.jpg'),
        },
      ],
    });
    const onCardDragMove = obj => {
      /* console.log(obj); */
      if (obj.left < -10) {
        state.actionName = '不喜欢';
      } else if (obj.left > 10) {
        state.actionName = '喜欢';
      } else {
        state.actionName = '';
      }
    };
    const onCardDragStop = obj => {
      state.actionName = '';
    };
    const onCardThrowDone = obj => {
      state.cards.splice(0, 1);
    };
    return {
      ...toRefs(state),
      onCardDragMove,
      onCardDragStop,
      onCardThrowDone,
    };
  },
};
</script>

<style>
.tantan {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
}

div {
  box-sizing: border-box;
}

.tantanCard {
  width: 100%;
  height: 100%;
}
</style>
