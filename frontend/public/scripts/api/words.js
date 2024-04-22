import { BACKEND_URL } from "../config.js";

export const createWord = async (word) => {
  const response = await fetch(`${BACKEND_URL}/word`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ word }),
  });
  return response.json();
};
