const Map = require("Map.js");
class City
{
  constructor()
  {
    this.aInhabitants = 0;
    this.aSalary = 0;
    this.aPropertyTaxRate = 0;
    this.aIndustrialTaxRate = 0;
    this.aMap = new Map();
    this.aBuildings = new Array();// of IBuildings
    this.aWaterLevel = 0;
  }
  get Inhabitants()
  {
    return this.aInhabitants;
  }
  get Salary()
  {
    return this.aSalary;
  }
  get PropertyTaxRate()
  {
    return this.aPropertyTaxRate;
  }
  get IndustrialTaxRate()
  {
    return this.aIndustrialTaxRate;
  }
  get Map()
  {
    return this.aMap;
  }
  get Buildings()
  {
    return this.aBuildings;
  }
  get WaterLevel()
  {
    return this.aWaterLevel;
  }
}
