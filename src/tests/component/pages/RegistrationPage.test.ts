import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import RegistrationPage from "../../../pages/register/index.vue";

describe("Registration Page", () => {
  test("No errors displayed by default", () => {
    const wrapper = mount(RegistrationPage);
    const error = wrapper.find(".error-text");
    expect(error.text()).toBe("");
  });
});
