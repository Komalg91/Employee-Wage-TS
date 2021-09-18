//UC11
class Payroll
{
    public pay_name:string;
    public pay_id:number;
    public pay_salary:number;
    constructor(name:string, id:number, salary:number)
    {
        this.pay_name = name;
        this.pay_id = id;
        this.pay_salary = salary;
    }
    get payroll_name():string
    {
        return this.pay_name;
    }
    set payroll_name(set_name:string)
    {
        var regex = /^([A-Z]{1})([a-zA-Z]{2,})$/;
        if(regex.test(this.pay_name)==true)
        {
            console.log("Valid");
            this.pay_name = set_name;
        }
        else{
            throw "Name is invalid";
        }
        
    }
    get payroll_id():number
    {
        return this.pay_id;
    }
    set payroll_id(set_id:number)
    {
        this.pay_id = set_id;
    }
    get payroll_salary():number
    {
        return this.pay_salary;
    }
    set payroll_salary(set_salary:number)
    {
        this.pay_salary = set_salary;
    }
    
    display()
    {
        return "Name: " +this.pay_name +"  Salary: " +this.pay_salary + "  ID: " +this.pay_id;
    }
  
}
//UC12

class EmployeePayroll extends Payroll
{
    public gender:string;
    constructor(pay_name:string ,pay_id:number, pay_salary:number,gender:string)
    {
        super(pay_name,pay_id,pay_salary);
        this.gender = gender;
    }
    get payroll_gender():string
    {
        return this.gender;
    }
    set payroll_gender(set_gender:string)
    {
        var regex = /^([MFmf])$/;
        if(regex.test(this.gender)==true)
        {
            this.gender = set_gender;
        }
        else{
            throw "Gender is invalid";
        }
    }
    display():string
    {
        return super.display() + "  Gender: " +this.gender;
    }

}



let payroll_obj= new Payroll("Tutorialspoint",25,35000);
console.log(payroll_obj.pay_name);
console.log(payroll_obj.pay_id);
console.log(payroll_obj.pay_salary);
payroll_obj.pay_name = "John";
console.log(payroll_obj.pay_name);
console.log(payroll_obj.display());

let emp_payy=new EmployeePayroll("Komal",123,36000,"F");
console.log(emp_payy.display());
emp_payy.payroll_gender = "F";
emp_payy.payroll_id = 456;
emp_payy.payroll_salary = 37000;
console.log(emp_payy.display());



