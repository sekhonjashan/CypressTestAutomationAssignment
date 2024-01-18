describe('Plotly Assignment Test Cypress.io', () => {
  it('Visit the website and scoll to find number of downloads', () => {
    cy.visit('https://www.cypress.io/')

    cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView();
    
    // finding the element <div class="font-primary text-gray-700 text-[18px] leading-[28px] font-normal">Weekly downloads</div>

    cy.get('.grow').contains('5M+').should('have.class','font-bold text-gray-1000 text-[28px] leading-[40px] font-primary')
  })
})