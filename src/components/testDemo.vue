<template>
  <div class="test_demo">
    <input v-model="state.user" />
    <input v-model="state.password" />
    {{ msg }}
    <button @click="handleSubmit">submit</button>
    <button @click="goBack">back</button>
  </div>
</template>
<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: {},
  props: {
    msg: String,
  },
  setup() {
    const state = reactive({
      user: '',
      password: '',
      arr: [],
    });
    const router = useRouter();
    function handleSubmit() {
      if (!state.user || !state.password) {
        console.log('不能为空');
        return false;
      }
      return true;
    }
    function goBack() {
      router.back();
    }
    return {
      state,
      handleSubmit,
      goBack,
    };
  },
};
</script>
<style scoped>
.test_demo {
  margin-top: 50px;
}
</style>
