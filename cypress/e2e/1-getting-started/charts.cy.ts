/// <reference types="cypress" />

describe('CategoryPieChart', () => {
	it('Should display all 3 charts', () => {
		cy.visit('http://localhost:3000/dashboard');

		cy.get('[data-testid="entry-form"]').within(() => {
			cy.get('input[name="date"]').type('2023-05-28');
			cy.get('input[name="info"]').type('Sample description');
			cy.get('input[name="value"]').type('100');

			cy.get('button[type="submit"]').click();
		});

		cy.get('.apexcharts-canvas').should('have.length', 3);
	});
});
