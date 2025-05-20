import {Locator, test, type Page} from "@playwright/test";


export class RegisterInformationPage{
    readonly page: Page;
    readonly accountInformationTitle: Locator;
    readonly titleRadioButton: Locator;
    readonly nameTextField: Locator;
    readonly passwordField: Locator;

    constructor (page:Page){
        this.page = page;
        this.accountInformationTitle = page.getByText("Enter Account Information");
        this.titleRadioButton = page.getByLabel('Title');
        this.nameTextField = page.getByLabel('name');
        this.passwordField = page.getByLabel('password');

    }


}