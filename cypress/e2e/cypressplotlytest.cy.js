

describe('Plotly Assignment Test Cypress.io', () => {
  
  
  it('Visit the website and scoll to find number of downloads', () => {
    cy.visit('https://www.cypress.io/');

    cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView();
    
    // finding the element <div class="font-primary text-gray-700 text-[18px] leading-[28px] font-normal">Weekly downloads</div>

    cy.get('.grow').contains('5M+').should('have.class','font-bold text-gray-1000 text-[28px] leading-[40px] font-primary')
  })


  //Test Case - 2 
 //dropdownCompany
  it('About Page from dropdown',()=>{
    cy.visit('https://www.cypress.io/');

    cy.get('#dropdownCompany').trigger('mouseover');

    cy.contains('About Cypress').should('be.visible');

    cy.contains('About Cypress').click();

    cy.url().should('include','/about-us');

    cy.get('#story > span > a').should('exist');
  })

  //Test Case - 3 
 
});

describe('Validate npm install cypress Command', () => {
  it('Users can click on "npm install cypress" and verify the copied text', () => {
      cy.viewport(1200,800);
      cy.visit('https://www.cypress.io/');
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
describe.only('Accessing Visual Review Under Product',()=>{

  it('User click on Product and then Visual reviews',()=>{

    cy.visit('https://www.cypress.io/');

    cy.contains('Product').should('be.visible').trigger('mouseover');

    cy.contains('Visual Reviews').should('be.visible').click();

    cy.contains('Review and debug failures visually').should('be.visible');
    
    cy.get('video source[src*="PullRequestReview"]').parent('video').should('be.visible');
        
  })

})