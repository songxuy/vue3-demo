import Animate from '@/components/animate1.vue';
describe('animate 组件参数', () => {
  it('view', () => {
    expect(Array.isArray(Animate.setup().arr.value)).toBeTruthy();
  });
});
