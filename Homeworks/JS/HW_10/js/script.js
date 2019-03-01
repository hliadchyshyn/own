let capacity = [5,5,5];
let tasksEstimate = [6,6,6];
let deadline = new Date(2019,02, 04);
//functions declarations
// main function
estimateWorkEnd = function (capacity, tasksEstimate,deadline) {
    // test input data

    //end of test input data

    let teamCapacity = Arrsum(capacity); //team capacity per working day
    let backlogEstimate = Arrsum(tasksEstimate);// sum of SP in backlog
    let currentDate = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate());

    // let daysToDeadline = Math.ceil(Math.abs(deadline.getTime() - new Date().getTime()) / (1000 * 3600 * 24)); //count days till deadline
    // let diff = teamCapacity*daysToDeadline - backlogEstimate; // compare capacity and backlog

    let diff = countWorkdays(currentDate,deadline)*teamCapacity - backlogEstimate;
    if (diff > 0){// check what amount bigger and return Result in string
        return `Все задачи будут успешно выполнены за ${(diff/teamCapacity).toFixed(0)} дней до наступления дедлайна!`;
    }else {
        return `Команде разработчиков придется потратить дополнительно ${-1*diff} часов после дедлайна, чтобы выполнить все задачи в беклоге`;
    }
};


//sum of every array value
Arrsum = function(arr){
    return arr.reduce(function(a, b) {
        return a + b;
    });
};
//check is weekend
isWeekEnd = function(date){
    let dayOfWeek = date.getDay();
    return (dayOfWeek === 6 || dayOfWeek === 0);
};

//count workdays between current day and deadline
countWorkdays = function (firstDay, deadline){
    let countDay = 0;
    for (firstDay; firstDay<=deadline; firstDay.setDate(firstDay.getDate() + 1)){
        if (!isWeekEnd(firstDay)){
            countDay++
        }
    }
    return countDay;
};


console.log(estimateWorkEnd(capacity, tasksEstimate, deadline));