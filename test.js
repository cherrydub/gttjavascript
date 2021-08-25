
function createMedalTable(medals) {
  // The winner gets 3 points, second place 2 points and third place 1 point
  const medalTable = {};

  const pointsMap = {
      1: 3,
      2: 2,
      3: 1
  };
  for(let event of medals) {
      const podiumResult = event.podium;
      for(let positionData of podiumResult) {
          const temp = positionData.split(".");
          const position = temp[0];
          const country = temp[1];
          if(!(country in medalTable)) {
              medalTable[country] = 0;
          }
          medalTable[country] = medalTable[country] + pointsMap[position];
      }
  }

  // Returning medalTable above would certainly show a list with points but not ordered correctly
  // I just need to sort it so it ends it with the most points on the top
  // However I'm still not sure why Italy would be first, in that list out of the 4 values
  // Swappin the a and b in the sort did not help, however keeping it the same and reversing the list helped show it correctly

  let medalTableSortable = [];
  for (let country in medalTable) {
      medalTableSortable.push([country,medalTable[country]]);
  }

  medalTableSortable.sort(function(a, b) {
      return a[1] - b[1];
  }).reverse();

  const medalTableSorted = {};

  for(let country of medalTableSortable){
      medalTableSorted[country[0]] = country[1];
  }


  return medalTableSorted;
}


// so i cut off all the extra stuff from the origial medal.test since i wasnt able to test the code since it didnt match up
// lastly need to add " " around the country names like below
const medalTable = {
    "Italy": 4,
    "France": 4,
    "ROC": 4,
    "USA": 3,
    "Qatar": 3,
    "China": 3,
    "Germany": 2,
    "Brazil": 1,
    "Belarus": 1,
};


const medals = [{
                sport: "cycling",
                podium: ["1.China", "2.Germany", "3.ROC"]
            },
            {
                sport: "fencing",
                podium: ["1.ROC", "2.France", "3.Italy"]
            },
            {
                sport: "high jump",
                podium: ["1.Italy", "1.Qatar", "3.Belarus"]
            },
            {
                sport: "swimming",
                podium: ["1.USA", "2.France", "3.Brazil"]
            }
            ];


//just wanted to compare as getting them to order up correctly was quite difficult for me

console.log(createMedalTable(medals))

console.log(medalTable)


