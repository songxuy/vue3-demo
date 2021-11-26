<template>
  <Suspense>
    <template #default>
      <async-component></async-component>
    </template>
    <template #fallback>
      <div>
        Loading...
      </div>
    </template>
  </Suspense>
</template>
<script>
import AsyncComponent from '@/components/asyncComponent.vue';
export default {
  components: {
    AsyncComponent,
  },
};
</script>
