import { mount } from "@vue/test-utils";
import PersonalisedGreeting from "./PersonalisedGreeting.vue";

describe("Greeting.vue", () => {
  it("displays a greeting message using the name prop", () => {
    const wrapper = mount(PersonalisedGreeting, {
      props: {
        name: "Alice",
      },
    });

    expect(wrapper.props()).toEqual({ name: "Alice" });
  });
});
