let trailingResult = "";
      let oppOpt = ["+", "-", "/", "x"];
      let workingOpp = "";

      const updateDis = (input) => {
        let display = document.getElementById("display");
        let secDis = document.getElementById("expre_val_display");

        if (display.innerHTML === "0" && oppOpt.indexOf(input) === -1) {
          if (input === "decimal") {
            display.innerHTML = "0.";
          } else if (input === "negative") {
              if (display.innerHTML.indexOf("-1") === -1) {
              display.innerHTML = "-" + display.innerHTML;
            } else if (display.innerHTML.indexOf("-1" > -1)) {
              display.innerHTML = display.innerHTML.slice(1, display.innerHTML);
            }
          } else {
            display.innerHTML = input;
          }
        } else if (oppOpt.indexOf(input) >= 0) {
          // console.log("Dealing with a oppOpt");
          if (trailingResult === display.innerHTML) {
            // oppOppt button exception
            workingOpp = input;
          } else if (workingOpp === "") {
            //Dealing without an init Opp
            workingOpp = input;
            trailingResult = display.innerHTML;
            secDis.innerHTML = trailingResult + workingOpp;
            display.innerHTML = 0;
          } else {
            //Dealing with a set opp
            trailingResult = calc(trailingResult, display.innerHTML, workingOpp);
            secDis.innerHTML = trailingResult + workingOpp;
            display.innerHTML = 0;
            workingOpp = input;
          }
        } else if (input === "equals") {
          display.innerHTML = calc(trailingResult, display.innerHTML, workingOpp);
          trailingResult = 0;
          secDis.innerHTML = display.innerHTML;
          workingOpp = "";
        } else if (input === "decimal") {
          // console.log("Decimal clicked")
          if (display.innerHTML.indexOf(".") === -1) {
            display.innerHTML += ".";
          }
          // console.log("Decimal skipped");
        } else if (input === "negative") {
          console.log("Negative selected");
          if (display.innerHTML.indexOf("-1") === -1) {
            display.innerHTML = "-" + display.innerHTML;
          } else if (display.innerHTML.indexOf("-1" > -1)) {
            display.innerHTML = display.innerHTML.slice(1, display.innerHTML);
          }
        } else {
          display.innerHTML += input;
        }

        console.log(trailingResult, "<= trailingResult", display.innerHTML, "<= display.innerHTML", workingOpp, "<= working");
      };

      const clrDisplay = () => {
        let display = document.getElementById("display");
        let secDis = document.getElementById("expre_val_display");
        display.innerHTML = 0;
        secDis.innerHTML = "";
        trailingResult = 0; /* Reset trailingResult */
        workingOpp = ""; /* Reset workingOpp */
        newOpp = true; /* Set newOpp flag */
      };

      const calc = (firstNum, secNum, oppOpt) => {
        let result;
        firstNum = parseFloat(firstNum);
        secNum = parseFloat(secNum);
        switch(oppOpt) {
          case "+":
            // console.log("add calc")
            result = firstNum + secNum;
            break;
          case "-":
            // console.log("subtract calc")
            result = firstNum - secNum;
            break;
          case "x":
            // console.log("multiply calc")
            result = firstNum * secNum;
            break;
          case "/":
            // console.log("divide calc")
            result = firstNum / secNum;
            break;
          default:
            console.log("Calc opp missed something")
        }
        return result.toString();
      };

// let trailingResult = "";
// let oppOpt = ["+", "-", "/", "x"];
// let workingOpp = "";

// const updateDis = (input) => {
//   let display = document.getElementById("display");
//   let secDis = document.getElementById("expre_val_display");

//   if (display.innerHTML === "0" && oppOpt.indexOf(input) === -1) {
//     if (input === "decimal") {
//       display.innerHTML = "0.";
//     } else {
//       display.innerHTML = input;
//     }
//   } else if (oppOpt.indexOf(input) >= 0) {
//     console.log("Dealing with a oppOpt");
//     if (workingOpp === "") {
//       //Dealing without an init Opp
//       workingOpp = input;
//       secDis.innerHTML = trailingResult + display.innerHTML + workingOpp;
//       trailingResult = display.innerHTML;
//       display.innerHTML = 0;
//     } else {
//       //Dealing with a set opp
//       trailingResult = calc(trailingResult, display.innerHTML, workingOpp);
//       secDis.innerHTML = trailingResult + display.innerHTML + workingOpp;
//       display.innerHTML = 0;
//       workingOpp = input;
//     }
//   } else if (input === "equals") {
//     display.innerHTML = calc(trailingResult, display.innerHTML, workingOpp);
//     trailingResult = display.innerHTML;
//     secDis.innerHTML = trailingResult;
//     // workingOpp = "";
//     clrDisplay();
//   } else if (input === "decimal") {
//     console.log("Decimal clicked")
//     if (display.innerHTML.indexOf(".") === 1) {
//       display.innerHTML += ".";
//     }
//     console.log("Decimal skipped");
//   } else {
//     display.innerHTML += input;
//   }

