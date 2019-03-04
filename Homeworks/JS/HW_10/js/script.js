let capacity = [5, 5, 5];
let tasksEstimate = [10, 3, 1];
let deadline = new Date(2019, 02, 04);
//functions declarations
// main function
estimateWorkEnd = function (capacity, tasksEstimate, deadline) {
    // test input data

    //end of test input data

    let teamCapacity = Arrsum(capacity); //team capacity per working day
    let backlogEstimate = Arrsum(tasksEstimate);// sum of SP in backlog
    let currentDate = new Date();

    // let daysToDeadline = Math.ceil(Math.abs(deadline.getTime() - new Date().getTime()) / (1000 * 3600 * 24)); //count days till deadline
    // let diff = teamCapacity*daysToDeadline - backlogEstimate; // compare capacity and backlog

    let diff = countWorkHours(currentDate, deadline) * (teamCapacity / 8) - backlogEstimate;
    if (diff > 8 ) {// check what amount bigger and return Result in string
        return `Все задачи будут успешно выполнены за ${(diff/8).toFixed(0)} дней до наступления дедлайна!`;
    } else if (diff > 0 && diff < 8) {
        return `Все задачи будут успешно выполнены за ${(diff).toFixed(0)} часа(ов) до наступления дедлайна!`;
    } else if (diff === 0) {
        alert('Команда выполнит все задачи четенько в срок. Возрадуемся!');
    }else {
        return `Команде разработчиков придется потратить дополнительно ${(-1 * diff).toFixed(2)} часов после дедлайна, чтобы выполнить все задачи в беклоге`;
    }
};


//sum of every array value
Arrsum = function (arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    });
};
//check is weekend
isWeekEnd = function (date) {
    let dayOfWeek = date.getDay();
    return (dayOfWeek === 6 || dayOfWeek === 0);
};

//count workdays between current day and deadline
countWorkHours = function (firstDay, deadline) {
    let countHours = 0;
    if (firstDay.getHours() > 9) {
        countHours = firstDay.getHours() < 18 ? countHours + (18 - firstDay.getHours()+(firstDay.getMinutes()/60)) : 0;
        firstDay = new Date (firstDay.setDate(firstDay.getDate() + 1));
        firstDay = new Date(firstDay.setHours(0, 0, 0, 0));
    }
    for (firstDay; firstDay <= deadline; firstDay.setDate(firstDay.getDate() + 1)) {
        if (!isWeekEnd(firstDay)) {
            countHours += 8;
        }
    }
    return countHours;
};


console.log(estimateWorkEnd(capacity, tasksEstimate, deadline));