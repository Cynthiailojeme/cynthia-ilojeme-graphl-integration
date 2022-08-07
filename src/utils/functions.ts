import Storage from "./storage";

export const clearUserStorage = () => {
  Storage.remove("user-token");
};

export const cleanUp = (obj: { [x: string]: any; }) => {
  for (var propName in obj) {
    if (obj[propName] === "") {
      delete obj[propName];
    }
  }
  delete obj.confirm_password
  return obj
}