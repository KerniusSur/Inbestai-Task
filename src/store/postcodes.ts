import PostCodeContent from "../models/postcode/PostCodeContent";
import { store } from "./configureStore";
import {
  addPostCode,
  clearSuggestions,
  lookupPostCode,
  removePostCode,
} from "./modules/postcode/actions";

const postcodes = {
  add: (newPostcode: PostCodeContent): void => {
    store.dispatch(addPostCode(newPostcode));
  },
  remove: (postcodeToRemove: PostCodeContent): void => {
    store.dispatch(removePostCode(postcodeToRemove));
  },
  lookup: async (newPostcode: string) => {
    store.dispatch(lookupPostCode(newPostcode));
  },
  clearSuggestions: () => {
    store.dispatch(clearSuggestions());
  },
  autocomplete: async (wrongPostcode: string) => {
    store.dispatch(lookupPostCode(wrongPostcode));
  },
};

export default postcodes;
