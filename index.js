//Returns a function that then calculates whether a given trip is within range. 

function produceDrivingRange(blockRange){
    return function(startingBlock, endingBlock){
  
      let start = parseInt(startingBlock);
      let end = parseInt(endingBlock);
      let distanceToTravel = Math.abs(end - start);
      let difference = blockRange - distanceToTravel;
  
      if( difference > 0){
        return `within range by ${difference}`
      } else {
        return `${Math.abs(difference)} blocks out of range`
      }
    }
  }

  //Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. 
  function produceTipCalculator(percentage){
    return function(rideFare){
      return rideFare*percentage;
    }
  }

  //unlike previous examples the driverId is wrapped within the createDriver function which does not make it accessible elsewhere. 
  function createDriver(){
    let driverId = 0
    return class {
      constructor(name){
        this.id = ++driverId
        this.name = name
      }
    }
  }