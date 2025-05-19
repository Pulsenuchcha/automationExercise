import {test} from "@playwright/test";
import { SignupAndLoginPage } from "../../pageObject/LoginAndRegisterPage";
import * as data from "../../Utils/data.json";

test("New User Register", async ({page}) => {
    const signupAndLoginPage = new SignupAndLoginPage(page);

    await signupAndLoginPage.goTo(data.loginUrl);
    await signupAndLoginPage.verifySignupTitleisVisible();
    await signupAndLoginPage.inputNameInSignupFieldName(data.register.name);
    await signupAndLoginPage.inputEmailInSignupTextFieldEmail(data.register.email);
     await signupAndLoginPage.clickSignupButton();
});