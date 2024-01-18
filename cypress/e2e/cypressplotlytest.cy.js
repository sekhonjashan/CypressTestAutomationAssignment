/**
 * @author Jashan Singh
 * @version 1.9.2
 * 
 * This is the main file that includes all the test cases.
 * 
 */

// Created consts to re-use selectors
const aboutCypressSelector = 'About Cypress';
const dropdownCompany = '#dropdownCompany';

describe('Cypress Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });  

  // Test Case 1: Verify Website Visit and Scroll Functionality
  it('Visit the website and scroll to find number of downloads', () => {
    cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView();
    cy.contains("Weekly downloads").siblings("div").first().should('have.text', '5M+');
  });

// Test Case 2: Navigation to 'About Cypress' Page
  it('About Page from dropdown', () => {
    cy.get(dropdownCompany).trigger('mouseover').should('be.visible');
    cy.contains(aboutCypressSelector).should('be.visible');
    cy.contains(aboutCypressSelector).click();
    cy.url().should('include', '/about-us');
  });

// Test Case 3: Validate 'npm install cypress' Command
  it('Users can click on "npm install cypress" and verify the copied text', () => {
    cy.contains('button', 'Install').click();
    cy.get('nav dialog .overflow-y-auto').should('be.visible');
    cy.contains('button', 'npm install cypress').click({force:true});
    cy.readClipboard().then((text) => {
        expect(text).to.eq('npm install cypress --save-dev');
        cy.log('Copied text:', text);
    });
  });

//Test Case 4: Accessing 'Visual Review' Under 'Product'
  it('User click on Product and then Visual reviews', () => {
    cy.hoverOnProduct();
    cy.contains('Visual Reviews').should('be.visible').click();
    cy.contains('Review and debug failures visually').should('be.visible');
    cy.get('video source[src*="PullRequestReview"]').parent('video').should('exist');
  });

//Bonus Test Case 5: Smart Orchestration to Test Analytics
  it('Product to Smart Orchestration to Test Analytics', () => {
    cy.hoverOnProduct();
    cy.contains('Smart Orchestration').should('be.visible').click({force:true});
    cy.get('#test_analytics').scrollIntoView();
    cy.get('a[href="#test_analytics"].border-jade-200').should('be.visible');
  });

});