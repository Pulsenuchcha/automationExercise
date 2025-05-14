import {test, expect} from "@playwright/test";
import * as data from "../../Utils/data.json";

test.describe("", () => {
    test('', async ({request}) => {
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