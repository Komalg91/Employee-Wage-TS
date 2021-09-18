import { connect } from "http2";

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
let emp_daily: number;
let emp_daily_hour: number;
const month_days: number = 20;
const max_work_hours: number = 160;
let emp_daily_wage_array: number[] = [];


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
    let emp_monthly_wage: number = 0;
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
    let emp_monthly_wage: number = 0;

    while(emp_month_days < month_days && emp_working_hours < max_work_hours){
        let random_time: number = Math.floor(Math.random()*10)%3;
        emp_daily_hour = switch_func(random_time);
        let emp_daily_wage: number = daily_wage_func(emp_daily_hour);

        //UC6 daily wage array
        // emp_daily_wage_array.push(emp_daily_wage);
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
    // console.log(emp_daily_wage_array);
    return [emp_daily_wage_array, emp_daily_hour];
}

//UC7 
let emp_new = new Map();

function emp_array_func(){
    let emp_month_days: number = 0;
    let emp_working_hours: number = 0;
    let emp_present_days: number = 0;
    let emp_monthly_wage: number = 0;
    let emp_daily_wage: number;
    let emp_array = new Array();

    while(emp_month_days < month_days && emp_working_hours < max_work_hours){
        let random_time: number = Math.floor(Math.random()*10)%3;
        emp_daily_hour = switch_func(random_time);
        emp_daily_wage = daily_wage_func(emp_daily_hour);

        emp_daily_wage_array.push(emp_daily_wage);
        emp_working_hours = emp_working_hours + emp_daily_hour;

        console.log("Day:",emp_month_days, "  Hours:", emp_daily_hour, "  Wage:",emp_daily_wage);

        //UC8 map
        emp_new.set(emp_month_days+1, emp_daily_wage);

        
        emp_month_days++;
        if(emp_daily_hour!=0){
            emp_present_days++;
        }
    }
    console.log("Days present:", emp_present_days);
    console.log("Max hours:", emp_working_hours);
    console.log(emp_daily_wage_array);

    console.log(emp_new);
    return [emp_daily_wage_array,emp_new];
}

    //UC7A forEach method
    
    function foreach(){
        let total: number = 0;

        emp_daily_wage_array.forEach(element => {
            total = total +element;
        });
        console.log("Employee wage using foreach method: ",total);
    }
    //UC7B
    function map_array(){
        let new_wage_array;
        new_wage_array = emp_daily_wage_array.map(function(val,index){
            return {key:index+1, value:val};
        })
        console.log(new_wage_array);
        return new_wage_array;
    }

    //UC7C
    function filter_array(){
        let full_time_wage: number[] = [];
        full_time_wage = emp_daily_wage_array.filter(function(val:number,index: number) {
            if(val == 160){
                full_time_wage.push(index+1);
                console.log("Day:", index+1, " Wages:", val)
            }
        });
        return full_time_wage;
    }

    //UC7D
    function find_array(){
        let full_time_wage: number[] = [];
        emp_daily_wage_array.find((element,index) => {
            if(element === 160)
            {
                full_time_wage.push(index+1);
            }
            });
        console.log('Full time day using find: ', full_time_wage[0]);
    }

    //UC7F
    function any_array(){
            let full_time_wage: boolean;
            full_time_wage = emp_daily_wage_array.some((val:number,index: number)=> val==80)
            full_time_wage === true ? console.log("Part time found") : console.log("Part time not found");
    }
  
    //UC10
    function object_function(){
        let emp_month_days: number = 0;
        let emp_working_hours: number = 0;
        let emp_array = new Array();
        let emp_wage_map = new Map();
        let emp_day_map = new Map();
        

        let emp_object;
        while(emp_month_days < month_days && emp_working_hours < max_work_hours){
            let random_time: number = Math.floor(Math.random()*10)%3;
            emp_daily_hour = switch_func(random_time);
            let emp_daily_wage: number = daily_wage_func(emp_daily_hour);

           
            emp_working_hours = emp_working_hours + emp_daily_hour;

            
            emp_wage_map.set(emp_month_days,emp_daily_wage);
            emp_day_map.set(emp_month_days,emp_daily_hour);
            

            let emp_object: {
                Day: number,
                Hours: number,
                Wage: number 
            }= {
                Day: emp_month_days,
                Hours: emp_daily_hour,
                Wage: emp_daily_wage,
            };

            emp_array.push(emp_object);
            emp_month_days++;
        }
        
        //UC9A
        const findTotal = (totalVal:number,dailyVal:number) => {
            return totalVal + dailyVal;
        }
        let total_wage: number = 0;
        let total_hour: number = 0;
        total_hour = Array.from(emp_day_map.values()).reduce(findTotal,0);
        console.log("Total hour", total_hour);

        emp_wage_map.forEach((value,index) => {
            total_wage += value;
        });
        console.log("Total Wage, ",total_wage);
        

        //UC9B
        let full_day = new Array();
        let half_day = new Array();
        let no_day = new Array();
        emp_day_map.forEach((value,index) => { 
            if(value === 8) full_day.push(index)
            else if(value === 4) half_day.push(index);
            else no_day.push(index);
        });
        console.log("Full days:", full_day);
        console.log("Half days:", half_day);
        console.log("No working days:", no_day);

       
        console.log(emp_array);

        //UC10 A
        let total_hours: number = 0, total_wages: number = 0;
        emp_array.forEach(ele1 => {
            total_wages = total_wages + ele1.Wage;
            total_hours = total_hours + ele1.Hours;
        });
        console.log("Total hours", total_hours, " Total wages", total_wages);
        
        // UC10 B
        console.log("Full working days: ");
        emp_array.forEach(ele => {
            if(ele.Wage === 160){
                console.log(ele.Day);
            }
        });

        // UC10C
        console.log("Half working days: ")
        let half_work_days = emp_array.filter(ele=> ele.Hours == 4).map(ele => ele);
        console.log(half_work_days);

        //UC10 D
        console.log("Non working days: ")
        let no_work_days = emp_array.map(function(val,index){
            if(val.Hours === 0){
                return val.Day;
                // val_day_array.push(val.Day);
            }   
        });
        console.log(no_work_days.filter(Number));
    }


let emp_atd_check: number = Math.floor(Math.random()*10)%2;
console.log(attendance_check(emp_atd_check));

let random_time: number = Math.floor(Math.random()*10)%3;
let daily_wages: number = daily_wage_func(random_time);
console.log("Wage: " +daily_wages);

monthly_wage_func();
max_work_hours_func();
emp_array_func();
foreach();
map_array();
filter_array();
find_array();
any_array();

object_function();
