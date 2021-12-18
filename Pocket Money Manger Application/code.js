var x = promptNum("How much money do you have?");
var pocketMoney = x;
setNumber("wallet", pocketMoney);
var savingsTarget = promptNum("How much money you want to save this month?");
function myFunction() {
  if (pocketMoney < savingsTarget) {
    setProperty("screen1", "background-color", "#e85b0e");
  }
}
onEvent("charity", "click", function( ) {
  pocketMoney = pocketMoney - 20;
  setNumber("wallet", pocketMoney);
  myFunction();
});
onEvent("stationary", "click", function( ) {
  pocketMoney = pocketMoney - 50;
  setNumber("wallet", pocketMoney);
  myFunction();
});
onEvent("food", "click", function( ) {
  pocketMoney = pocketMoney - 80;
  setNumber("wallet", pocketMoney);
  myFunction();
});
onEvent("recharge", "click", function( ) {
  pocketMoney = pocketMoney - 100;
  setNumber("wallet", pocketMoney);
  myFunction();
});
onEvent("rent", "click", function( ) {
  pocketMoney = pocketMoney - 50;
  setNumber("wallet", pocketMoney);
  myFunction();
});
onEvent("new", "click", function( ) {
  x = promptNum("How much more money do you want to add ?");
  pocketMoney = pocketMoney + x;
  setNumber("wallet", pocketMoney);
  setProperty("screen1", "background-color", "rgb(239, 231, 231)");
  savingsTarget = promptNum("How much money you want to save this month?");
});
