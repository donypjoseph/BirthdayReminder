export const ADD_USER = "ADD_USER";

export const addUser = (name) => {
  return { type: ADD_USER, name: name };
};
