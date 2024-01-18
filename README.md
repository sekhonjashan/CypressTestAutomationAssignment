# Cypress Test Cases Documentation

This document outlines a series of test cases to be performed using Cypress, a popular end-to-end testing framework. The tests are targeted at the Cypress website, [https://www.cypress.io/](https://www.cypress.io/).

## Test Cases

Each test case is described below with its specific steps and expected outcomes.

### Test Case 1: Verify Website Visit and Scroll Functionality

**Objective:** Users are able to visit the Cypress website and scroll down to view the "Loved by OSS, trusted by Enterprise" section to see the weekly downloads number.

**Steps:**
1. Navigate to [https://www.cypress.io/](https://www.cypress.io/).
2. Scroll down to the section titled "Loved by OSS, trusted by Enterprise."
3. Verify that the weekly downloads number is visible.

### Test Case 2: Navigation to 'About Cypress' Page

**Objective:** Users are able to click on "Company" and then on "About Cypress."

**Steps:**
1. Click on the "Company" link in the website's header.
2. Select the "About Cypress" option from the dropdown menu.
3. Verify that the "About Cypress" page is displayed.

### Test Case 3: Validate 'npm install cypress' Command

**Objective:** Users are able to click on "Install" and then on "npm install cypress," ensuring the copied text is "npm install cypress --save-dev."

**Steps:**
1. Click on the "Install" link in the website's header.
2. Select the "npm install cypress" option.
3. Verify that the text "npm install cypress --save-dev" is displayed and can be copied.

### Test Case 4: Accessing 'Visual Review' Under 'Product'

**Objective:** Users are able to click on "Product" and then "Visual Review."

**Steps:**
1. Click on the "Product" link in the website's header.
2. Select the "Visual Review" option from the dropdown menu.
3. Verify that the "Visual Review" page is displayed.

### Bonus Test Case: Smart Orchestration to Test Analytics

**Objective:** Users are able to click on "Product," then "Smart Orchestration," scroll down to "Test Analytics," and see that the green circle is around "Test Analytics."

**Steps:**
1. Click on the "Product" link in the website's header.
2. Select the "Smart Orchestration" option from the dropdown menu.
3. Scroll down to the "Test Analytics" section.
4. Verify that the green circle is around the "Test Analytics" option.
