# Cypress Test Cases Documentation

This document outlines a series of test cases to be performed using Cypress, a popular end-to-end testing framework. The tests are targeted at the Cypress website, [https://www.cypress.io/](https://www.cypress.io/).

## How to execute the project 

### Prerequisites
Node.js (Preferably the latest stable version)
npm (Node Package Manager, comes with Node.js)

node -v
npm -v


**Steps**
1. Clone the Repository: bash > clone the project git clone sekhonjashan/CypressTestAutomationAssignment
2. bash > cd /CypressTestAutomationAssignment
3. Install Dependencies: bash > npm install
4. Run Tests Headlessly (No GUI): bash > npx cypress run

OR 

4. Direct execution of the Test case file in headless : bash > npx cypress run --spec "cypress/e2e/cypressplotlytest.cy.js"
5. Open Cypress Test Runner (Interactive Mode): bash > npx cypress open


### Properties / Configs

1. Baseurl is set to https://www.cypress.io in the cypress.config.js file
2. Currently the width and height for the viewport is set to 1200,800 as a property in the config file.

### Dashboard execution

The project is currently configured to run CI dashboard 

bash > npx cypress run --browser chrome --record --key 479daa5f-d3c3-41aa-82d9-9c8f3443acab -
-spec "cypress/e2e/cypressplotlytest.cy.js"

The project ID key updated in the cypress.config.js


## Known Issues

-[v1.4]: Test case 3 is sprodically failing only with headless in chrome browser.

Steps to replicate 

1. execute : > npx cypress run -browser chrome --spec "cypress/e2e/cypressplotlytest.cy.js"

failure rate 3/5

## Recent Updates

- [v1.9.2]: Resolved sporadic failures in Test Case 3 when running headless in Chrome.

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
