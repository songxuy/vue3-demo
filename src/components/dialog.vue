<template>
  <teleport to="#dialog">
    <div class="dialog">
      <div class="dialog_wrapper">
        <div class="dialog_header" v-if="title">
          <slot name="header">
            <span>{{ title }}</span>
          </slot>
        </div>
      </div>
      <div class="dialog_content">
        <slot></slot>
      </div>
      <div class="dialog_footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </teleport>
</template>
<script>
import { reactive, toRefs } from 'vue';
import { Button, Input } from 'ant-design-vue';
export default {
  components: {
    [Button.name]: Button,
    [Input.name]: Input,
  },
  setup() {
    const state = reactive({
      title: 'hello world',
      content: 'this is content as a good boy asdasd sdfasfsaf safasf',
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
