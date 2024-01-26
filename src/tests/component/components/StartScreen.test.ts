import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import StartScreen from "../../../components/game/StartScreen.vue";

describe("Start Screen Component", () => {
  test("Slider displays number of questions (defaults to 5)", () => {
    const wrapper = mount(StartScreen);

    const sliderLabel = wrapper.find('label[for="limit"]');
    expect(sliderLabel.text().includes("5")).toBe(true);
  });
});
