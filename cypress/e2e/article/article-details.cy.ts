let currentArticleId = '';
describe('Користувач заходить на сторінку статті', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });
  it('І бачить вміст статті', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('І бачить список рекомендацій', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
  it('І залишає коментар', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('І ставить оцінку', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'відгук');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
