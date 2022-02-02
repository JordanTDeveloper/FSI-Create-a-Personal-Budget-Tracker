
let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for(let i=0; i<weeklyExpenseQuestions.length;i++){
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    let numberAnswer=parseFloat(stringAnswer)
    weeklyExpenses=weeklyExpenses + numberAnswer;
}
for(let i=0; i<monthlyExpenseQuestions.length;i++){
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i])
    let numberAnswer=parseFloat(stringAnswer)
    monthlyExpenses=monthlyExpenses + numberAnswer;
}
for(let i=0; i<annualExpenseQuestions.length;i++){
    let stringAnswer = window.prompt(annualExpenseQuestions[i])
    let numberAnswer=parseFloat(stringAnswer)
    annualExpenseQuestions=monthlyExpenses + numberAnswer;
}


/* Bonus Question */
// for(let i=annualExpenseQuestions.length; i>0;i--){
//     let stringAnswer = window.prompt(annualExpenseQuestions[i-1])
//     let numberAnswer=parseFloat(stringAnswer)
//     annualExpenses=monthlyExpenses + numberAnswer;
// }




