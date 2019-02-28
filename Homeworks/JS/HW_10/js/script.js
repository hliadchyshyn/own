let capacity = [5,5,5];
let tasksEstimate = [6,6,6];
let deadline = new Date(2019,02, 01);
//functions declarations
// main function
function estimateWorkEnd(capacity, tasksEstimate,deadline) {
    // test input data

    //end of test input data

    let teamCapacity = Arrsum(capacity); //team capacity per working day
    let backlogEstimate = Arrsum(tasksEstimate);// sum of SP in backlog
    let daysToDeadline = Math.ceil(Math.abs(deadline.getTime() - new Date().getTime()) / (1000 * 3600 * 24)); //count days till deadline
    let diff = teamCapacity*daysToDeadline - backlogEstimate; // compare capacity and backlog
    if (diff > 0){// check what amount bigger and return Result in string
        return `Все задачи будут успешно выполнены за ${(diff/teamCapacity).toFixed(0)} дней до наступления дедлайна!`;
    }else {
        return `Команде разработчиков придется потратить дополнительно ${-1*diff} часов после дедлайна, чтобы выполнить все задачи в беклоге`;
    }
}


//sum of every array value
function Arrsum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(estimateWorkEnd(capacity, tasksEstimate, deadline));
















