import { test, expect} from "@playwright/test";
import * as data from "../../Utils/data.json";

test.describe("Positive API Tests", () => {
  test("Get All Product List should return status 200 and a valid response", async ({
    request,
  }) => {
    const response = await request.get(`${data.baseUrl}/api/productsList`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toBeTruthy();
    console.log(responseBody);
  });

  test("Count how many Polo Brand on Products Exist", async ({ request }) => {
    const response = await request.get(`${data.baseUrl}/api/productsList`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const products = responseBody.products;
    const menTshirtProducts = products.filter((product: any) =>
      product.brand.toLowerCase().includes("polo")
    );
    console.log(`Found ${menTshirtProducts.length} "Polo" products`);
    expect(menTshirtProducts.length).toBeGreaterThan(0);
  });
});

test.describe("Negative API Test", () => {
  test("POST to /productsList should not be allowed", async ({ request }) => {
    const response = await request.post(`${data.baseUrl}/api/productsList`, {
      data: { brand: "Test Post Method" },
    });

    const responseBody = await response.json();
    console.log("Response Body:", responseBody);
    expect(responseBody.responseCode).toBe(405);
    console.log(responseBody.responseCode);
    expect(responseBody.message).toBe("This request method is not supported.");
  });
});
