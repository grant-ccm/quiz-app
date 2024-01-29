import { afterEach, describe, expect, test, vi } from "vitest";
import { USER_LOCAL_STORAGE_KEY } from "../../constants";
import {
  getUserFromStorage,
  setUserToStorage,
  updateUserScores,
} from "../../helpers/user";

describe("User Local Storage Calls", () => {
  const user = { name: "name", highScores: [4, 3, 1] };
  const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
  const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

  afterEach(() => {
    localStorage.clear();
    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });

  describe("getUserFromStorage", () => {
    test("Get existing user from localStorage", () => {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
      const result = getUserFromStorage();

      expect(result).toStrictEqual(user);
      expect(getItemSpy).toHaveBeenCalledWith(USER_LOCAL_STORAGE_KEY);
    });

    test("Get undefined when user does not exist", () => {
      const result = getUserFromStorage();
      expect(result).toStrictEqual(undefined);
    });
  });

  describe("setUserToStorage", () => {
    test("Set a user to localStorage", () => {
      setUserToStorage(user);
      expect(getUserFromStorage()).toStrictEqual(user);
      expect(setItemSpy).toHaveBeenCalledWith(
        USER_LOCAL_STORAGE_KEY,
        JSON.stringify(user)
      );
    });
  });

  describe("updateUserScores", () => {
    const fullScores = [23, 22, 20, 20, 19, 15, 12, 10, 8, 5];
    const full10User = {
      name: "name",
      highScores: fullScores,
    };

    const fewerScores = [10, 8, 5];
    const fewerThan10User = {
      name: "name",
      highScores: fewerScores,
    };

    const noScoreUser = {
      name: "name",
      highScores: [],
    };

    test("Nothing is set if user is not found", () => {
      updateUserScores(3);
      expect(setItemSpy).toHaveBeenCalledTimes(0);
    });

    test("New score is not in the top 10 and is discarded", () => {
      setUserToStorage(full10User);
      updateUserScores(3);
      expect(getUserFromStorage()).toStrictEqual(full10User);
    });

    test("New score is in the top 10 pops lowest", () => {
      const newScore = 16;
      const expectedScores = [
        ...fullScores.slice(0, 5),
        newScore,
        ...fullScores.slice(5, -1),
      ];
      setUserToStorage(full10User);
      updateUserScores(newScore);
      expect(getUserFromStorage()?.highScores).toStrictEqual(expectedScores);
    });

    test("Fewer than 10 scores so new score is added", () => {
      const newScore = 3;
      const expectedScores = [...fewerScores, newScore];
      setUserToStorage(fewerThan10User);
      updateUserScores(newScore);
      expect(getUserFromStorage()?.highScores).toStrictEqual(expectedScores);
    });

    test("No scores so new score is added", () => {
      const newScore = 9;
      const expectedScores = [newScore];
      setUserToStorage(noScoreUser);
      updateUserScores(newScore);
      expect(getUserFromStorage()?.highScores).toStrictEqual(expectedScores);
    });
  });
});
