import { selectByTestId } from '../../helpers/selectByTestId';

describe('template spec', () => {
  describe('Користувач НЕ авторізований', () => {
    it('На головну сторінку', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('На сторінку профіля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('На невідому сторінку', () => {
      cy.visit('/profiles/1');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('Користувач авторізований', () => {
    beforeEach(() => {
      cy.login('admin', '123');
    });
    it('На сторінку профіля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('На сторінку статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
