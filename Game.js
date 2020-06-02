class Game
{
  constructor()
  {
    this.aStage;
    this.aRenderer;
    this.mInit();
  }
  mInit()
  {
    /*
    var app = new PIXI.Application();
    
    const canvas = document.getElementById("canvas");
    this.aRenderer = new PIXI.Renderer({
      view: canvas,
      width: window.innerWidth,
      height: window.innerHeight
    });
    this.aStage = new PIXI.Container();
    const texture = new PIXI.Texture.from("sprite.png")
    const img = new PIXI.Sprite(texture);
    */
  }
  mLoop()
  {    
    this.aRenderer.render(this.aStage);
  }
}