class Map
{
  constructor()
  {
    this.aCells = [];// array of array of cells
    this.aBuildings = []; // array of IBuilding
  }
  mIsConstructible(pX, pY)
  {
    return this.aCells[pY][pX].IsBuildable;
  }
  mLoadMap()
  {
    this.aCell = [
      [3,3,3,4,3,3,3],
      [0,0,1,4,1,0,0],
      [0,1,2,4,2,1,0],
      [0,1,2,4,2,1,0],
      [0,0,1,4,1,0,0],
      [0,0,0,4,0,0,0],
      [5,5,5,5,5,5,5],
      [5,5,5,5,5,5,5]
    ]
  }
  mDraw()
  {
    
  }
}