import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import GamePage from "../../../pages/play/index.vue";

describe("Game Page", () => {
  test("Only one page component rendered at a time", () => {
    const wrapper = mount(GamePage);
    expect(wrapper.element.childElementCount).toBe(1);
  });
});
