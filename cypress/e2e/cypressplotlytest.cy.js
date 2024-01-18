describe('Test setup - Before each ',()=>{

  beforeEach(()=>{

    // Setting fullscreen size as the behaviour of the application changes with change in the resolution

    cy.viewport(1200,800);

    cy.visit('https://www.cypress.io/');

  });

  after(() => {
    // Clears all browser cookies
    cy.clearCookies();

    // Clears browser's local storage
    cy.clearLocalStorage();

  });

});

// Test Case 1: Verify Website Visit and Scroll Functionality
describe('Test Case 1: Verify Website Visit and Scroll Functionality', () => {
  
  
  it('Visit the website and scoll to find number of downloads', () => {
    
    cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView();
    
    cy.get('.grow').contains('5M+').should('have.class','font-bold text-gray-1000 text-[28px] leading-[40px] font-primary')
  })

});

//Test Case 2: Navigation to 'About Cypress' Page
describe('Test Case 2: Navigation to \'About Cypress\' Page',()=>{

  it('About Page from dropdown',()=>{

    cy.get('#dropdownCompany').trigger('mouseover');

    cy.contains('About Cypress').should('be.visible');

    cy.contains('About Cypress').click();

    cy.url().should('include','/about-us');

    cy.get('#story > span > a').should('exist');
  })

})

//Test Case 3: Validate 'npm install cypress' Command 
describe('Test Case 3: Validate npm install cypress Command', () => {
  it('Users can click on "npm install cypress" and verify the copied text', () => {

    // Click on the button
      cy.contains('button', 'Install').click();

      cy.contains('button','npm install cypress').click();

      // Wait for the button text to change to "Copied" and revert back
      cy.contains('button', 'Copied').should('be.visible');

      cy.contains('button', 'npm install cypress').should('be.visible');

      // Read from the clipboard and assert the copied text
      cy.readClipboard().then((text) => {
          expect(text).to.eq('npm install cypress --save-dev');

          // For logging purpose
          cy.log('Copied text:', text);
      });
  });
});

//Test case - 4 Accessing 'Visual Review' Under 'Product
describe('Test case - 4 Accessing \'Visual Review\' Under \'Product\'',()=>{

  it('User click on Product and then Visual reviews',()=>{

    cy.contains('Product').should('be.visible').trigger('mouseover');

    cy.contains('Visual Reviews').should('be.visible').click();

    cy.contains('Review and debug failures visually').should('be.visible');
    
    cy.get('video source[src*="PullRequestReview"]').parent('video').should('be.visible');
        
  })
})

// Test case 5- Bonus 
describe('Test case 5: Bonus Test case Smart Orchestration to Test Analytics',()=>{

    it('Product to Smart Orchestration to Test Analytics',()=>{

      cy.contains('Product').should('be.visible').trigger('mouseover');

      cy.contains('Smart Orchestration').should('be.visible').click();

      cy.wait(500);

      cy.get('#test_analytics').scrollIntoView();

      cy.get('a[href="#test_analytics"].border-jade-200').should('be.visible');
      
    })

})