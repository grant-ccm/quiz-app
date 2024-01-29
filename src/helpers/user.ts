import { USER_LOCAL_STORAGE_KEY } from "../constants";
import { UserType } from "../types/user";

export const getUserFromStorage = (): UserType | undefined => {
  const res = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return res ? JSON.parse(res) : undefined;
};

export const setUserToStorage = (user: UserType) => {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
};

export const updateUserScores = (newScore: number) => {
  const user = getUserFromStorage();
  if (!user) return;
  const newHighScores = [];
  let hasPushed = false;
  for (const score of user.highScores) {
    if (score < newScore && !hasPushed) {
      newHighScores.push(newScore);
      hasPushed = true;
    }
    if (newHighScores.length < 10) newHighScores.push(score);
  }
  if (!hasPushed && user.highScores.length < 10) newHighScores.push(newScore);
  setUserToStorage({ ...user, highScores: newHighScores });
};
