class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    calling(){
        console.log(`O seu nome é: ${this.name} e estas com: ${this.age} anos de idade.`);
    }
}

const person1 = new Person("Fidel", 18);
const person2 = new Person("Maluto", 19);

person1.calling();
person2.calling();
