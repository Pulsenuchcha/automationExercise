import {test, expect} from "@playwright/test";
import * as data from "../../Utils/data.json";
test('DELETE METHOD To Delete User Account', async ({
    request,
  }) => {
    const response = await request.delete(`${data.baseUrl}/api/deleteAccount`, {
        form: {
                  email: 'Pulso123@example.com', 
                  password: 'TestPassword1234',
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
    });3
    console.log(data.deleteAccount);
    const responseBody = await response.json();
    console.log("responseBody: ", responseBody);
    expect(response.status()).toBe(200);
    expect(responseBody).toBeTruthy();
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.message).toBe("Account deleted!");

    
  });