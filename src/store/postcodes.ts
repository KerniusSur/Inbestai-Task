import PostCode from "models/postcode/PostCode";
import { store } from "./configureStore";
import {
  addPostCode,
  lookupPostCode,
  removePostCode,
} from "./modules/postcode/actions";

const postcodes = {
  add: (newPostcode: PostCode): void => {
    store.dispatch(addPostCode(newPostcode));
  },
  remove: (postcodeToRemove: PostCode): void => {
    store.dispatch(removePostCode(postcodeToRemove));
  },
  lookup: async (newPostcode: string) => {
    store.dispatch(lookupPostCode(newPostcode));
  },
};

export default postcodes;
