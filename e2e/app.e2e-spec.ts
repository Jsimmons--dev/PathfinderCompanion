import { PathfinderCompanionPage } from './app.po';

describe('pathfinder-companion App', function() {
  let page: PathfinderCompanionPage;

  beforeEach(() => {
    page = new PathfinderCompanionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
