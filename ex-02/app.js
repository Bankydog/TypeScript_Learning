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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new ITDepartment("d1", ["Bank"]);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();
const accountingCopy = { name: "DUMMY", describe: accounting.describe };
const it = new ITDepartment("d1", ["Bank"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();
const itCopy = { name: "DUMMY", describe: accounting.describe };
console.log(it);
const accounting2 = new AccountingDepartment("d3", []);
accounting2.addReport("Something went wrong...");
accounting2.printReports();
