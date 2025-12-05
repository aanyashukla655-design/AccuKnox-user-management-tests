const { test } = require("@playwright/test");

test("Delete the user", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText("Admin").click();

  await page.getByPlaceholder("Type for hints...").clear();
  await page.getByPlaceholder("Type for hints...").fill("testuser1234");
  await page.getByRole("button", { name: "Search" }).click();

  // CLICK DELETE (Trash Icon)
  await page.locator('//i[@class="oxd-icon bi-trash"]').first().click();

  await page.getByRole("button", { name: "Yes, Delete" }).click();
  await page.waitForTimeout(2000);
});
