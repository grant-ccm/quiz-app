import axios from "axios";
import { Question, QuestionConfigOptions } from "../types/game";
import { API_URL } from "../constants";

// Max 50 limit
export const getQuestions = async (
  limit: number,
  options: QuestionConfigOptions = {}
) => {
  try {
    let reqURL = "";
    const { categories, difficulty } = options;
    if (categories) reqURL += "&categories=" + categories.join(",");
    if (difficulty) reqURL += "&difficulty=" + difficulty;
    reqURL = "?" + "limit=" + limit + reqURL;
    const response = await axios.get<Question[]>(
      `${API_URL}/questions${reqURL}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
