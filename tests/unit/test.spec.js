import TestDemo from '@/components/testDemo.vue';
import { shallowMount } from '@vue/test-utils';
import Axios from 'axios';
describe('组件变量类型', () => {
  it('数组类型测试', () => {
    expect(Array.isArray(TestDemo.setup().state.arr)).toBeTruthy();
  });
  it('字符串类型测试 ', () => {
    expect(typeof TestDemo.setup().state.user).toBe('string');
  });
});

describe('组件函数返回', () => {
  it('submit 函数', () => {
    expect(TestDemo.setup().handleSubmit()).toBeFalsy();
  });
});

describe('prop 验证', () => {
  it('props 测试', () => {
    const msg = 'hello world';
    const wrapper = shallowMount(TestDemo, {
      props: { msg },
    });
    expect(wrapper.vm.msg).toMatch(msg);
  });
});

describe('检查接口', () => {
  it('检查接口', async () => {
    let { data } = await Axios.get('http://192.168.1.145:3000/submit');
    expect(data.code).toBe(200);
  });
});
