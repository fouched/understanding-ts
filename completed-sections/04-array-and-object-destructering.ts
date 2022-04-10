const sports = ['swimming', 'cricket', 'rugby', 'surfing']

// destruct the array by pulling out specific index values,
// or combining with the spread operator for remaining // all
const [sport1, sport2, ...remainingSports] = sports
const [...allSports] = sports

console.log(sport1, sport2, remainingSports)
console.log(allSports)

const person1 = {
	fristName: 'Fouche',
	age: 50,
}

// pull-out (destruct by using property name of an object)
const { fristName } = person1
console.log(fristName)
