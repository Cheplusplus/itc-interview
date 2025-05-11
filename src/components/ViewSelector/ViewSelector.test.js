import { mount } from "@vue/test-utils";
import ViewSelector from "./ViewSelector.vue";
import "@testing-library/jest-dom";

describe("ViewSelector.vue", () => {
  it("Selects the component to display based on a ref", async () => {
    const wrapper = mount(ViewSelector);
    const Component = wrapper.find('[data-testid="user-profile"]');
    expect(Component.exists()).toBe(true);
    expect(Component.isVisible()).toBe(true);
    await wrapper.find("#settings-btn").trigger("click");
    const Component2 = wrapper.find('[data-testid="user-settings"]');
    expect(Component2.exists()).toBe(true);
    expect(Component2.isVisible()).toBe(true);
    await wrapper.find("#posts-btn").trigger("click");
    const Component3 = wrapper.find('[data-testid="user-posts"]');
    expect(Component3.exists()).toBe(true);
    expect(Component3.isVisible()).toBe(true);
  });
});
