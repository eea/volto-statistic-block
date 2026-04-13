import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Statistic Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Statistic Block: Add and save', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Statistic View Test');
    cy.get('.documentFirstHeading').contains('Statistic View Test');

    cy.getSlate().click();

    // Add statistic block (it's in "Text" group)
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Text').click();
    cy.get('.content.active.text .button.statistic_block')
      .contains('Statistic')
      .click({ force: true });

    // Save
    cy.get('#toolbar-save').click();

    cy.contains('Statistic View Test');
  });

  it('Statistic Block: Add with value and label', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Statistic Value Test');

    cy.getSlate().click();

    // Add statistic block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Text').click();
    cy.get('.content.active.text .button.statistic_block')
      .contains('Statistic')
      .click({ force: true });

    // The statistic block should render
    cy.get('.statistic-block, .block.statistic_block').should('exist');

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Statistic Value Test');
  });

  it('Statistic Block: Horizontal layout', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Statistic Horizontal');

    cy.getSlate().click();

    // Add statistic block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Text').click();
    cy.get('.content.active.text .button.statistic_block')
      .contains('Statistic')
      .click({ force: true });

    // Toggle horizontal checkbox
    cy.get('.sidebar-container label[for="field-horizontal"]').click();

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Statistic Horizontal');
  });
});