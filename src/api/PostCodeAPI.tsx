import {
  PostcodeAutocompleteResponse,
  PostcodeLookupResponse,
  PostcodeValidateResponse,
} from "api/data-contracts";
import axios from "axios";

interface IPostCodeAPI {
  lookup: (postcode: string) => Promise<any>;
  validate: (postcode: string) => Promise<any>;
  autocomplete: (postcode: string) => Promise<any>;
}

const baseUrl = "https://api.postcodes.io";
const apiUrl = `${baseUrl}/postcodes`;

const PostCodeAPI: IPostCodeAPI = {
  /**
   * @description Look up a postcode
   * @request GET:api.postcodes.io/postcodes/{postcode}
   * @returns PostcodeLookupResponse
   */
  lookup: async (postcode: string): Promise<PostcodeLookupResponse> => {
    const url = `${apiUrl}/${postcode}`;
    const response: PostcodeLookupResponse = await axios.get(url);
    console.log(response);
    return response;
  },

  /**
   * @description Validate a postcode
   * @request GET:api.postcodes.io/postcodes/{postcode}/validate
   */
  validate: async (postcode: string): Promise<PostcodeValidateResponse> => {
    const url = `${apiUrl}/${postcode}/validate`;
    const response: PostcodeValidateResponse = await axios.get(url);
    console.log(response);
    return response;
  },

  /**
   * @description Autocomplete a postcode
   * @request GET:api.postcodes.io/postcodes/{postcode}/autocomplete
   */
  // TODO: Check if this is needed
  autocomplete: async (
    postcode: string
  ): Promise<PostcodeAutocompleteResponse> => {
    const url = `${apiUrl}/${postcode}/autocomplete`;
    const response: PostcodeAutocompleteResponse = await axios.get(url);
    console.log(response);
    return response;
  },
};

export default PostCodeAPI;
