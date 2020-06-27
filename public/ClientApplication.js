//import * as PIXI from "pixi.js";

const application = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: window.devicePixelRatio,
  autoResize: true
});
document.body.appendChild(application.view);
//const vLoader = PIXI.loader;
//vLoader.add("https://cdn.glitch.com/9e6f9222-7418-4b0e-b0af-ee6e30f09260%2Fempty.png");

//application.renderer.resize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", resize);
 
function resize() {
  application.renderer.resize(window.innerWidth, window.innerHeight);
  animate();
}

//const texture = PIXI.Texture.from("https://cdn.glitch.com/9e6f9222-7418-4b0e-b0af-ee6e30f09260%2Fphaser3-logo.png");
//const img = new PIXI.Sprite(texture);

const GroundTexture = PIXI.Texture.from(
  "https://cdn.glitch.com/9e6f9222-7418-4b0e-b0af-ee6e30f09260%2Fempty2.png"
);
const HomeTexture = PIXI.Texture.from(
  "https://cdn.glitch.com/9e6f9222-7418-4b0e-b0af-ee6e30f09260%2F0000.png"
);

let vGrounds = [];
const vSquare = 121;
const vScale = 10;
const vTransform = {
  homeWidth: HomeTexture.width/vScale * 0.9962,
  homeHeight: HomeTexture.height/vScale * 1.121,
  groundWidth: GroundTexture.width/vScale * 1.0,
  groundHeight: GroundTexture.height/vScale * 1.0,
}
const vOrigin = {
  homeX: 0 + application.screen.width / 2,
  homeY: 0 + HomeTexture.height / vScale / 2,
  groundX: 0 + application.screen.width / 2,
  groundY: 0 + (GroundTexture.height / vScale / 2) + (16 / vScale),
}
for (let i = 0; i < vSquare; i++) 
{  
  let vX = i % Math.sqrt(vSquare);
  let vY = Math.floor(i / Math.sqrt(vSquare));
  

  let Ground = new PIXI.Sprite(GroundTexture);
  vGrounds.push(Ground);
  application.stage.addChild(Ground);
  Ground.tint = "0xCFCFBB";
  if(i === 0)
  {
    Ground.tint = "0xFF0000";
  }
  if(i === Math.sqrt(vSquare)-1)
  {
    Ground.tint = "0x00FF00";
  }
  if(i === vSquare- Math.sqrt(vSquare))
  {
    Ground.tint = "0xFF00FF";
  }
  if(i === vSquare - 1)
  {
    Ground.tint = "0xFFFF00";
  }
  Ground.anchor.x = 0.5;
  Ground.anchor.y = 0.5;  
  
  Ground.x = (vOrigin.homeX) + (Ground.width/2 * vX) - (vY * Ground.width/2)// + vAlignment.homeX;
  Ground.y = (vOrigin.homeY) + (Ground.height/2 * vY) + (vX * Ground.height/2)// + vAlignment.homeY;
  
  Grounds.put(Ground);
}
let vBuildings = [];
for (let i = 0; i < vSquare; i++) 
{  
  let vX = i % Math.sqrt(vSquare);
  let vY = Math.floor(i / Math.sqrt(vSquare));
  
  const vAlignment = {
    homeX: (-vX * 1 / vScale) + (vY * 1 / vScale),
    homeY: (- vX * 30 / vScale) + (- vY * 30 / vScale)// - (45 / vScale),
  }
  let Home = new PIXI.Sprite(HomeTexture);
  //application.stage.addChild(Home);
  if(i === 0)
  {
    vBuildings.push(Home);
    application.stage.addChild(Home);
    Home.tint = "0x00FF00";
  }
  else if(i === Math.sqrt(vSquare)-1)
  {    
    vBuildings.push(Home);
    application.stage.addChild(Home);
    Home.tint = "0xFF0000";
  }
  else if(i === vSquare - Math.sqrt(vSquare))
  {    
    vBuildings.push(Home);
    application.stage.addChild(Home);
    Home.tint = "0xFFFF00";
  }
  else if(i === vSquare - 1)
  {
    vBuildings.push(Home);
    application.stage.addChild(Home);
    Home.tint = "0xFF00FF";
  }
  else if(i % 2 === 0)
  {
    vBuildings.push(Home);
    application.stage.addChild(Home);
  }  
  Home.anchor.x = 0.5;
  Home.anchor.y = 0.5;  
  Home.width = vTransform.homeWidth;
  Home.height = vTransform.homeHeight;  
  
  
  Home.x = (vOrigin.homeX) + (Home.width/2 * vX) - (vY * Home.width/2) + vAlignment.homeX;
  Home.y = (vOrigin.homeY) + (Home.height/2 * vY) + (vX * Home.height/2) + vAlignment.homeY;
} 

let Text = new PIXI.Text("",{fontFamily : 'Arial', fontSize: 24, fill : 0xFFFFFF, align : 'center'});
Text.x = 10;
Text.y = 50;
application.stage.addChild(Text);
//img.anchor.x = 0.5;
//img.anchor.y = 0.5;

//application.stage.addChild(img);
application.ticker.add(animate);
let delta = 0;
function animate() {
  delta += 1;
  
  for(let i = 0; i < vSquare; i++)
  {
    let Ground = vGrounds[i];
    let vX = i % 3;
    let vY = i / 3;
    const vAlignment = {
      groundX: (-vX * 3 / vScale) + (vY * 3 / vScale),
      groundY: (- vX * 5 / vScale) + (- vY * 5 / vScale),
    }
    Ground.width = vTransform.groundWidth;
    Ground.height = vTransform.groundHeight;   
    Ground.x = (vOrigin.groundX) + (Ground.width/2 * vX) - (vY * Ground.width/2) + vAlignment.groundX;
    Ground.y = (vOrigin.groundY) + (Ground.height/2 * vY) + (vX * Ground.height/2) + vAlignment.groundY;  
  }
    
    
  
  
  Text.text = `Try google chrome if you cannot see the map`;
  
  //  img.x = application.screen.width / 2;
  //  img.y = application.screen.height / 2;
  //  img.width = application.screen.width / 10;
  //  img.height = application.screen.height / 10;
  //  img.rotation = delta / 100;
  application.render();
}
/*
class ClientApplication
{
  constructor()
  { 
    this.application = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      resolution: window.devicePixelRatio,
      autoResize: true
    });
    document.body.appendChild(this.application.view);
    this.application.renderer.resize(window.innerWidth, window.innerHeight);
    this.texture = PIXI.Texture.from("https://cdn.glitch.com/9e6f9222-7418-4b0e-b0af-ee6e30f09260%2Fphaser3-logo.png");
    this.img = new PIXI.Sprite(texture);
    this.img.anchor.x = 0.5;
    this.img.anchor.y = 0.5;
    this.application.stage.addChild(img);
    this.application.ticker.add(()=>{
      this.mLoop();
    });
    this.delta = 0;
  }
  mLoop()
  {
    this.delta += 1;
    this.img.x = this.application.screen.width / 2;
    this.img.y = this.application.screen.height / 2;
    this.img.width = this.application.screen.width / 10;
    this.img.height = this.application.screen.height / 10;
    this.img.rotation = this.delta / 100;
    this.application.render();
  }
}
*/
//module.exports = new ClientApplication();
