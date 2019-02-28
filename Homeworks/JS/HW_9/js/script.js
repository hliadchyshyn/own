function ageCalc(birth){
    let userAge = {};
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birth.getFullYear();
    if (birth.getMonth() - currentDate.getMonth() > 0 ){
        userAge.age = age;
    } else if(birth.getMonth() - currentDate.getMonth() < 0 ){
        userAge.age = age+1;
    } else{
        if (birth.getDate() - currentDate.getDate() >= 0){
            userAge.age = age+1;
        } else {
            userAge.age = age;
        }
    }
    userAge.zodiac = zodiac(birth.getDate(), birth.getMonth()+1);
    userAge.chinaZodiac = getChinaZodiac(birth.getFullYear());
    return userAge;
}
function zodiac(day, month){

    let zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
    let last_day =['', 20, 19, 20, 20, 21, 21, 22, 21, 23, 23, 22, 22, 22];
    return (day > last_day[month]) ? zodiac[month + 1] : zodiac[month];
}

function getChinaZodiac(year) {
  let animals = ["Monkey", "Cock", "Dog", "Boar", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"];
  return animals[year % animals.length];
}

let userBirth = new Date (prompt('Enter your Birth Date with mask dd.mm.yyyy', 'dd.mm.yyyy').split('.').reverse().join(','));
let res = ageCalc(userBirth);
alert(`Your age ${res.age}
Your zodiac sign is ${res.zodiac}
Your China zodiac is ${res.chinaZodiac}`);
