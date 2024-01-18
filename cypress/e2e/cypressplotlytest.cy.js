/**
 * @author Jashan Singh
 * @version 1.9.1
 * 
 * This is the main file that includes all the test cases.
 * 
 * Each test case is blocked in a separate describe block.
 * 
 * Another way could be having all the test cases separated by it() block but under the same describe() block.
 * 
 * Separate describe() block helps to use dot operator only to execute only the required block of test cases.
 */

// Created consts to re-use selectors
const aboutCypressSelector = 'About Cypress';
const dropdownCompany = '#dropdownCompany';

// Test Case 1: Verify Website Visit and Scroll Functionality
describe('Test Case 1: Verify Website Visit and Scroll Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });  

  it('Visit the website and scroll to find number of downloads', () => {
    cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView();
    cy.get('.grow').contains('5M+');
    cy.contains("Weekly downloads").siblings("div").first().should('have.text', '5M+');
  });
});

// Test Case 2: Navigation to 'About Cypress' Page
describe('Test Case 2: Navigation to \'About Cypress\' Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('About Page from dropdown', () => {
    cy.get(dropdownCompany).trigger('mouseover');
    cy.contains(aboutCypressSelector).should('be.visible', { timeout: 15000 });
    cy.contains(aboutCypressSelector).click();
    cy.url().should('include', '/about-us');
  });
});

// Test Case 3: Validate 'npm install cypress' Command 
describe('Test Case 3: Validate npm install cypress Command', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  
  it('Users can click on "npm install cypress" and verify the copied text', () => {
    cy.contains('button', 'Install').click();
    cy.get('nav dialog .overflow-y-auto').should('be.visible');
    cy.contains('button', 'npm install cypress').click();
    cy.wait(1000);
    cy.contains('button', 'npm install cypress').should('be.visible');
    cy.wait(200);
    cy.readClipboard().then((text) => {
        expect(text).to.eq('npm install cypress --save-dev');
        cy.log('Copied text:', text);
    });
  });
});

// Test case 4: Accessing 'Visual Review' Under 'Product'
describe('Test case 4: Accessing \'Visual Review\' Under \'Product\'', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('User click on Product and then Visual reviews', () => {
    cy.hoverOnProduct();
    cy.contains('Visual Reviews').should('be.visible', { timeout: 15000 }).click();
    cy.contains('Review and debug failures visually').should('be.visible');
    cy.get('video source[src*="PullRequestReview"]').parent('video').should('exist');
  });
});

// Test case 5: Bonus - Smart Orchestration to Test Analytics
describe('Test case 5: Bonus Test case Smart Orchestration to Test Analytics', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Product to Smart Orchestration to Test Analytics', () => {
    cy.hoverOnProduct();
    cy.contains('Smart Orchestration').should('be.visible', { timeout: 15000 }).click();
    cy.get('#test_analytics').scrollIntoView();
    cy.get('a[href="#test_analytics"].border-jade-200').should('be.visible');
  });
});
