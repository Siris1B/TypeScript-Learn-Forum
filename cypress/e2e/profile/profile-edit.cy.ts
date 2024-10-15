let profileId = '';

describe('Користувач заходить на сторінку профілю', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('І профіль успішно завантажується', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'Юра5');
  });
  it('І редагує його', () => {
    const newName = 'new';
    const newLastname = 'lastname';
    cy.updateProfile(newName, newLastname);
    cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
    cy.getByTestId('ProfileCard.lastname').should(
      'have.value',
      newLastname,
    );
  });
});
