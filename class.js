class Product{
    // No need to use 'var' or 'const' here for instance variables
    country = 'Bangladesh';

    // Constructor -- > ekhane ja ja set korbo tai diye dite hobe parameter e r value set korar somoy 'this.parameter = value' ei format use korte hobe..
    // Constructor to initialize name and price
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    // Method definition should use 'methodName()' syntax
    // function -- > ekhane function name likhte hoyna
    products(){
        console.log('products are : ')
    }
}

const pen = new Product('Pen', 10);
console.log(pen);
console.log(`Name: ${pen.name}, Price: ${pen.price}, Country: ${pen.country}`);