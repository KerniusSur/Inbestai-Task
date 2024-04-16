import PostCode from "models/postcode/PostCode";

export const POSTCODE_KEY = "postcodes";
export const KEY = "redux";

export const addPostCodeToStorage = (postCode: PostCode) => {
  try {
    const existingPostCodes: PostCode[] | null = loadPostCodes();
    if (existingPostCodes) {
      existingPostCodes.unshift(postCode);
      const serializedState = JSON.stringify(existingPostCodes);
      localStorage.setItem(POSTCODE_KEY, serializedState);
      return;
    }

    const postCodes = [postCode];
    const serializedState = JSON.stringify(postCodes);
    localStorage.setItem(POSTCODE_KEY, serializedState);
  } catch (e) {
    // Ignore
  }
};

export const savePostCodes = (postCodes: PostCode[]) => {
  try {
    const serializedState = JSON.stringify(postCodes);
    localStorage.setItem(POSTCODE_KEY, serializedState);
  } catch (e) {
    // Ignore
  }
};

export const loadPostCodes = () => {
  try {
    const serializedCodes = localStorage.getItem(POSTCODE_KEY);
    if (!serializedCodes) {
      return undefined;
    }
    const parsedCodes = JSON.parse(serializedCodes);
    return parsedCodes;
  } catch (e) {
    return undefined;
  }
};
