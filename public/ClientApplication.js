const application = new PIXI.Application({
  //view: canvas,
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: window.devicePixelRatio,
  autoResize: true
/*
  resizeTo: window,
  autoDensity: true
*/
});

document.body.appendChild(application.view);

application.renderer.resize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", resize);

function resize()
{
  application.renderer.resize(window.innerWidth,window.innerHeight);
}

const texture = PIXI.Texture.from("https://cdn.glitch.com/9e6f9222-7418-4b0e-b0af-ee6e30f09260%2Fphaser3-logo.png");
const img = new PIXI.Sprite(texture);

img.anchor.x = 0.5;
img.anchor.y = 0.5;
application.stage.addChild(img);
application.ticker.add(animate);
let delta = 0
function animate()
{
  delta += 1;
  img.x = application.screen.width / 2;
  img.y = application.screen.height / 2;
  img.width = application.screen.width / 10;
  img.height = application.screen.height / 10;
  img.rotation = delta / 100;
  application.render();
}

class ClientApplication
{
  constructor()
  { 
    
  }
  mStart()
  {
    
  }
  mInit()
  {
    
  }
  mLoop()
  {
    
  }
}

module.exports = ClientApplication;