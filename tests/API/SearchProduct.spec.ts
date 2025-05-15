import {test, expect} from "@playwright/test";
import * as data from "../../Utils/data.json";

test.describe("Positive API Test", () => {
    test('Post to SearchProduct Should Return Status 200 and Valid Response', async ({request}) => {
        const searchProduct = "tshirt";
        const response = await request.post(`${data.baseUrl}/api/searchProduct`, {
            form: {
              search_product: searchProduct,
            },
          });
          const responseBody = await response.json();
          console.log("Response Body:", responseBody);
          console.log("search:", searchProduct);
          expect(response.status()).toBe(200);
          expect(responseBody).toBeTruthy();
          expect(responseBody.products.length).toBeGreaterThan(0); 

    });
});

test.describe("Negative API Test", () => {
  test('POST to Search Product Without search_product Parameter Should Return Status 404 and Error Message', async ({request}) => {
    const response = await request.post(`${data.baseUrl}/api/searchProduct`);
    const responseBody = await response.json();
    console.log("ResponseBody:", responseBody);
    expect(responseBody.responseCode).toBe(400);
    expect(responseBody.message).toBe("Bad request, search_product parameter is missing in POST request.")
  });

});