export const getStoredSlide = (): number => {
  const storedValue = window.localStorage.getItem('slide');

  if (storedValue === null) {
    return 0;
  }

  return parseInt(storedValue, 10);
};

export const storeSlide = (slide: number) => window.localStorage.setItem('slide', slide.toString());
