// Code your solution in this file!

const returnFirstTwoDrivers= function(drivers){
  const new_array = [];
  new_array.push(drivers[0]);
  new_array.push(drivers[1]);
  return new_array;
};

const returnLastTwoDrivers= function(drivers){
  const new_array = [];
  new_array.push(drivers[drivers.length-2]);
  new_array.push(drivers[drivers.length-1]);

  return new_array;
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(input){
  return function (val){
    return input*val;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}
