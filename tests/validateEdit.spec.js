const { test } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { AdminPage } = require("../pages/AdminPage");

test("Validate edited details", async ({ page }) => {
  const login = new LoginPage(page);
  const admin = new AdminPage(page);

  const user = "testuser123";

  await login.goto();
  await login.login("Admin", "admin123");
  await admin.openAdminTab();

  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(user);
  await page.getByRole("button", { name: "Search" }).click();

  await page.waitForTimeout(1500);
});
