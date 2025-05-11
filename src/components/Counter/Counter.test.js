import { mount } from "@vue/test-utils";
import Counter from "./Counter.vue";

describe("Counter.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Counter);
  });

  it("renders the initial count", () => {
    expect(wrapper.text()).toContain("Count: 0");
  });

  it('increments the count when "Increment" button is clicked', async () => {
    const incrementButton = wrapper.find("button:nth-of-type(1)");

    await incrementButton.trigger("click");
    expect(wrapper.text()).toContain("Count: 1");

    await incrementButton.trigger("click");
    expect(wrapper.text()).toContain("Count: 2");
  });

  it('resets the count when "Reset" button is clicked', async () => {
    const incrementButton = wrapper.find("button:nth-of-type(1)");
    const resetButton = wrapper.find("button:nth-of-type(2)");

    await incrementButton.trigger("click");
    await incrementButton.trigger("click");
    expect(wrapper.text()).toContain("Count: 2");

    await resetButton.trigger("click");
    expect(wrapper.text()).toContain("Count: 0");
  });
});
