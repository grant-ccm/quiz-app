import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuestionOption from "../../../components/game/QuestionOption.vue";

describe("Question Option Component", () => {
  test("Default styles when user hasn't chosen", () => {
    const wrapper = mount(QuestionOption, {
      props: {
        userChose: false,
        isCorrect: false,
        text: "",
      },
    });
    const card = wrapper.find(".unselected");
    expect(card.exists()).toBe(true);
  });

  test("Correct class applied on correct card after user has chosen", () => {
    const wrapper = mount(QuestionOption, {
      props: {
        userChose: true,
        isCorrect: true,
        text: "",
      },
    });
    const card = wrapper.find(".correct");
    expect(card.exists()).toBe(true);
  });

  test("Incorrect class applied on incorrect card after user has chosen", () => {
    const wrapper = mount(QuestionOption, {
      props: {
        userChose: true,
        isCorrect: false,
        text: "",
      },
    });
    const card = wrapper.find(".incorrect");
    expect(card.exists()).toBe(true);
  });
});
