import { describe, expect, test, vi } from "vitest";
import axios from "axios";
import { getQuestions } from "../../api/quiz";
import { API_URL } from "../../constants";
import { QuestionConfigOptions } from "../../types/game";

vi.mock("axios");

describe("Quiz API Calls", () => {
  describe("getQuestions", () => {
    const questionMock = {
      id: "fafsdfwe123fw",
      question: { text: "Question?" },
    };
    const mockedResponse = Array.from({ length: 5 }, () => ({
      ...questionMock,
    }));

    test("Make a GET request for 5 questions", async () => {
      vi.mocked(axios.get).mockResolvedValue({
        data: mockedResponse,
      });

      const response = await getQuestions(5);
      const expectedURL = API_URL + "/questions?limit=5";
      expect(axios.get).toHaveBeenCalledWith(expectedURL);
      expect(response).toStrictEqual(mockedResponse);
    });

    test("Make a GET request with one category", async () => {
      vi.mocked(axios.get).mockResolvedValue({
        data: mockedResponse,
      });

      const questionOptions: QuestionConfigOptions = { categories: ["music"] };
      await getQuestions(5, questionOptions);
      const expectedURL = API_URL + "/questions?limit=5&categories=music";
      expect(axios.get).toHaveBeenCalledWith(expectedURL);
    });

    test("Make a GET request with multiple categories", async () => {
      vi.mocked(axios.get).mockResolvedValue({
        data: mockedResponse,
      });

      const questionOptions: QuestionConfigOptions = {
        categories: ["music", "geography"],
      };
      await getQuestions(5, questionOptions);
      const expectedURL =
        API_URL + "/questions?limit=5&categories=music,geography";
      expect(axios.get).toHaveBeenCalledWith(expectedURL);
    });

    test("Make a GET request with a difficulty", async () => {
      vi.mocked(axios.get).mockResolvedValue({
        data: mockedResponse,
      });

      const questionOptions: QuestionConfigOptions = {
        difficulty: "easy",
      };
      await getQuestions(5, questionOptions);
      const expectedURL = API_URL + "/questions?limit=5&difficulty=easy";
      expect(axios.get).toHaveBeenCalledWith(expectedURL);
    });

    test("Make a GET request with categories and a difficulty", async () => {
      vi.mocked(axios.get).mockResolvedValue({
        data: mockedResponse,
      });

      const questionOptions: QuestionConfigOptions = {
        categories: ["music", "geography"],
        difficulty: "easy",
      };
      await getQuestions(5, questionOptions);
      const expectedURL =
        API_URL +
        "/questions?limit=5&categories=music,geography&difficulty=easy";
      expect(axios.get).toHaveBeenCalledWith(expectedURL);
    });

    test("Expect false when an error occurs", async () => {
      vi.mocked(axios.get).mockRejectedValue(new Error("Error!"));
      const response = await getQuestions(5);
      expect(response).toStrictEqual(false);
    });
  });
});
