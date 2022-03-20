// tuple example
const person: {
	role: [number, string]
} = {
	role: [2, 'author']
}

// enum example
enum Role {
	ADMIN = 5,
	READ_ONLY,
	AUTHOR
}

const person2 = {
	name: 'Fouche',
	role: Role.ADMIN
}

console.log(person2.role.valueOf())
