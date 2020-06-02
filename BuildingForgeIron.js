const IBuildingForge = require("IBuildingForge.js");
class IBuildingForgeIron extends IBuildingForge {
  // 10Fe2O3 + 1C => 5Fe units.
  constructor() {
    super();
    this.aWorker = 0;
    this.aNeededWorker = 5;
    this.aProductionTime = 10;
    this.aIronOxydeCapacity = 20;
    this.aIronOxydeStored = 0;
    this.aCarbonCapacity = 2;
    this.aCarbonStored = 0;
    this.aIronMetalCapacity = 10;
    this.aIronMetalStored = 0;
  }
}

module.exports = IBuildingForgeIron;
