/**
 * Calculates output when an operand is pressed on the calculator
 * @param {array with 2 operands and an operator} equation 
 * @param {current operand} calculation 
 * @param {*} operator 
 */
function calculateOperator(equation, calculation, operator) {
    // case 'AC' is pressed
    if (operator === 'AC') {
        equation[0] = '0';
        equation[1] = null;
        equation[2] = null;
        return equation[0];
    }
    // case if pressing 2 operands in a row
    if (equation[1] != null && equation[2] == null) {
        return equation[1];
    }
    // case if the operand is +/-
    if (operator === '+/-'){
        if (calculation.includes('-')){
            return calculation.replace('-', '');
        }
        else {
            return '-' + calculation;
        }
    }
    // case where there is only one operand and its the first operator pressed
    if (equation[1] == null) {
        equation[1] = '+'
        return equation[0];
    }
    switch (operator) {
        case '+':
            break;
        case '-':
            break;
        case 'x':
            break;
        case '/':
            break;
        case '%':
            break;
        case '+/-':
            break;    
        default:
            return;
    }
    
}

export default calculateOperator;