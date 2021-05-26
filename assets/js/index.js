window.onload = () => {
  const game = new Game("canvas");
  window.game = game;
  
  let background = document.getElementById("info");
  
      document.addEventListener('keydown', () => {
        if (!game.drawInterval) {
          document.getElementById("canvas").style.display = "block";
          document.getElementById("info").style.display = "none";
      game.start();
      game.theme.play();
        }
      })

      document.addEventListener('keydown', (event) => {
        game.onKeyEvent(event)
      })
    
      document.addEventListener('keyup', (event) => {
        game.onKeyEvent(event);
      })
}