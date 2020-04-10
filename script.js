

let money = +prompt("Какой Ваш бюджет на месяц?", ""),
    time = prompt("Введите Дату в формате YYYY-MM-DD", "");


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if (typeof (a) === "string" && (typeof (a) != null && (typeof (b)) != null)
        && a != "" && b != "" && a.length < 50) {
        console.log("Work");
        appData.expenses[a] = b;
    }

    appData.moneyPerday = appData.budget / 30;

    alert("Бюджет на день: " + appData.moneyPerday);

    if (appData.moneyPerday < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerday > 2000) {
        console.log("Большой уровень достатка");
    } else {
        console.log("Ошибка")
    }
}


/*let i = 0;
while (i<1){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ( typeof (a) === "string" && typeof (a) != null && typeof (b) != null
       && a != "" && b != "" && a.length < 40){
        console.log("Just Work");
        appData.expenses[a] = b;
    } else {
        console.log("Do Not Work");
        i--;
    }
    i++;
}*/

/*let i = 0;
 do {
     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
         b = prompt("Во сколько обойдется?", "");

     if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null
         && a != "" && b != "" && a.length < 40) {
         console.log("Just Work");
         appData.expenses[a] = b;
     } else {
         console.log("Do Not Work");
         i--;
     }
     i++;
 }
 while (i<3);*/

appData.moneyPerday = appData.budget / 30;
