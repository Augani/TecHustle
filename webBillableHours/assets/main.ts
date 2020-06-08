interface companyData{
    employee: Array<Employee>;
}

interface workData{
    employeeId: string;
    rate: number;
    company: string;
    date: string;
    startTime: string;
    endTime: string;
}
interface Employee{
    id: string;
    numberOfHours: number;
    unitPrice: number;
    company: string;
}
interface EmployeeData{
    id: string;
    numberOfHours: number;
    unitPrice: number;
    cost: number;
}

interface InvoiceData{
    companyName: string;
    employeeData: Array<EmployeeData>;
}

class Invoice{
    company : string;
    employeeData: Array<workData>;

    constructor(nameOfCompany: string, data: Array<workData>){
        this.company = nameOfCompany;
        this.employeeData = data;
    }

    getEmployeesBill(): Array<EmployeeData>{
        let companyBills = this.employeeData.filter(x=>x.company == this.company);
        if(!companyBills.length){
            return 
        }
        let refinedCompanyBills = companyBills.map((bill, index)=>{
            let aBill: EmployeeData;
            aBill.id = bill.employeeId;
            aBill.unitPrice = bill.rate;
            aBill.numberOfHours = this.getHours(bill);
            aBill.cost = aBill.numberOfHours * aBill.unitPrice;
            return aBill;
        })

        return refinedCompanyBills;

    }

    getHours(employee: workData): number{
        let hours: number = 0;
        let start: any = new Date(`${employee.date} ${employee.startTime}`);
        let end: any = new Date(`${employee.date} ${employee.endTime}`);
        let difference: any = end - start;
        hours = difference/1000/60/60;
        return hours;
    }

    generateInvoice(): InvoiceData{
        let data = {
            companyName: this.company,
            employeeData: this.getEmployeesBill()
        }
        return data;

    }
}


class createTable {
    company: string;
    employees: Array<EmployeeData>;
    table: HTMLTableElement;
    constructor(company: string, employeeData: Array<EmployeeData>){
        this.company  = company;
        this.employees = employeeData;
    }

    create(){
        let headers: Array<string>  = Object.getOwnPropertyNames(this.employees[0])
        let tableHolder: HTMLElement = document.getElementById('presentation');
        this.table = document.createElement('table');
        let row: HTMLTableRowElement = this.table.insertRow(-1);
    
        for (let i = 0; i < headers.length; i++) {
            let th = document.createElement("th"); 
            th.innerHTML = headers[i];
            row.appendChild(th);
        }
    
        for (var i = 0; i < this.employees.length; i++) {
            row = this.table.insertRow(-1);
            for (var j = 0; j < headers.length; j++) {
                var tabCell = row.insertCell(-1);
                tabCell.innerHTML = this.employees[i][headers[j]];
            }
    }
        tableHolder.innerHTML = "";
        tableHolder.appendChild(this.table);
}

   
}