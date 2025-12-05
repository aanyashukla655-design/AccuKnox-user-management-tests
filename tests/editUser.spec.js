const { test } = require("@playwright/test");

test("Edit user details", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText("Admin").click();

  await page.getByPlaceholder("Type for hints...").fill("testuser1234");
  await page.getByRole("button", { name: "Search" }).click();

  // CLICK EDIT (Pencil Icon)
  await page.locator('//i[@class="oxd-icon bi-pencil-fill"]').first().click();

  await page.waitForTimeout(1000);

  // Change status
  await page.locator('(//div[@class="oxd-select-text-input"])[2]').click();
  await page.getByText("Disabled").click();

  await page.getByRole("button", { name: "Save" }).click();
  await page.waitForTimeout(2000);
});
