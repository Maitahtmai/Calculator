/* Values to be reassigned */
let opp_1_val = '';
let opp_2_val = '';
let arithmetic_opp = '';
let expression_results = 0;
let enter_val_display_refresh = false;
let expression_val_display_refresh = false;
let expression_exec_refresh = false;

$(document).ready(function() {
  $('#clear').on('click', () => {
    opp_1_val = '';
    arithmetic_opp ='';
    opp_2_val = '';
    expression_results = 0;
    expression_exec_refresh =false;

    $('#expre_val_display').html('0');
    $('#display').html('0');

    enter_val_display_refresh = false;
    expression_exec_refresh = false;
  });
  
  $('#back').on('click', () => {
    if(expression_exec_refresh){
      opp_1_val = '';
      arithmetic_opp ='';
      opp_2_val = '';
      expression_results = 0;
      expression_exec_refresh = false;

      $('#expre_val_display').html('');
      $('#display').html('');

      enter_val_display_refresh = false;
      expression_exec_refresh = false;
    } else {
      opp_2_val = opp_2_val.slice(0, -1);
      $('#display').html(opp_2_val);
    }
  });
  
  $('#equals').on('click', () =>{
    if(opp_2_val == '')
      return false;

    let result = exec_operation(arithmetic_opp);

    $('#expre_val_display').html(opp_1_val+arithmetic_opp+'=');
    $('#display').html(result);

    expression_results = result;
    opp_1_val = expression_results;
    expression_exec_refresh = true;

    enter_val_display_refresh = true;
    expression_val_display_refresh = true;
  })
});

const enter_val = (val) => {
  if(expression_val_display_refresh && enter_val_display_refresh) {
    expression_results = 0;
    expression_exec_refresh = false;
  }

  if(expression_val_display_refresh) {
    opp_1_val = '';
    $('#expre_val_display').html('');
    expression_val_display_refresh = false;
  }

  if(!enter_val_display_refresh) {
    $('#display').append(val);
    opp_2_val += val;
  } else {
    $('#display').html(val);
    opp_2_val = val;
    enter_val_display_refresh = false;
  }
};

const run_opp = (operator) => {
  if(expression_exec_refresh == true) {
    opp_1_val = '';
    arithmetic_opp = '';
    opp_2_val = expression_results;
    expression_val_display_refresh = false;
    expression_results = 0;
    expression_exec_refresh = false;
  }

  if(opp_2_val == '') {
    arithmetic_opp = operator;
    $('#expre_val_display').html(opp_1_val+arithmetic_opp);
    return false;
  }

  if(opp_1_val == '') {
    opp_1_val = Number(opp_2_val);
  } else {
    opp_1_val = exec_operation(arithmetic_opp);
  }
  
  arithmetic_opp = operator;

  enter_val_display_refresh = true;
  opp_2_val = '';

  $('#expre_val_display').html(opp_1_val+arithmetic_opp);
};

const exec_operation = (operator) => {
  let result = 0;

  switch(operator) {
    case '+':
      result = Number(opp_1_val) + Number(opp_2_val);
      break;
    case '-':
      result = Number(opp_1_val) - Number(opp_2_val);
      break;
    case '*':
      result = Number(opp_1_val) * Number(opp_2_val);
      break;
    case '/':
      result = Number(opp_1_val) / Number(opp_2_val);
      break;
    case '%':
      result = Number(opp_1_val) % Number(opp_2_val);
      break;
    default:
      result = 0;
  }
  return result;
}