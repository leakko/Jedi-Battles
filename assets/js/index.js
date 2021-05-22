window.onload = () => {
    const game = new Game("canvas");
    window.game = game;
    document.addEventListener('keydown', (event) => {
        game.onKeyEvent(event)
      })
    
      document.addEventListener('keyup', (event) => {
        game.onKeyEvent(event);
      })
    game.start();
    console.log(game.jediOne.collidesWith(game.tiles[0]))
}