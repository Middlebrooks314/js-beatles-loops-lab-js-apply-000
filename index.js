// add solution here

function theBeatlesPlay (musiciansArray, instrumentsArray){
  let emptyArray = [];
  for (let i = 0; i < musiciansArray.length; i++) {
    emptyArray.push(
    `${musiciansArray[i]} plays ${instrumentsArray[i]}`
    );
  }
  return emptyArray;
}

function johnLennonFacts (facts) {
  for (let i = 0; i < facts.length; i++) {
    facts.push(`${facts} !!!`);
  }
  return facts; 
}

