console.log("*************** Welcome to Employee Wage Computation******************");

//UC1 check employee presence
const is_absent: number = 0;
function attendance_check(empCheck: number): number { 
    if(empCheck == is_absent){
        console.log("Employee is absent");
        empCheck = 0;
    }
    else{
        console.log("Employee is present");
        empCheck = 1;
    }
    return empCheck;
}


const full_time: number = 8;
const part_time: number = 4;
const wage_per_hour: number = 20;
let emp_hours: number;
let emp_monthly_wage: number = 0;
let emp_daily: number;
let emp_daily_hour: number;
const month_days: number = 20;
const max_work_hours: number = 160;

//UC3 daily hours
function switch_func(random_time: number)
{
    switch(random_time)
    {
        case 1:
            emp_hours = full_time;
            break;
        case 0:
            emp_hours = part_time;
            break;
        default:
            emp_hours = 0;
            break;    
    }
    return emp_hours;
}

//UC2 calculate daily wage
function daily_wage_func(emp_daily_hour: number): number{
    let daily_wage: number = emp_daily_hour * wage_per_hour;
    return daily_wage;
}

//UC4 Monthly wages
function monthly_wage_func(){
    for(let i = 0;i< month_days;i++){
        let random_time: number = Math.floor(Math.random()*10)%3;
        emp_daily_hour = switch_func(random_time);
        let emp_daily_wage: number = daily_wage_func(emp_daily_hour);
        emp_monthly_wage = emp_monthly_wage + emp_daily_wage;
        console.log("Day:",i, "  Hours:", emp_daily_hour, "  Wage:",emp_daily_wage);
    }
    console.log("Monthly wage: ", emp_monthly_wage )
}

//UC5 maximum working hours
function max_work_hours_func(){
    let emp_month_days: number = 0;
    let emp_working_hours: number = 0;
    let emp_present_days: number = 0;
    while(emp_month_days < month_days && emp_working_hours < max_work_hours){
        let random_time: number = Math.floor(Math.random()*10)%3;
        emp_daily_hour = switch_func(random_time);
        let emp_daily_wage: number = daily_wage_func(emp_daily_hour);
        emp_month_days++;
        emp_working_hours = emp_working_hours + emp_daily_hour;
        emp_monthly_wage = emp_monthly_wage + emp_daily_wage;
        console.log("Day:",emp_month_days, "  Hours:", emp_daily_hour, "  Wage:",emp_daily_wage);

        if(emp_daily_hour!=0){
            emp_present_days++;
        }
    }
    console.log("Days present:", emp_present_days);
    console.log("Max hours:", emp_working_hours, " Monthly wage:", emp_monthly_wage);
}


let emp_atd_check: number = Math.floor(Math.random()*10)%2;
console.log(attendance_check(emp_atd_check));

let random_time: number = Math.floor(Math.random()*10)%3;
let daily_wages: number = daily_wage_func(random_time);
console.log("Wage: " +daily_wages);

monthly_wage_func();
max_work_hours_func();
