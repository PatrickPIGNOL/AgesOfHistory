const IBuildingHouse = require("IBuildingHouse.js");
class BuildingHouse extends IBuildingHouse
{
  constructor()
  {
    super();
    this.aLevel = 0;
  }  
  static mCanBuild(pMap, pX, pY)
  {
    return false;
  }
  get Level()
  {
    return this.aLevel;
  }
}

module.exports = BuildingHouse;