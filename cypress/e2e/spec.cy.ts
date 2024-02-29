describe("Search Challenge Cypress test", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("Renders the screen", () => {
		cy.get('[data-testid="header"]').should("exist");

		cy.get('[data-testid="91011"]').should("exist");
	});

	it("Search data", () => {
		cy.get("button").contains("Search").click();
		cy.get('[data-testid="search-input"]').type("credit");

		cy.get("button").contains("Search").click();

		cy.get('[data-testid="3132"]').should("exist");

		cy.get('[data-testid="3132"]').click();
	});
});
