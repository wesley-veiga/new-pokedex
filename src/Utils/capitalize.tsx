export const capitalize = (text: string) => {
  if (text.length === 0) return "";

  return text.charAt(0).toUpperCase() + text.substring(1);
};
