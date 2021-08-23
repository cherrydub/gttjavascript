//run me to test the script, the medals.test.js has a few more things within the code to see if they 2 tables match up identically

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
    // I just need to sort it so it ends it with the most points on the top, however I'm still not sure why Italy would be first, in that list out of the 4 values
    return medalTable;
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




console.log(createMedalTable(medals))


// adding all the stuff below to test the code

//console.log(medalTable)

//console.log(createMedalTable(medals) == medalTable)

// The values end up the same but technically they do not 'equal' eachother
// Sorted by highest points first
