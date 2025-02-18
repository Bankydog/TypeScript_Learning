class Department {
  //   private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = n;
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employees: string) {
    this.employees.push(employees);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
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
