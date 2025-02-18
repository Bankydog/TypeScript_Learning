"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   private name: string;
        this.employees = [];
        // this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();
const accountingCopy = { name: "DUMMY", describe: accounting.describe };
