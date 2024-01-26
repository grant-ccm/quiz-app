import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import HomePage from "../../../pages/index.vue";

describe("Home Page", () => {
  test("Nothing displays when user is not found", () => {
    const wrapper = mount(HomePage);
    const container = wrapper.find("div");
    expect(container.exists()).toBe(false);
  });
});
