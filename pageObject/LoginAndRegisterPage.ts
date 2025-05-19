import { type Locator, type Page, expect } from "@playwright/test";

export class SignupAndLoginPage {
    readonly page:Page;
    readonly signupTitle: Locator;
    readonly signupFieldName: Locator;
    readonly signupFieldEmail: Locator;
    readonly loginTitle: Locator;
    readonly loginEmailField: Locator;
    readonly loginPasswordField: Locator;
    readonly loginButton: Locator;
    readonly signupButton: Locator;


    constructor(page:Page){
        this.page = page;
        this.signupTitle = page.getByText("New User Signup!");
        this.signupFieldName = page.getByPlaceholder("Name");
        this.signupFieldEmail = page.locator('div[class="signup-form"] input[type="email"]');
        this.signupButton = page.locator('div[class="signup-form"] button[type="submit"]');
        this.loginTitle = page.getByText("Login to your account");
        this.loginEmailField = page.locator('div[class="login-form"] input[type="email"]');
        this.loginPasswordField = page.locator('div[class="login-form"] input[type="password"]');
        this.loginButton = page.locator('div[class="login-form"] button[type="submit"]');
        
    }
      async goTo(url: string) {
    await this.page.goto(url);
  }
     async verifySignupTitleisVisible() {
    await expect(this.signupTitle).toBeVisible();
  }
    async inputNameInSignupFieldName(name: string) {
    expect(this.signupFieldName).toBeVisible();
    await this.signupFieldName.fill(name);
  }
  async inputEmailInSignupTextFieldEmail(email: string) {
    expect(this.signupFieldEmail).toBeVisible();
    await this.signupFieldEmail.fill(email);
  }
  async clickSignupButton() {
    await this.signupButton.click();
  }

}

