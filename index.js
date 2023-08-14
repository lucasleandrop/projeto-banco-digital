const App = require("./App");

App.createUser("lucas@hotmail.com", "Lucas Leandro");
App.createUser("luana@hotmail.com", "Luana De Oliveira");
App.createUser("pedro@hotmail.com", "Pedro Couto");

App.deposit("lucas@hotmail.com", 100);

App.transfer("lucas@hotmail.com", "luana@hotmail.com", 10);

App.changeLoanFee(30);
App.takeLoan("pedro@hotmail.com", 5000, 12);

console.log(App.findUser("lucas@hotmail.com"));
console.log(App.findUser("lucas@hotmail.com").account);

console.log(App.findUser("luana@hotmail.com"));
console.log(App.findUser("luana@hotmail.com").account);

console.log(App.findUser("pedro@hotmail.com"));
console.log(App.findUser("pedro@hotmail.com").account);
console.log(App.findUser("pedro@hotmail.com").account.loans[0].installments);
