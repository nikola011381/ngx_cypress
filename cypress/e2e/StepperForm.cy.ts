describe('Stepper Forma', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/')
    cy.get('.sidebar-toggle').click()
    cy.get('[class="menu-title"]').contains("Layout").click()
    cy.get('[class="menu-title"]').contains("Stepper").click() 
    cy.get('.sidebar-toggle').click()

   })

    it('Prazna forma First Step', () => {
      cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"]')
       .find('button').first().click()
      cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"]')
      cy.get('input[placeholder="Enter your name"]').should('be.visible')
     })


     it('Popunjena forma First Step', () => {
      cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"]')
      .find('[placeholder="Enter your name"]').type("sssssss")
      cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"]')
      .find('[type="submit"]').first().click()
      cy.get('input[placeholder="Enter favorite movie"]').should('be.visible')
    })

      it('Prazna forma Second Step', () => {
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"]')
        .find('[placeholder="Enter your name"]').type("sssssss")
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"]')
        .find('[type="submit"]').first().click()
 
         cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"]')
        cy.get('input[placeholder="Enter favorite movie"]').should('be.visible')
       })

      it('Popunjena forma Second Step', () => {
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"]')
      .find('[placeholder="Enter your name"]').type("sssssss")
      cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"]')
      .find('[type="submit"]').first().click()
      cy.get('input[placeholder="Enter favorite movie"]').should('be.visible')

        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"]')
        .find('[placeholder="Enter favorite movie"]').type("sssssss")
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"]')
        .find('[type="submit"]').first().click()
        cy.get('input[placeholder="Enter something"]').should('be.visible')
    })




  })   