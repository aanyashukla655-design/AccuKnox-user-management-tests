const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');
const { AddUserPage } = require('../pages/AddUserPage');

test("Add a new user", async ({ page }) => {
    const login = new LoginPage(page);
    const admin = new AdminPage(page);
    const addUser = new AddUserPage(page);

    const username = "testuser" + Math.floor(Math.random() * 1000);

    await login.goto();
    await login.login("Admin", "admin123");
    await admin.openAdminTab();
    await admin.clickAdd();
    await addUser.createUser(username);

    console.log("Created user:", username);
});
