<template>
  <div class="animate">
    <!-- <div class="tab"> -->
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Tab 1"> </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render> </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3"> </a-tab-pane>
      <a-tab-pane key="4" tab="Tab 4"> </a-tab-pane>
    </a-tabs>
    <!-- </div> -->
    <div class="comp">
      <component :is="view"></component>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { Tabs } from 'ant-design-vue';
import Animate1 from '@/components/animate1';
import Animate2 from '@/components/animate2';
import Animate3 from '@/components/animate3';
import Animate4 from '@/components/animate4';
export default {
  components: {
    [Tabs.name]: Tabs,
    [Tabs.TabPane.name]: Tabs.TabPane,
    Animate1,
    Animate2,
    Animate3,
    Animate4,
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
</style>
