class IBuilding
{
  constructor(pX, pY)
  {
    this.aX = pX;
    this.aY = pY;
  }
  static get mCost()
  {
    
  }
  static mCanBuild(pX, pY)
  {
    return false;
  }
  get X()
  {
    return this.aX;
  }
  get Y()
  {
    return this.aY;
  }
  static mCanBuild(pMap, pX, pY)
  {
    return false;
  }
}

module.exports = IBuilding;