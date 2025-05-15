import { test, expect } from "@playwright/test";
import * as data from "../../Utils/data.json";
import { log } from "console";

test("POST To Create/Register User Account", async ({ request }) => {
  const response = await request.post(`${data.baseUrl}/api/createAccount`, {
    form: {
        name: 'Pulso',
              email: 'ABC123@example.com', 
              password: 'Test1234',
              title: 'Mr',
              birth_date: '15',
              birth_month: 'May',
              birth_year: '1990',
              firstname: 'Test',
              lastname: 'User',
              company: 'TestCompany',
              address1: '123 Test Street',
              address2: 'Apt 4',
              country: 'Canada',
              zipcode: 'A1A1A1',
              state: 'TestState',
              city: 'TestCity',
              mobile_number: '+1234567890',
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
  });

  const responseBody = await response.json();
  console.log("responseBody: ", responseBody);
  expect(response.status()).toBe(200);
  expect(responseBody).toBeTruthy();
  expect(responseBody.responseCode).toBe(201);
  expect(responseBody.message).toBe("User created!");
  
});




