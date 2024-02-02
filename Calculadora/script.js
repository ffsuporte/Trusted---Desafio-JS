function calculate(op) {
  document.getElementById("op").value = op.value;
  var num1 = parseFloat(document.getElementById("n1").value);
  var num2 = parseFloat(document.getElementById("n2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("não foram digitados os 2 números");
  } else {
    var res = document.getElementById("result");
    switch (op.value) {
      case "+":
        res.value = num1 + num2;
        break;
      case "-":
        res.value = num1 - num2;
        break;
      case "*":
        res.value = num1 * num2;
        break;
      case "/":
        res.value = num1 / num2;
        break;
    }
  }
}
