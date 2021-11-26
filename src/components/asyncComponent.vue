<template>
  <div>
    <h4>这个是一个异步加载数据</h4>
    <p>用户名：{{ user.nickname }}</p>
    <p>年龄：{{ user.age }}</p>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  async setup() {
    const state = reactive({
      user: {},
    });
    await setTimeout(() => {
      state.user = {
        nickname: 'sxy',
        age: 12,
      };
    }, 3000);
    return {
      ...toRefs(state),
    };
  },
});
</script>
