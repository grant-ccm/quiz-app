import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuestionPrompt from "../../../components/game/QuestionPrompt.vue";

describe("Question Prompt Component", () => {
  test("Four question options are rendered", () => {
    const wrapper = mount(QuestionPrompt, {
      props: {
        question: {
          id: "",
          category: "music",
          tags: [],
          difficulty: "easy",
          isNiche: false,
          type: "text_choice",
          question: {
            text: "",
          },
          correctAnswer: "",
          incorrectAnswers: ["", "", ""],
        },
        userChose: false,
      },
    });

    const answers = wrapper.find(".options-container");
    expect(answers.element.childElementCount).toBe(4);
  });
});
