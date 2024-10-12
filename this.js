class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sleep(){
        console.log(`${this.name} is sleeping now.`)
    }

    activity(){
        this.sleep();
    }
}

const samantha = new Person('Samantha', 21)
console.log(samantha);
samantha.sleep();
samantha.activity();