import { Person } from './person';

export class Student {
    public firstName : string;
    private  lastName :  string;
    protected age : number;
   // constructor(fN, lN, age) {  // any type of data
   //constructor(fN : string, lN : string, age : number) { 
    constructor(obj : Person) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.age = obj.age;
    }

    getFullName() : string {
        return this.firstName + " " + this.lastName;
    }

}