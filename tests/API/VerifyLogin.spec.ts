import { test, expect } from "@playwright/test";
import * as data from "../../Utils/data.json";

test('POST To Verify Login with valid details Should Return 200', async ({
  request,
}) => {
  const response = await request.post(`${data.baseUrl}/api/verifyLogin`, {
    form: data.login,
  });
  console.log(data.login);
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(responseBody).toBeTruthy();
  expect(responseBody.responseCode).toBe(200);
  console.log("responseBody: ", responseBody);
});

test('POST To Verify Login without email parameter Shold Return Status 400 and Error Message', async ({
  request,
}) => {
  const response = await request.post(`${data.baseUrl}/api/verifyLogin`, {
    form: data.loginWithoutEmail,
  });
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(responseBody).toBeTruthy();
  expect(responseBody.responseCode).toBe(400);
  expect(responseBody.message).toBe(
    "Bad request, email or password parameter is missing in POST request."
  );
  console.log("responseBody: ", responseBody);
});

test('POST To Verify Login with Invalid Details Should Return Status 404 and Error Message', async ({
  request,
}) => {
  const response = await request.post(`${data.baseUrl}/api/verifyLogin`, {
    form: data.invalidLogin,
  });

  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(responseBody).toBeTruthy();
  expect(responseBody.responseCode).toBe(404);
  expect(responseBody.message).toBe("User not found!");
  console.log("responseBody: ", responseBody);
});

test('DELETE To Verify Login is not Allowed', async ({request}) => {
const response = await request.delete(`${data.baseUrl}/api/verifyLogin`);
const responseBody = await response.json();
expect(responseBody).toBeTruthy();
expect(responseBody.responseCode).toBe(405);
expect(responseBody.message).toBe("This request method is not supported.")
console.log("responseBody: ", responseBody);

});
