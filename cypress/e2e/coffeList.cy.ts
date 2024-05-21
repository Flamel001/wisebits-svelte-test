describe('Coffee list', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Works as expected', () => {
        cy.clock();

        cy.getByTestId('coffeeList').should('exist');

        // First coffee loads
        cy.get('.coffee_cup').should('exist');
        cy.get('.skeleton').should('exist');
        cy.get('.coffeeCard').should('exist');
        cy.get('img').should('be.visible');

        // API returns 429 if is requested too often, so we wait here
        cy.wait(1000);

        // New coffee added. Until it loads - buttons is disabled
        cy.getByTestId('addCoffee').click();
        cy.getByTestId('addCoffee').should('be.disabled');
        cy.get('.coffeeCard').should('have.length', 2);
        cy.get('img').should('be.visible');
        cy.getByTestId('addCoffee').should('be.enabled');

        // API returns 429 if is requested too often, so we wait here
        cy.wait(1000);

        // After 30 seconds new coffee should be added
        cy.tick(30000);
        cy.get('.coffeeCard').should('have.length', 3);
    });
});
