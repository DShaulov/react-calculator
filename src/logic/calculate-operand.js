function calculateOperand(equation ,calculation ,operand) {
      if (operand === '.') {
        if (calculation.includes('.')){
            return calculation;
        }
      }
      if (equation[1] == null) {
        equation[0] = calculation.concat(operand);
        return equation[0];
      }
      else {
        equation[2] = calculation.concat(operand);
        return calculation[2];
      }
}

export default calculateOperand;