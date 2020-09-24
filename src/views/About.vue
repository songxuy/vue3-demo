<template>
  <div class="about">
    <!-- <h1 @click="changeName">{{ state.name }}</h1>
    <h4>{{ age }}</h4> -->
    <h5>{{ msg }}</h5>
    <a-button @click="changeAge">add</a-button>
    <a-input v-model:value="state.name" placeholder="Basic usage" />
    <a-input v-model:value="age" placeholder="Basic usage" />
  </div>
</template>
<script>
import { computed, reactive, ref, watch } from 'vue';
import { Button, Input } from 'ant-design-vue';
export default {
  components: {
    [Button.name]: Button,
    [Input.name]: Input,
  },
  setup() {
    const state = reactive({
      name: '子君',
    });
    const age = ref(0);
    const changeName = () => {
      state.name = 'hello, world';
    };
    const changeAge = () => {
      age.value++;
    };
    watch(age, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    const msg = computed(() => {
      return state.name + age.value;
    });
    const obj = {};
    const state1 = reactive(obj);
    // 输出false
    console.log(obj === state1);
    return {
      state,
      changeName,
      age,
      changeAge,
      msg,
    };
  },
};
</script>
