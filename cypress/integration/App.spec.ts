/// <reference types="cypress" />
describe("e2e app test suite", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should add new todo", () => {
    cy.get("#add-todo-input").type("learn cypress");
    cy.get("#add-todo-button").click();
    cy.get(".todo-item").should("not.be.undefined");
  });

  it("should toggle added todo", () => {
    cy.get("#add-todo-input").type("learn cypress");
    cy.get("#add-todo-button").click();
    cy.get("[data-testid='0']").click();
    cy.get(".todo-item").should("not.be.undefined");
    cy.get(".todo-item").contains("YES");
  });

  it("should delete todo", () => {
    cy.get("#add-todo-input").type("learn cypress");
    cy.get("#add-todo-button").click();
    cy.get(".todo-item").should("not.be.undefined");
    cy.get("[data-testid='delete-0']").click();
    cy.get(".todo-item").should("not.exist");
  });

  it("should navigate to charts page", () => {
    cy.contains(/charts page/i).click();
    cy.url().should("include", "/charts")
  });
  it("should navigate to default page", () => {
    cy.contains(/charts page/i).click();
    cy.contains(/todo page/i).click();
    cy.url().should("include", "/")
  });
});
