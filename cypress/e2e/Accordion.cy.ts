describe('First test Accordion', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/')
      cy.get('.sidebar-toggle').click()
      cy.get('[class="menu-title"]').contains("Layout").click()
      cy.get('[class="menu-title"]').contains("Accordion").click() 
      cy.get('.sidebar-toggle').click()
  
     })
 

    it('Open close open close toggle button ', () => {
   
        cy.get('button').contains("Toggle First Item").click()
        cy.contains('A nebula is an interstellar cloud of dust').should('be.visible')
        cy.get('button').contains("Toggle First Item").click()
        cy.contains('A nebula is an interstellar cloud of dust').should('be.not.visible')
        cy.get('button').contains("Toggle First Item").click()
        cy.contains('A nebula is an interstellar cloud of dust').should('be.visible')
        cy.get('button').contains("Toggle First Item").click()
        cy.contains('A nebula is an interstellar cloud of dust').should('be.not.visible')
    })
    

    it('Click on Product Details ', () => {
   
     cy.contains('Product Details').click()
     cy.contains('A nebula is an interstellar cloud of dust').should('be.visible')
     cy.contains('Product Details').click()
     cy.contains('A nebula is an interstellar cloud of dust').should('be.not.visible')
     cy.contains('Product Details').click()
     cy.contains('A nebula is an interstellar cloud of dust').should('be.visible')
     cy.contains('Product Details').click()
     cy.contains('A nebula is an interstellar cloud of dust').should('be.not.visible')
    })

    it('Combination toggle button and Product Details ', () => {
   
        cy.contains('Product Details').click()
        cy.contains('A nebula is an interstellar cloud of dust').should('be.visible')
        cy.get('button').contains("Toggle First Item").click()
        cy.contains('A nebula is an interstellar cloud of dust').should('be.not.visible')
        cy.contains('Product Details').click()
        cy.contains('A nebula is an interstellar cloud of dust').should('be.visible')
        cy.get('button').contains("Toggle First Item").click()
        cy.contains('A nebula is an interstellar cloud of dust').should('be.not.visible')
        cy.get('button').contains("Toggle First Item").click()
        cy.contains('A nebula is an interstellar cloud of dust').should('be.visible')
        cy.contains('Product Details').click()
        cy.contains('A nebula is an interstellar cloud of dust').should('be.not.visible')
 
 
       })


       it.only('Drugi deo ekrana', () => {
   
        cy.get('[class="accordion-container col-md-12 col-lg-6 col-xxxl-6"] ').last()
        .contains('Product Details').click()
        cy.get('[class="accordion-container col-md-12 col-lg-6 col-xxxl-6"] ').last()
        .contains('A nebula is an interstellar cloud of dust').should('be.visible')
        
        cy.get('[class="accordion-container col-md-12 col-lg-6 col-xxxl-6"] ').last()
        .contains('Reviews').click()
        cy.get('[class="accordion-container col-md-12 col-lg-6 col-xxxl-6"] ').last()
       

     })


      

  })    