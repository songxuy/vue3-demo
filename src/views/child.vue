<template>
  <div class="child">
    <input :value="value" @input="_handleChangeValue" />
    <input :value="title" @input="_handleChangeTitle" />
    <a-button @click="changeValue('xiuxiu')">change value</a-button>
    <a-button @click="changeTitle('biubiu')">change title</a-button>
  </div>
</template>
<script>
import { Button } from 'ant-design-vue';
export default {
  components: {
    [Button.name]: Button,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    function _handleChangeValue(e) {
      emit('update:value', e.target.value);
    }
    function _handleChangeTitle(e) {
      emit('update:title', e.target.value);
    }
    function changeValue(str) {
      emit('update:value', str);
    }
    function changeTitle(str) {
      emit('update:title', str);
    }
    return {
      _handleChangeValue,
      _handleChangeTitle,
      changeValue,
      changeTitle,
    };
  },
};
</script>
