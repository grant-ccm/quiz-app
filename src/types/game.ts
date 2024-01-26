export enum GameStates {
  Start,
  Playing,
  End,
}

export type Category =
  | "music"
  | "sport_and_leisure"
  | "film_and_tv"
  | "arts_and_literature"
  | "history"
  | "society_and_culture"
  | "science"
  | "geography"
  | "food_and_drink"
  | "general_knowledge";

export type Difficulty = "easy" | "medium" | "hard";

export type Question = {
  id: string;
  category: Category;
  tags: string[];
  difficulty: Difficulty;
  isNiche: boolean;
  question: { text: string };
  correctAnswer: string;
  incorrectAnswers: string[];
  type: "text_choice";
  regions?: string[];
};

export type QuestionConfigOptions = {
  categories?: Category[];
  difficulty?: Difficulty;
};
