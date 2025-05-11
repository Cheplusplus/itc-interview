import { mount } from "@vue/test-utils";
import Form from "./Form.vue";

describe("Form.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Form);
  });

  it("shows error messages when submitting empty form", async () => {
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.text()).toContain("Name is required");
    expect(wrapper.text()).toContain("Email is required");
    expect(wrapper.text()).toContain("Password is required");
  });

  it("validates email format", async () => {
    await wrapper.find('input[type="text"]').setValue("John");
    await wrapper.find('input[type="email"]').setValue("invalid-email");
    await wrapper.find('input[type="password"]').setValue("123456");
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.text()).toContain("Email is not valid");
  });

  it("validates password length", async () => {
    await wrapper.find('input[type="text"]').setValue("John");
    await wrapper.find('input[type="email"]').setValue("john@example.com");
    await wrapper.find('input[type="password"]').setValue("123");
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.text()).toContain("Password must be at least 6 characters");
  });

  it("submits successfully when all fields are valid", async () => {
    window.alert = jest.fn(); // mock alert
    await wrapper.find('input[type="text"]').setValue("John");
    await wrapper.find('input[type="email"]').setValue("john@example.com");
    await wrapper.find('input[type="password"]').setValue("123456");
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.text()).not.toContain("required");
    expect(window.alert).toHaveBeenCalledWith("Form submitted successfully!");
  });
});
