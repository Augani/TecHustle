var Invoice = /** @class */ (function () {
    function Invoice(nameOfCompany, data) {
        this.company = nameOfCompany;
        this.employeeData = data;
    }
    Invoice.prototype.getEmployeesBill = function () {
        var _this = this;
        var companyBills = this.employeeData.filter(function (x) { return x.company == _this.company; });
        if (!companyBills.length) {
            return;
        }
        var refinedCompanyBills = companyBills.map(function (bill, index) {
            var aBill = {};
            aBill.id = bill.employeeId;
            aBill.unitPrice = bill.rate;
            aBill.numberOfHours = _this.getHours(bill).toFixed(2);
            aBill.cost = (aBill.numberOfHours * aBill.unitPrice).toFixed(2);
            return aBill;
        });
        return refinedCompanyBills;
    };
    Invoice.prototype.getHours = function (employee) {
        var hours = 0;
        var start = new Date(employee.date + " " + employee.startTime);
        var end = new Date(employee.date + " " + employee.endTime);
        var difference = end - start;
        hours = difference / 1000 / 60 / 60;
        return hours;
    };
    Invoice.prototype.generateInvoice = function () {
        var data = {
            companyName: this.company,
            employeeData: this.getEmployeesBill()
        };
        return data;
    };
    return Invoice;
}());
var createTable = /** @class */ (function () {
    function createTable(company, employeeData) {
        this.company = company;
        this.employees = employeeData;
    }
    createTable.prototype.create = function () {
        var headers = Object.getOwnPropertyNames(this.employees[0]);
        var tableHolder = document.getElementById('presentation');
        this.table = document.createElement('table');
        var row = this.table.insertRow(-1);
        for (var i_1 = 0; i_1 < headers.length; i_1++) {
            var th = document.createElement("th");
            th.innerHTML = headers[i_1];
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
    };
    return createTable;
}());


