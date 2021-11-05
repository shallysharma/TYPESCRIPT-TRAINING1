class Customer {

 private firstName: string;
 private lastName: string;

 constructor(theFirst: string, theLast: string){
   this.firstName = theFirst;
   this.lastName = theLast;
 }
}

//let's create an instance 

let myCustomer = new Customer("Shally" , "Sharma");


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);