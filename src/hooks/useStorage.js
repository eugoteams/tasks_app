/** @format */

import { useCallback } from "react";

const useStorage = () => {
  const KEY = "TASKS_DB";

  const saveTasks = useCallback((data) => {
    localStorage.setItem(KEY, JSON.stringify(data));
  }, []);

  const getTasks = useCallback((data) => {
    let dataStored = localStorage.getItem(KEY);
    return dataStored ? JSON.parse(dataStored) : "empty";
  }, []);

  return { saveTasks, getTasks };
};

export default useStorage;
