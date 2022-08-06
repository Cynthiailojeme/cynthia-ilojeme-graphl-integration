import Storage from "./storage";

export const clearUserStorage = () => {
  Storage.remove("user-token");
};
