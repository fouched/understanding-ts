function add(n1: number, n2: number) {
	return n1 + n2
}

// define a callback as third argument, specifying the function signature
// that will be accepted
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2
	cb(result)
}
// a valid callback function for addAndHandle
function printResult(n: number) {
	console.log('Result: ' + n)
}

addAndHandle(10, 19, printResult)

