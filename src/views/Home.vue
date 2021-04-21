<!--
 * @Author: your name
 * @Date: 2020-11-18 11:15:27
 * @LastEditTime: 2020-12-10 16:26:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-vue3\src\views\Home.vue
-->
<template>
  <div class="home">
    <hello-world />
    <img data-src="@/assets/logo.png" />
    <About msg="hello"></About>
    <a-form layout="inline" :model="state.form">
      <a-form-item>
        <a-input v-model:value="state.form.user" placeholder="Username">
          <template v-slot:prefix><UserOutlined style="color:rgba(0,0,0,.25)"/></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-model:value="state.form.password" type="password" placeholder="Password">
          <template v-slot:prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          :disabled="state.form.user === '' || state.form.password === ''"
          @click="handleSubmit"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
    <a-button @click="goBack">test</a-button>
  </div>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { Form, Input, Button } from 'ant-design-vue';
import { reactive, defineComponent } from 'vue';
import About from '@/views/About.vue';
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld.vue';
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Input.name]: Input,
    [Button.name]: Button,
    About,
    HelloWorld,
  },
  setup() {
    const state = reactive({
      form: {
        user: '',
        password: '',
      },
    });
    /* axios.get('http://localhost:8090/submit'); */
    function handleSubmit() {
      console.log(state.form);
    }
    function goBack() {
      window.history.go(-1);
    }
    return {
      state,
      handleSubmit,
      goBack,
    };
  },
});
</script>
