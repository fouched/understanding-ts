interface Greetable {
	greet(phrase: string) : void
}

class Person implements Greetable {

	constructor(private name: string, private age: number) {
	}

	greet(phrase: string): void {
		console.log(phrase + ' ' + this.name)
	}	
}

let user1 = new Person('Fouche', 50)
user1.greet('Hi')
