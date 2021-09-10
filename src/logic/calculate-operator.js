/**
 * Calculates output when an operand is pressed on the calculator
 * @param {array with 2 operands and an operator} equation 
 * @param {current operand} calculation 
 * @param {*} operator 
 */
function calculateOperator(equation, calculation, operator) {
    var math_operators = {
        '+': function (x, y) {return x + y},
        '-': function (x, y) {return x - y},
        '/': function (x, y) {return x / y},
        'x': function (x, y) {return x * y}
    }
    // case 'AC' is pressed
    if (operator === 'AC') {
        equation[0] = '0';
        equation[1] = null;
        equation[2] = null;
        return equation[0];
    }
    // case if pressing 2 operands in a row
    if (equation[1] != null && equation[2] == null) {
        equation[1] = operator;
        return equation[0];
    }
    // case if the operator is %
    if (operator === '%') {
        if (calculation === '0') {
            return '0';
        }
        if (calculation.includes('%')){
            return calculation;
        }
        else {
            return calculation + '%';
        }
    }
    // case if the operator is +/-
    if (operator === '+/-'){
        if (calculation === '0') {
            return '0';
        }
        if (calculation.includes('-')){
            return calculation.replace('-', '');
        }
        else {
            return '-' + calculation;
        }
    }
    // case where there is only one operand and its the first operator pressed
    if (equation[1] == null) {
        if (operator === '=') {
            return equation[0];
        }
        equation[0] = calculation;
        equation[1] = operator;
        return calculation;
    }
    // convert operands to numbers
    let x;
    let y;
    if (equation[0].includes('%')) {
        let stripped_num = equation[0].replace('%','');
        x = Number(stripped_num) / 100
    } else {
        x = Number(equation[0]);
    }
    if (equation[2].includes('%')) {
        let stripped_num = equation[2].replace('%','');
        y = Number(stripped_num) / 100
    } else {
        y = Number(equation[2]);
    } 
    // case where the operator is =
    if (operator === '=') {
        let first_operator = equation[1];
        equation[0] = String(math_operators[first_operator](x, y));
        equation[1] = null;
        equation[2] = null;
        return equation[0];
    }  
    equation[0] = String(math_operators[equation[1]](x, y));
    equation[1] = operator;
    equation[2] = null;
    return equation[0];
    
}

export default calculateOperator;