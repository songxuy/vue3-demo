<template>
  <div class="animate">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="交错列表"> </a-tab-pane>
      <a-tab-pane key="2" tab="段落列表" force-render> </a-tab-pane>
      <a-tab-pane key="3" tab="翻转列表"> </a-tab-pane>
      <a-tab-pane key="4" tab="跟进列表"> </a-tab-pane>
    </a-tabs>
    <div class="comp">
      <transition name="component-fade" mode="out-in">
        <component :is="view"></component>
      </transition>
    </div>
    <Dialog v-if="true"></Dialog>
  </div>
</template>
<script>
import { ref } from 'vue';
import { Tabs } from 'ant-design-vue';
import Animate1 from '@/components/animate1';
import Animate2 from '@/components/animate2';
import Animate3 from '@/components/animate3';
import Animate4 from '@/components/animate4';
import Dialog from '@/components/dialog.vue';
export default {
  components: {
    [Tabs.name]: Tabs,
    [Tabs.TabPane.name]: Tabs.TabPane,
    Animate1,
    Animate2,
    Animate3,
    Animate4,
    Dialog,
  },
  setup() {
    const view = ref('Animate1');
    const callback = key => {
      view.value = 'Animate' + key;
    };
    return {
      callback,
      view,
    };
  },
};
</script>
<style scoped>
.animate {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
/* .tab {
  height: 46px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
} */

.comp {
  position: relative;
  height: calc(100% - 62px);
  overflow-y: scroll;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
