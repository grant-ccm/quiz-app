import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import HighScoreBoard from "../../../components/HighScoreBoard.vue";

describe("High Score Board Component", () => {
  test("Scores are displayed in descending order", () => {
    const wrapper = mount(HighScoreBoard, {
      props: {
        scores: [4, 2],
      },
    });

    const scores = wrapper.findAll("td");
    expect(scores.length).toBe(2);
    expect(scores[0].text()).toBe("4");
    expect(scores[1].text()).toBe("2");
  });
});
