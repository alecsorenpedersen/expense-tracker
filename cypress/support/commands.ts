/// <reference types="cypress" />

import 'cypress-axe';

declare namespace Cypress {
	interface Chainable<Subject> {
		checkAccessibility(): Chainable<Subject>;
	}
}

// Cypress.Commands.add('checkAccessibility', () => {
// 	cy.injectAxe();
// 	cy.log('Running aXe accessibility check');
// 	cy.checkA11y(null as any, null, (violations) => {
// 		// Handle violations if needed
// 		// Example: cy.wrap(violations).each((violation) => { ... });
// 		expect(violations.length).to.equal(0);
// 	});
// });
Cypress.Commands.add('injectAxe', () => {
	cy.window({ log: false }).then((win) => {
		cy.log('Injecting axe-core');
		win.eval(require('axe-core').source);
	});
});
