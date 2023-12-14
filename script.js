function calculateSquareRoot() {
  var inputNumber = document.getElementById("squareroot").value;

  var squareRoot = Math.sqrt(inputNumber);

  document.getElementById("output").innerText = squareRoot;
}
