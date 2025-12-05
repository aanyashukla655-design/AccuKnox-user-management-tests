AccuKnox User Management Tests

This project contains end-to-end tests for the User Management module of OrangeHRM.
I wrote these tests using Playwright and followed the Page Object Model (POM) approach to keep the code clear and easy to maintain.

I tried to keep everything simple and practical, just like a QA trainee would do in a real work scenario.

What is covered

Login to OrangeHRM

Navigate to the Admin module

Add a new user

Search for a user

Edit user details

Validate changes after editing

Delete a user

Validate that deletion was successful

Application Under Test (AUT)

URL: OrangeHRM Demo

Credentials:

Username: Admin

Password: admin123

How to run the project

Clone the repository

git clone https://github.com/aanyashukla655-design/AccuKnox-user-management-tests.git


Navigate to the project folder

cd AccuKnox-user-management-tests


Install dependencies

npm install


Install Playwright browsers

npx playwright install


Run all tests (headless)

npx playwright test


Run tests with browser visible (headed mode)

npx playwright test --headed
