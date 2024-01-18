

describe('Plotly Assignment Test Cypress.io', () => {
  
  
  /*it('Visit the website and scoll to find number of downloads', () => {
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
*/
  //Test Case - 3 
 it('Verify the Install command',()=>{
  cy.visit('https://www.cypress.io/');

  cy.viewport(1200,800);

  cy.contains('button','Install').click();

  cy.contains('npm install cypress').should('exist');

  cy.contains('button','npm install cypress').click();

  cy.clipboard().should('contain','npn install cypress --save-dev');

 })
})