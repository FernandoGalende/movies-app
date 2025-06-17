describe("Movie Search", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should handle complete search flow", () => {
    // Initial state - prompt
    cy.get('[data-testid="prompt-state"]').should("contain", "Favorite movies");
    cy.get('[data-testid="prompt-state"] .favMovies li').should(
      "have.length.at.most",
      4
    );

    // Type search and wait for results
    cy.get('input[type="search"]').type("star wars");
    cy.get('[data-testid="loading-state"]').should("be.visible");
    cy.get('[data-testid="loading-state"]', { timeout: 10000 }).should(
      "not.exist"
    );
    cy.get('[data-testid="search-results"]').should("be.visible");

    // Click on first movie to see details
    cy.get('[data-testid="search-results"] li').first().click();

    // Verify we're in the detail view
    cy.get('[data-testid="movie-detail"]').should("be.visible");

    // Go back to search
    cy.get('[data-testid="back-to-search"]').click();

    // Clear search and verify empty state
    cy.get('input[type="search"]').clear();
    cy.get('[data-testid="prompt-state"]').should("contain", "Favorite movies");
  });
});
