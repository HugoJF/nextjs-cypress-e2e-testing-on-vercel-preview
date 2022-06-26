describe('counter app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('it renders a count with 0', () => {
        cy.get('[data-test="count"]').should('have.text', '0')
    });

    it('the increment button works', () => {
        cy.get('[data-test="count"]').should('have.text', '0')
        cy.get('[data-test="increment"]').click()
        cy.get('[data-test="count"]').should('have.text', '10')
    })

    it('the decrement button works', () => {
        cy.get('[data-test="count"]').should('have.text', '0')
        cy.get('[data-test="decrement"]').click()
        cy.get('[data-test="count"]').should('have.text', '-10')
    });

    it('buttons should be visible', () => {
        cy.get('[data-test="increment"]').should('be.visible')
        cy.get('[data-test="decrement"]').should('be.visible')

        cy.findByText('-').should('be.visible')
        cy.findByText('+').should('be.visible')
    })
})
