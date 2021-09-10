function calculateOperand(equation ,calculation ,operand) {
      if (operand === '.') {
        if (calculation.includes('.')){
            return calculation;
        }
      }
      if (operand === '%' ){
        if (calculation.includes('%')) {
          return calculation;
        }
        if (calculation === '0') {
          return calculation;
        }
      }
      if (equation[1] == null) {
        equation[0] = calculation.concat(operand);
        return equation[0];
      }
      // case where its the first digit of the second number
      if (equation[0] != null && equation[1] != null && equation[2] == null) {
        equation[2] = operand;
        return operand;
      } 
      // case where the second number already exists
      else {
        equation[2] = equation[2].concat(operand);
        return equation[2];
      }
}

export default calculateOperand;