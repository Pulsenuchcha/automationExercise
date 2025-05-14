import { test, expect } from "@playwright/test";
import * as data from "../../Utils/data.json";

test.describe("Positive API Tests", () => {
  test('Get All Brands List API Should Return Valid Data', async ({
    request,
  }) => {
    const response = await request.get(`${data.baseUrl}/api/brandsList`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toBeTruthy();
  });

  test('GET /BrandsList Should Return at Least One Brand', async ({
    request,
  }) => {
    const response = await request.get(`${data.baseUrl}/api/brandsList`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("Response Body:", responseBody);
    expect(responseBody).toHaveProperty("brands");
    expect(responseBody.brands.length).toBeGreaterThan(0);
  });
});

test.describe("Negative API Tests", () => {
  test('PUT to /brandsList should not be allowed', async ({ request }) => {
    const response = await request.put(`${data.baseUrl}/api/brandsList`, {
      data: { brand: "Pulso" }
    });

    const responseBody = await response.json();
    console.log("Response Body:", responseBody);
    expect(responseBody.responseCode).toBe(405);
    expect(responseBody.message).toBe("This request method is not supported.");
  });

});
