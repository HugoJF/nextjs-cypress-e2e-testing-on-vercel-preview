import Counter from '../../components/Counter';

describe('Counter.cy.ts', () => {
    it('renders the default initial count', () => {
        cy.mount(<Counter/>)

        cy.get('[data-test="count"]').should('have.text', '0')
    });

    it('renders a custom initial count', () => {
        cy.mount(<Counter initial={10}/>)

        cy.get('[data-test="count"]').should('have.text', '10')
    });

    it('increments the default amount', () => {
        cy.mount(<Counter/>)

        cy.get('[data-test="count"]').should('have.text', '0')
        cy.get('[data-test="increment"]').click()
        cy.get('[data-test="count"]').should('have.text', '1')
    });

    it('increments a custom amount', () => {
        cy.mount(<Counter increments={10}/>)

        cy.get('[data-test="count"]').should('have.text', '0')
        cy.get('[data-test="increment"]').click()
        cy.get('[data-test="count"]').should('have.text', '10')
    });
})
