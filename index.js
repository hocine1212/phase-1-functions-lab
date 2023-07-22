// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  let numberOfBlocks;
  if (pickup <= 42) {
    numberOfBlocks = 42 - pickup;
  } else {
    numberOfBlocks = pickup - 42;
  }
  return numberOfBlocks;
}
// console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    let price = (distance - 400) * 0.02;

    return price;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}

console.log(calculatesFarePrice(43, 44));
