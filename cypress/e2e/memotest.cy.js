describe('Memo Test Game', () => {
  beforeEach(() => {
    cy.visit('http://26.11.136.124:8080/src/'); 
  });

  it('deberia comenzar el juego con todos los cuadrados ocultos', () => {
    cy.get('.cuadro').should('have.css', 'opacity', '0');
  });

  it('deberia revelar el cuadro cuando se clickea', () => {
    cy.get('.cuadro').first().click();
    cy.get('.cuadro').first().should('have.css', 'opacity', '1');
  });

  it('verifica que 2 cuadros se revelen cuando se hace click en ellos', () => {
    cy.get('.cuadro').first().click();
    cy.get('.cuadro').eq(1).click();
    cy.get('.cuadro').first().should('have.css', 'opacity', '1');
    cy.get('.cuadro').eq(1).should('have.css', 'opacity', '1');
  });

  it('si no coinciden deberian ocultarse los cuadros', () => {
    cy.get('.cuadro').then($cuadros => {
      
      if ($cuadros[0].className === $cuadros[1].className) {
        cy.get('.cuadro').eq(2).click();
      }
      cy.get('.cuadro').first().click();
      cy.get('.cuadro').eq(1).click();
      cy.wait(600); 
      cy.get('.cuadro').first().should('have.css', 'opacity', '0');
      cy.get('.cuadro').eq(1).should('have.css', 'opacity', '0');
    });
  });

  it('verifica que los 2 primeros cuadros sean iguales', () => {
    cy.get('.cuadro').then($cuadros => {
      
      if ($cuadros[0].className !== $cuadros[1].className) {
        cy.get('.cuadro').eq(1).click();
        cy.get('.cuadro').eq(2).click();
      }

    });
  });
});