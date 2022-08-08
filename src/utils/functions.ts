import Storage from "./storage";

export const clearUserStorage = () => {
  Storage.remove("user-token");
  window.location.href = "/identification";
};

export const cleanUp = (obj: any) => {
  for (var propName in obj) {
    if (obj[propName] === "") {
      delete obj[propName];
    }
  }
  delete obj.confirm_password;
  return obj;
};

export const formatDate = (data: string) => {
  const date = new Date(data);
  return date?.toUTCString();
};
