import { slateLayoutBeforeEach, slateLayoutAfterEach } from '../support/e2e';

describe('ControlPanel: Dexterity Content-Types Layout', () => {
  beforeEach(slateLayoutBeforeEach);
  afterEach(slateLayoutAfterEach);

  it('Edit Blocks Layout for Book', () => {
    cy.visit('/controlpanel/dexterity-types');
    cy.waitForResourceToLoad('@navigation');
    cy.waitForResourceToLoad('@breadcrumbs');
    cy.waitForResourceToLoad('@actions');
    cy.waitForResourceToLoad('@types');

    cy.get('a[href="/controlpanel/dexterity-types/book"]').should(
      'have.text',
      'book',
    );

    cy.visit('/controlpanel/dexterity-types/book/layout');
    cy.get('#page-controlpanel-layout').contains(
      'Can not edit Layout for book',
    );
    cy.get('#page-controlpanel-layout button').click();

    // Wait a bit for draftjs to load, without this the title block
    // custom placeholder is missing and cypress gives a timeout error
    cy.wait(1000);
    cy.get('input[id="field-placeholder"]').type('Book title');
    cy.get('label[for="field-required"]').click();
    cy.get('label[for="field-fixed"]').click();

    cy.getSlate().click();

    cy.get('.ui.basic.icon.button.block-add-button:visible').click();
    cy.get('.blocks-chooser .title').contains('Text').click();
    cy.get('.content.active.text .button.statistic_block')
      .contains('Statistic')
      .click({ force: true });

    cy.get('#toolbar-save').click();

    cy.visit('/cypress');
    cy.waitForResourceToLoad('@navigation');
    cy.waitForResourceToLoad('@breadcrumbs');
    cy.waitForResourceToLoad('@actions');
    cy.waitForResourceToLoad('@types');

    cy.get('button[class="add"]').click();
    cy.get('#toolbar-add-book').click();
    cy.get('.block.title').contains('Book title');
    cy.get('.statistic_block').should('exist');

    // Change book title
    cy.clearSlateTitle();
    cy.getSlateTitle().type('My First Book');
    cy.get('.documentFirstHeading').contains('My First Book');
    cy.get('.statistic_block div[role="presentation"]').click();
    cy.get('.add-item-button-wrapper .button').click();

    // Add first item
    cy.get('.field-wrapper-value-0-items-0 .slate-editor div[role="textbox"]').click().type('5{enter}');
    cy.get('.field-wrapper-label-1-items-0 .slate-editor div[role="textbox"]').click().type('First Label{enter}');
    cy.get('.field-wrapper-info-2-items-0 .slate-editor div[role="textbox"]').click().type('First Extra Info{enter}');

    // Add second item
    cy.get('.add-item-button-wrapper .button').click();
    cy.get('.field-wrapper-value-0-items-1 .slate-editor div[role="textbox"]').click().type('10{enter}');
    cy.get('.field-wrapper-label-1-items-1 .slate-editor div[role="textbox"]').click().type('Second Label{enter}');
    cy.get('.field-wrapper-info-2-items-1 .slate-editor div[role="textbox"]').click().type('Second Extra Info{enter}');

    // Add third item
    cy.get('.add-item-button-wrapper .button').click();
    cy.get('.field-wrapper-value-0-items-2 .slate-editor div[role="textbox"]').click().type('15{enter}');
    cy.get('.field-wrapper-label-1-items-2 .slate-editor div[role="textbox"]').click().type('Third Label{enter}');
    cy.get('.field-wrapper-info-2-items-2 .slate-editor div[role="textbox"]').click().type('Third Extra Info{enter}');

    cy.get('#toolbar-save').click();
    cy.get('.documentFirstHeading').contains('My First Book');

    // Check first item
    cy.get('.statistic:nth-child(1) .value').contains('5');
    cy.get('.statistic:nth-child(1) .label').contains('First Label');
    cy.get('.statistic:nth-child(1) .text-center').contains('First Extra Info');

    // Check second item
    cy.get('.statistic:nth-child(2) .value').contains('10');
    cy.get('.statistic:nth-child(2) .label').contains('Second Label');
    cy.get('.statistic:nth-child(2) .text-center').contains('Second Extra Info');

    // Check third item
    cy.get('.statistic:nth-child(3) .value').contains('15');
    cy.get('.statistic:nth-child(3) .label').contains('Third Label');
    cy.get('.statistic:nth-child(3) .text-center').contains('Third Extra Info');
  });
});
