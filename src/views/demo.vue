<template>
  <div class="demo">
    <Child v-model:value="state.value" v-model:title="state.title"></Child>
    <button @click="goHome">go home</button>
  </div>
</template>
<script>
import { reactive } from 'vue';
import Child from './child';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
export default {
  components: {
    Child,
  },
  beforeRouteEnter(from, to, next) {
    console.log('enter');
    next();
  },
  setup() {
    /* const count = ref(0);
    const object = reactive({ foo: 'bar' });

    return () => h('div', [count.value, object.foo]); */
    const route = useRoute();
    // 获取路由实例
    const router = useRouter();
    console.log(route.path);
    console.log(router);
    const state = reactive({
      value: '0',
      title: 'test',
    });
    const goHome = () => {
      router.push('/');
    };
    onBeforeRouteUpdate(() => {
      console.log('update');
    });
    return {
      state,
      goHome,
    };
  },
};
</script>
