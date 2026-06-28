import { Page, Locator } from "@playwright/test";

export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.xpathRegisterPage = '';
        this.xpathProductPage = '';
        this.cssTodoPage = '';
        this.personalNote = page.locator('');
    }

    async openMaterialPage() {

    }

    async gotoPage(pageName: string) {

    }
}

export class RegisterPage extends MaterialBasePage {
    xpathUserName: string;
    xpathEmail: string;
    xpathGenderMale: string;
    xpathGenderFemale: string;

    constructor(page: Page) {
        super(page);
        this.xpathUserName = '';
        this.xpathEmail = '';
        this.xpathGenderMale = '';
        this.xpathGenderFemale = '';
    }

    async fillUserName() {

    }

    async fillEmail() {

    }

    async checkGender(gender: string) {

    }
}