//   console.log(trailingResult, "<= trailingResult", display.innerHTML, "<= display.innerHTML", workingOpp, "<= working");
// };

// const clrDisplay = () => {
//   let display = document.getElementById("display");
//   display.innerHTML = 0;
// };

// const calc = (firstNum, secNum, oppOpt) => {
//   let result;
//   firstNum = parseFloat(firstNum);
//   secNum = parseFloat(secNum);
//   switch(oppOpt) {
//     case "+":
//       console.log("add calc")
//       result = firstNum + secNum;
//       break;
//     case "-":
//       console.log("subtract calc")
//       result = firstNum - secNum;
//       break;
//     case "x":
//       console.log("multiply calc")
//       result = firstNum * secNum;
//       break;
//     case "/":
//       console.log("divide calc")
//       result = firstNum / secNum;
//       break;
//     default:
//       console.log("Calc opp missed something")
//   }
//   return result.toString();
// };

// const run_opp = () => document.getElementById("display").innerHTML = 0;
// const clrDisplay = () => document.getElementById("display").innerHTML = 0;


/* Alternative 2*/
// let trailingResult = 0;
//       let oppOpt = ["add", "subtract", "divide", "multiply"];
//       let workingOpp = "";
//       let newOpp = true; /* Flag to handle new opp after "equals" */
      
//       const updateDis = (input) => {
//         let display = document.getElementById("display");
//         let secDis = document.getElementById("expre_val_display");

//         if (display.innerHTML === "0" && oppOpt.indexOf(input) === -1) {
//           if (input === "decimal") {
//             display.innerHTML = "0.";
//           } else {
//             display.innerHTML = input;
//           }
//           newOpp = false; /* Reset newOpp flag */
//         } else if (oppOpt.indexOf(input) >= 0) {
//           console.log("Dealing with a oppOpt");
//           if (workingOpp === "") {
//             //Dealing without an init Opp
//             workingOpp = input;
//             trailingResult = display.innerHTML;
//             display.innerHTML = 0;
//           } else {
//             //Dealing with a set opp
//             trailingResult = calc(trailingResult, display.innerHTML, workingOpp);
//             // secDis.innerHTML = trailingResult + "" + input; /* Update secDis to show current exporession */
//             secDis.innerHTML = trailingResult;
//             display.innerHTML = 0;
//             workingOpp = input;
//           }
//           newOpp = false; /* Reset newOpp flag */
//         } else if (input === "equals") {
//           if (workingOpp !== "") {
//             display.innerHTML = calc(trailingResult, display.innerHTML, workingOpp);
//             trailingResult = display.innerHTML; /* Updating trailingResults with new result */
//             workingOpp = ""; /* Reset working operator */
//             newOpp = true; /* Set newOpp flag */
//           }
//           return clrDisplay();
//         } else if (input === "decimal") {
//           console.log("Decimal clicked")
//           if (display.innerHTML.indexOf(".") === -1) {
//             display.innerHTML += ".";
//           }
//           console.log("Decimal skipped");
//         } else {
//           if (newOpp) {
//             /* Start a newOpp after "equals" */
//             display.innerHTML += input;
//             newOpp = false; /* Reset newOpp flag */
//           } else {
//             display.innerHTML += input;
//           }
//         }

//         console.log(trailingResult, "<= trailingResult", display.innerHTML, "<= display.innerHTML", workingOpp, "<= working");
//       };
  
//       const clrDisplay = () => {
//         let display = document.getElementById("display");
//         display.innerHTML = 0;
//         trailingResult = 0; /* Reset trailingResult */
//         workingOpp = ""; /* Reset workingOpp */
//         newOpp = true; /* Set newOpp flag */
//       };

//       const calc = (firstNum, secNum, oppOpt) => {
//         let result;
//         firstNum = parseFloat(firstNum);
//         secNum = parseFloat(secNum);
//         switch(oppOpt) {
//           case "add":
//             console.log("add calc")
//             result = firstNum + secNum;
//             break;
//           case "subtract":
//           console.log("subtract calc")
//             result = firstNum - secNum;
//             break;
//           case "multiply":
//           console.log("multiply calc")
//             result = firstNum * secNum;
//             break;
//           case "divide":
//           console.log("divide calc")
//             result = firstNum / secNum;
//             break;
//           default:
//             console.log("Calc opp missed something")
//             result = 0;
//         }
//         return result.toString();
//       };