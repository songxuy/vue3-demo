<template>
  <ul class="flex">
    <ScrollNum v-for="(num, idx) of numArr" :key="idx" as="li" :i="num" :delay="idx + 1" />
  </ul>
</template>

<script>
import ScrollNum from '@/components/scrollNum.vue';

export default {
  name: 'App',
  components: { ScrollNum },
  data: () => ({ num: 886 }),
  computed: {
    numArr() {
      const str = String(this.num);

      return [parseInt(str[0]), parseInt(str[1]), parseInt(str[2])];
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  position: relative;
  width: 100px;
  margin: 30px auto;
  align-items: center;
  justify-content: space-evenly;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
