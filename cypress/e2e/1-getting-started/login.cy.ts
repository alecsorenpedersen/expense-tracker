/// <reference types="cypress" />

describe('Login', () => {
	it('should successfully log in', () => {
		cy.visit('http://localhost:3000/');

		// Fill in the login form
		cy.get('input[name="username"]').type('your-username');
		cy.get('input[name="password"]').type('your-password');

		// Submit the form
		cy.get('button[name="loginButton"]').click();

		// Verify successful login
		cy.url().should('include', '/dashboard');

		cy.get('h1').should('contain', 'Expenses Dashboard');
	});
});
