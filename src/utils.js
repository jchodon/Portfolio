export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
//takes the relative path of the website(passed in the parameter), takes the base url of the website(import.meta.url)-appends the relative path
//and returns the url. makes it easier to dynamically import images into the different components
