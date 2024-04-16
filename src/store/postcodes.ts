import PostCode from "models/postcode/PostCode";
import { store } from "./configureStore";
import { addPostCode, removePostCode } from "./modules/postcode/actions";

const postcodes = {
  add: (newPostcode: PostCode): void => {
    store.dispatch(addPostCode(newPostcode));
  },
  remove: (postcodeToRemove: PostCode): void => {
    store.dispatch(removePostCode(postcodeToRemove));
  },
};

export default postcodes;
