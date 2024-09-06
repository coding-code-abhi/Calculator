function appendToResult(value) {
    document.getElementById('result').value += value;
  }
function clearResult(){
    document.getElementById('result').value = '';
}
function backspace() {
    let currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
  }

  function calculateResult() {
    let currentResult = document.getElementById('result').value;
    try {
      document.getElementById('result').value = eval(currentResult);
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }