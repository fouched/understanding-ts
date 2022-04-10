class DbConnection {
	private static instance: DbConnection

	private constructor() {}

	static getInstance() {
		if (this.instance) {
			return this.instance
		}
		this.instance = new DbConnection()
		return this.instance
	}
}

const dbConn = DbConnection.getInstance()

abstract class Department {
	constructor(private readonly id: string, protected name: string, protected employees: string[]) {}

	addEmployee(e: string) {
		this.employees.push(e)
	}

	abstract printEmployees(): void
}

class ITDepartment extends Department {
	constructor(id: string, private admins: string[]) {
		super(id, 'IT', [])
	}

	get administrators() {
		return this.admins
	}

	set administrators(admins: string[]) {
		this.admins = admins
	}

	addAdmin(a: string) {
		this.admins.push(a)
	}

	printEmployees() {
		console.log(this.name + ' department has ' + (this.employees.length + this.admins.length) + ' employees')

		console.log('Normal employees: ' + this.employees)
		console.log('Admins: ' + this.admins)
	}

	printAdmins() {
		console.log(this.admins)
	}
}

const it = new ITDepartment('d1', ['Fouche'])
it.addAdmin('Emily')
it.addEmployee('Olivia')
it.printEmployees()

console.log(it.administrators)
it.administrators = []
console.log(it.administrators)
