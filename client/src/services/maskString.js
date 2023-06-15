export const maskString = (str) => {
  return str.replace(/-/gi, "").match(/..?/g).join("-");
};
