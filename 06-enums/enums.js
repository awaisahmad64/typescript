var cardinalDirections;
(function (cardinalDirections) {
    cardinalDirections[cardinalDirections["North"] = 1] = "North";
    cardinalDirections[cardinalDirections["East"] = 2] = "East";
    cardinalDirections[cardinalDirections["South"] = 3] = "South";
    cardinalDirections[cardinalDirections["West"] = 4] = "West";
})(cardinalDirections || (cardinalDirections = {}));
//log 1
console.log(cardinalDirections.North);
console.log(cardinalDirections.East);
console.log(cardinalDirections.South);
console.log(cardinalDirections.West);
