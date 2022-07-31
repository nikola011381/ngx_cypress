describe('Stepper Forma 3', () => {

    beforeEach(() => {
      cy.visit('http://localhost:4200/')
      cy.get('.sidebar-toggle').click()
      cy.get('[class="menu-title"]').contains("Layout").click()
      cy.get('[class="menu-title"]').contains("Stepper").click() 
      cy.get('.sidebar-toggle').click()
  
     })
     it('Next back prvi test', () => {
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        .find('button:contains("next") ').first().click()
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        cy.contains('Step content #2').should('be.visible')
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        .find('button:contains("next") ').first().click()
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        cy.contains('Step content #3').should('be.visible')
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        .find('button:contains("next") ').first().click()
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        cy.contains('Step content #4').should('be.visible')
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        .find('button').contains("next").should('be.not.enabled')
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        .find('button:contains("prev") ').first().click()

        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        .find('button').contains("next").first().should('be.enabled')
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        cy.contains('Step content #3').should('be.visible')
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        .find('button:contains("prev") ').first().click()

 
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        cy.contains('Step content #2').should('be.visible')
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        .find('button:contains("prev") ').first().click()
 


        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
         .contains('Step content #1').should('be.visible')
        cy.get('[class="col-md-12 col-lg-6 col-xxxl-6"] [orientation="vertical"]')
        .find('button').contains("prev").should('be.not.enabled')


 



    })



    })