function appendValue(val) {
  document.getElementById('display').value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Xatolik";
  }
}
