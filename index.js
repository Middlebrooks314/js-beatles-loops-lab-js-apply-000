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
  let i = 0
  let factsArray = [];
  while (i < facts.length)
{
  factsArray.push(`${facts[i]}!!!`)
}
}