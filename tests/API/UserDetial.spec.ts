import {test, expect} from "@playwright/test";
import * as data from "../../Utils/data.json";

test('GET user account detail by email', async ({request}) => {
    const testEmail = 'ABC123@example.com'
    const response = await request.get(`${data.baseUrl}/api/getUserDetailByEmail`, {
        params: {
            email: testEmail
        }
    });

    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody).toBeTruthy();
    console.log("response body:", responseBody);
    expect(responseBody.responseCode).toBe(200);

});


