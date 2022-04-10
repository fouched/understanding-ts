
const initPermission = [1,2,3]
const id = 4 
/// create new array using spread operator and adding to it
const permissions = [...initPermission, id]
console.log(permissions)

// rest parameters - allow for multiple arguments to a function
const addNumbers4 = (...numbers: number[]) => {
	return numbers.reduce((curResult, curValue) => {
		return curResult + curValue
	}, 0)
}

const addedNumbers = addNumbers4(1, 2, 3, 4, 5)
console.log(addedNumbers)