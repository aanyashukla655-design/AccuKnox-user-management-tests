class AdminPage {
    constructor(page) {
        this.page = page;
        this.adminMenu = page.getByRole("link", { name: "Admin" });
        this.addBtn = page.getByRole("button", { name: "Add" });
        this.searchInput = page.locator('input[class*="oxd-input"]')
    }

    async openAdminTab() {
        await this.adminMenu.click();
        await this.page.waitForTimeout(1000);
    }

    async clickAdd() {
        await this.addBtn.click();
    }
}

module.exports = { AdminPage };
