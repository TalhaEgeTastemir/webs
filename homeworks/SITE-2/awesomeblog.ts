class Person {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person = new Person("Jane");
  console.log(person.getName());

  
const person2 = new Person("Ali");
console.log(person2.getName());

const person3 = new Person("Brian");
console.log(person3.getName());
