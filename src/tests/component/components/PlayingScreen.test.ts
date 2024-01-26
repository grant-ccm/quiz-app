import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import PlayingScreen from "../../../components/game/PlayingScreen.vue";

describe("Playing Screen Component", () => {
  test("Button container is hidden when player hasn't selected", () => {
    const wrapper = mount(PlayingScreen, {
      props: {
        questions: [
          {
            question: {
              text: "",
            },
            correctAnswer: "",
            incorrectAnswers: ["", "", ""],
          },
        ],
      },
    });

    const buttons = wrapper.find(".button-container");
    expect(buttons.exists()).toBe(false);
  });
});
