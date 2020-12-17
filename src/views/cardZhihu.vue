<template>
  <div class="zhihu">
    <ezflycard
      @ondragmove="onCardDragMove"
      @ondragstop="onCardDragStop"
      @onthrowdone="onCardThrowDone"
      :cardWidth="300"
      :cardHeight="120"
      :throwTriggerDistance="100"
      dragDirection="horizontal"
      :hasShadow="true"
    >
      <template v-slot:firstCard style="width:100%;height:100%;">
        <div v-if="cards[0]" class="zhihuCard">
          <div>{{ cards[0].title }}</div>
          <div>
            <div>{{ cards[0].followcount }} 关注</div>
            <div>
              <button disabled="">忽略</button>
              <button type="primary">回答</button>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:secondCard style="width:100%;height:100%;">
        <div v-if="cards[1]" class="zhihuCard">
          <div>{{ cards[1].title }}</div>
          <div>
            <div>{{ cards[1].followcount }} 关注</div>
            <div>
              <button disabled="">忽略</button>
              <button type="primary">回答</button>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:thirdCard style="width:100%;height:100%;">
        <div v-if="cards[2]" class="zhihuCard">
          <div>{{ cards[2].title }}</div>
          <div>
            <div>{{ cards[2].followcount }} 关注</div>
            <div>
              <button disabled="">忽略</button>
              <button type="primary">回答</button>
            </div>
          </div>
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
      cards: [
        {
          title: 'js数组怎么遍历删除指定元素，最后全部删除？',
          followcount: 6,
        },
        {
          title: '前端自学，前后端的交互应该学哪些，要重点学哪里？',
          followcount: 13,
        },
        {
          title: '我们花那么多时间在游戏《塞尔达传说：旷野之息》里，到底得到了什么？',
          followcount: 29,
        },
        {
          title: '跪求这个图片用HTML，CSS如何做出来？',
          followcount: 6,
        },
      ],
    });
    const onCardDragMove = obj => {
      console.log(obj);
    };
    const onCardDragStop = obj => {
      console.log(obj);
    };
    const onCardThrowDone = obj => {
      state.cards.splice(0, 1);
    };
    return {
      ...toRefs(state),
      onCardDragStop,
      onCardThrowDone,
      onCardDragMove,
    };
  },
};
</script>

<style>
.zhihu {
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
.zhihuCard {
  padding: 10px;
}
.zhihuCard:nth-child(1) {
  font-size: 18px;
}
.zhihuCard > div:nth-child(2) {
  display: flex;
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 10px;
  padding: 0px 10px;
}
.zhihuCard > div:nth-child(2) > div:nth-child(1) {
  flex: 1;
  font-size: 14px;
  color: #666;
}
.zhihuCard > div:nth-child(2) > div:nth-child(2) {
  display: flex;
}
.zhihuCard > div:nth-child(2) > div:nth-child(2) > button:nth-child(2) {
  margin-left: 5px;
}
button {
  height: 24px;
  line-height: 24px;
  font-size: 12px;
}
</style>
