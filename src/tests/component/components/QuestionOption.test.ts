import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuestionOption from "../../../components/game/QuestionOption.vue";

describe("Question Option Component", () => {
  test("Default styles when user hasn't chosen", () => {
    const wrapper = mount(QuestionOption, {
      props: {
        userChose: false,
        isCorrect: false,
      },
    });
    const card = wrapper.find("div");
    expect(card.classes()).toStrictEqual([]);
  });

  test("Correct class applied on correct card after user has chosen", () => {
    const wrapper = mount(QuestionOption, {
      props: {
        userChose: true,
        isCorrect: true,
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
      },
    });
    const card = wrapper.find(".incorrect");
    expect(card.exists()).toBe(true);
  });
});
