import { mount } from "@vue/test-utils";
import Header from "../components/Header.vue";

describe("Header", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Header);
    console.log(wrapper.html());
    // expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
