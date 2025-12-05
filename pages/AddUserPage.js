exports.AddUserPage = class AddUserPage {
    constructor(page) {
        this.page = page;

        this.addButton = page.getByRole("button", { name: "Add" });

        // user role
        this.userRoleDropdown = page.locator('(//div[@class="oxd-select-text-input"])[1]');
        this.roleESSOption = page.locator('//div[@role="listbox"]//span[text()="ESS"]');

        // status
        this.statusDropdown = page.locator('(//div[@class="oxd-select-text-input"])[2]');
        this.statusEnabledOption = page.locator('//div[@role="listbox"]//span[text()="Enabled"]');

        // inputs
        this.employeeNameInput = page.getByPlaceholder("Type for hints...");
        this.usernameInput = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");
        this.passwordInput = page.locator("(//input[@type='password'])[1]");
        this.confirmPasswordInput = page.locator("(//input[@type='password'])[2]");

        this.saveButton = page.getByRole("button", { name: "Save" });
    }

    async createUser(user) {
        await this.addButton.click();

        // Select role
        await this.userRoleDropdown.click();
        await this.roleESSOption.waitFor({ state: "visible" });
        await this.roleESSOption.click();

        // Select status
        await this.statusDropdown.click();
        await this.statusEnabledOption.waitFor({ state: "visible" });
        await this.statusEnabledOption.click();

        // Fill details
        await this.employeeNameInput.fill(user.employeeName);
        await this.page.getByRole("option", { name: user.employeeName }).click();

        await this.usernameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
        await this.confirmPasswordInput.fill(user.password);

        await this.saveButton.click();
        await this.page.waitForTimeout(1500);
    }
};
