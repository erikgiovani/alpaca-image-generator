export const dinamicCanvas = (width: number) => {
  if (width >= 1200) {
    return 600;
  }

  if (width >= 600) {
    return 300;
  }

  return 150;
};
