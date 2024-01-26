import { mount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import EndScreen from "../../../components/game/EndScreen.vue";

vi.mock("vue-router");

describe("End Screen Component", () => {
  test("Score is displayed as new/total questions", () => {
    const wrapper = mount(EndScreen, {
      props: {
        score: 10,
        totalCount: 15,
      },
    });
    const resultParagraph = wrapper.find("p");
    expect(resultParagraph.text().includes("10/15")).toBe(true);
  });
});
