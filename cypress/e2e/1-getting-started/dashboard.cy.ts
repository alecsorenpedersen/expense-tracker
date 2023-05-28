/// <reference types="cypress" />

describe('Expense List', () => {
	it('should open the model on row click', () => {
		cy.visit('http://localhost:3000/dashboard');

		cy.get('[data-testid="entry-form"]').within(() => {
			cy.get('input[name="date"]').type('2023-05-28');
			cy.get('input[name="info"]').type('Sample description');
			cy.get('input[name="value"]').type('100');

			cy.get('button[type="submit"]').click();
		});

		const firstRowSelector =
			'[data-testid="expense-list"] tbody tr:first-child';

		cy.get(firstRowSelector).click();

		cy.get('[data-testid="record-detail-dialog"]').should('be.visible');
	});

	it('should export records to Excel', () => {
		cy.visit('http://localhost:3000/dashboard');

		cy.get('[data-testid="entry-form"]').within(() => {
			cy.get('input[name="date"]').type('2023-05-28');
			cy.get('input[name="info"]').type('Sample description');
			cy.get('input[name="value"]').type('100');

			cy.get('button[type="submit"]').click();
		});

		// Click on the "Export to Excel" button
		cy.contains('Export to Excel').click();

		// Assert that the download has started
		cy.window().then((win) => {
			cy.stub(win, 'open').as('windowOpen');
		});

		// Wait for the download to complete (adjust timeout if necessary)
		cy.wait(2000); // Adjust the wait time if necessary
		cy.readFile('cypress/downloads/records.xlsx').should('exist');
	});
});
