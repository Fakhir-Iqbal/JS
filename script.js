// immediately Invoked Function Expression (<Function Here>)()
(function VariablesInJs() {
  // VAR
  console.log(x); //output will be undefine (Cuz Of Function Scope)

  var x = 1;
  var x = 9; //redeclare
  x = 10; //reassignable
  console.log(x); //10

  // LET
  // console.log(y); //error (Cuz Of Blocked Scope)

  let y = 1;
  // let y = 9;  // can't redeclare cuz of Blocked Scope
  y = 10; //reassignable
  console.log(y); //10

  // CONST
  // console.log(z); //error (Cuz Of Blocked Scope)

  const z = 11;
  // const z = 9;  // can't redeclare cuz of Blocked Scope
  // z = 9;  // can't reassisn cuz of Blocked Scope
  console.log(z); //10
})();

// anonymous arrow function
const a = () => {
  console.log("anonymoun0s function");
};

a();
 