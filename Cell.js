const CellType = require("CellType.js");
class Cell
{
  constructor(pType, pX, pY)
  {
    this.aX = pX;
    this.aY = pY;
    this.aType = pType;
    this.aIsFlooded = false;
  }
  get X()
  {
    return this.aX;
  }
  get Y()
  {
    return this.aY;
  }
  get Attractiveness()
  {
    return 0;
  }
  get IsBuildable()
  {
    switch(this.aType)
    {
      case CellType.Grass:
      case CellType.Arable:
      {
        return true;
      }
      case CellType.ArableRiver:
      {
        if(this.aFlooded)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      default:
      {
        return false;
      }
    }
  }
}