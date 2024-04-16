import {
  PostcodeAutocompleteResponse,
  PostcodeLookupResponse,
  PostcodeValidateResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PostCodes<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * Look up a postcode
   *
   * @tags postcodes
   * @name lookup
   * @request GET:/postcodes/{postcode}
   * @response `200` `PostcodeLookupResponse`
   * @response `400` `PostcodeErrorResponse`
   * @response `404` `PostcodeErrorResponse`
   */
  lookup = (postcode: string, params: RequestParams = {}) =>
    this.request<PostcodeLookupResponse, any>({
      path: `/postcodes/${postcode}`,
      method: "GET",
      type: ContentType.Json,
      ...params,
    });

  /**
   *  Validate a postcode
   *
   * @tags postcodes
   * @name validate
   * @request GET:/postcodes/{postcode}/validate
   * @response `200` `PostcodeValidateResponse`
   * @response `400` `PostcodeErrorResponse`
   * @response `404` `PostcodeErrorResponse`
   */

  validate = (postcode: string, params: RequestParams = {}) =>
    this.request<PostcodeValidateResponse, any>({
      path: `/postcodes/${postcode}/validate`,
      method: "GET",
      type: ContentType.Json,
      ...params,
    });

  /**
   * Autocomplete a postcode
   * @tags postcodes
   * @name autocomplete
   * @request GET:/postcodes/{postcode}/autocomplete
   * @response `200` `PostcodeAutocompleteResponse`
   * @response `400` `PostcodeErrorResponse`
   * @response `404` `PostcodeErrorResponse`
   * @secure
   * @format json
   *
   */
  autocomplete = (postcode: string, params: RequestParams = {}) =>
    this.request<PostcodeAutocompleteResponse, any>({
      path: `/postcodes/${postcode}/autocomplete`,
      method: "GET",
      type: ContentType.Json,
      ...params,
    });
}
