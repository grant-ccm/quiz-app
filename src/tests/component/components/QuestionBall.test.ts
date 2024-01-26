import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuestionBall from "../../../components/game/QuestionBall.vue";

describe("Question Ball Component", () => {
  test("Past class is applied correctly", () => {
    const wrapper = mount(QuestionBall, {
      props: {
        playerIndex: 10,
        thisIndex: 4,
      },
    });
    const ball = wrapper.find(".past");
    expect(ball.exists()).toBe(true);
  });

  test("Present class is applied correctly", () => {
    const wrapper = mount(QuestionBall, {
      props: {
        playerIndex: 10,
        thisIndex: 10,
      },
    });
    const ball = wrapper.find(".present");
    expect(ball.exists()).toBe(true);
  });

  test("Future class is applied correctly", () => {
    const wrapper = mount(QuestionBall, {
      props: {
        playerIndex: 10,
        thisIndex: 15,
      },
    });
    const ball = wrapper.find(".future");
    expect(ball.exists()).toBe(true);
  });
});
