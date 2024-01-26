import { UserType } from "../types/user";

const USER_LOCAL_STORAGE_KEY = "user";

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
  if (user.highScores.length === 0) newHighScores.push(newScore);
  let hasPushed = false;
  for (const score of user.highScores) {
    if (score < newScore && !hasPushed) {
      newHighScores.push(newScore);
      hasPushed = true;
    }
    if (newHighScores.length < 10) newHighScores.push(score);
  }
  setUserToStorage({ ...user, highScores: newHighScores });
};
