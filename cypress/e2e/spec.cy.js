describe('User experience', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=OGdrXkTilLXjkwGRAzt8mHxh2z48bmb3",
      {
        fixture: "/example.json"
      }
    )
      .as("sampleData")
      .visit("http://localhost:3000")
  })
  it('Should display a list of articles on the homepage', () => {
    cy.wait("@sampleData")
      .its("response.body.results")
      .should("have.length", 3)
  })
  it('Should redirect the user to another page of a more detailed view of that article when the article is clicked', () => {
    cy.get(".list")
      .first()
      .click()
      .get("h1").contains("‘Revolver,’ Newly Expanded, Shows the Beatles at a Creative Peak")
      .get("p").first().contains("A five-disc set reveals a band awash with musical and sonic ideas, having fun and making breakthroughs.")
      .get("img").should('have.attr', 'src')
      .get(".byline").contains("By Jon Pareles")
      .get(".date").contains("2022-10-31T14:03:04-04:00")
      .get(".website-anchor").contains("Click Here to see this article on the NY Times Website")
      .get("button").contains("Go Home")
  })
  it('Should allow the user to navigate back to the homepage when the home buttons is clicked', () => {
    cy.get(".list")
      .first()
      .click()
      .get("h1").contains("‘Revolver,’ Newly Expanded, Shows the Beatles at a Creative Peak")
      .get("p").first().contains("A five-disc set reveals a band awash with musical and sonic ideas, having fun and making breakthroughs.")
      .get("img").should('have.attr', 'src')
      .get(".byline").contains("By Jon Pareles")
      .get(".date").contains("2022-10-31T14:03:04-04:00")
      .get(".website-anchor").contains("Click Here to see this article on the NY Times Website")
      .get("button").contains("Go Home").click().url().should("eq", "http://localhost:3000/")
  })
})