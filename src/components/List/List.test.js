import { mount } from "@vue/test-utils";
import List from "./List.vue";

describe("List.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(List);
  });

  it("filters users by name when search query changes", async () => {
    const input = wrapper.find("input");

    const items = wrapper.findAll("li");
    await input.setValue("bob");
    const filteredItems = wrapper.findAll("li");
    expect(filteredItems.length < items.length).toBe(true);
    expect(filteredItems[0].text()).toContain("Bob");
  });

  it("shows message when no users match the search", async () => {
    const input = wrapper.find("input");

    await input.setValue("SDG79sg724ghf942h98s7gag35ytg3dfg");
    expect(wrapper.findAll("li")).toHaveLength(0);
    expect(wrapper.text()).toContain("No users found.");
  });
});
