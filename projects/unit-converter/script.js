const inputValue = document.getElementById('inputValue');
const unitCategory = document.getElementById('unitCategory');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const resultDisplay = document.getElementById('resultDisplay');
const resetButton = document.getElementById('resetButton');
const conversionNote = document.getElementById('conversionNote');

const units = {
  temperature: {
    celsius: { name: 'Celsius (°C)', toBase: (c) => c, fromBase: (c) => c },
    fahrenheit: { name: 'Fahrenheit (°F)', toBase: (f) => (f - 32) * 5/9, fromBase: (c) => (c * 9/5) + 32 }
  },
  length: {
    meters: { name: 'Meters (m)', toBase: (m) => m, fromBase: (m) => m },
    feet: { name: 'Feet (ft)', toBase: (ft) => ft * 0.3048, fromBase: (m) => m / 0.3048 }
  },
  mass: {
    kilograms: { name: 'Kilograms (kg)', toBase: (kg) => kg, fromBase: (kg) => kg },
    pounds: { name: 'Pounds (lb)', toBase: (lb) => lb * 0.453592, fromBase: (kg) => kg / 0.453592 }
  }
};

function populateUnits() {
  const categoryUnits = units[unitCategory.value];
  fromUnitSelect.innerHTML = '';
  toUnitSelect.innerHTML = '';

  for (const key in categoryUnits) {
    const optionFrom = document.createElement('option');
    optionFrom.value = key;
    optionFrom.textContent = categoryUnits[key].name;
    fromUnitSelect.appendChild(optionFrom);

    const optionTo = optionFrom.cloneNode(true);
    toUnitSelect.appendChild(optionTo);
  }

  fromUnitSelect.value = Object.keys(categoryUnits)[0];
  toUnitSelect.value = Object.keys(categoryUnits)[1] || Object.keys(categoryUnits)[0];

  convertUnits();
}

function convertUnits() {
  const value = parseFloat(inputValue.value);
  const category = unitCategory.value;
  const fromKey = fromUnitSelect.value;
  const toKey = toUnitSelect.value;

  if (isNaN(value)) {
    resultDisplay.textContent = 'Invalid Input';
    conversionNote.textContent = '';
    return;
  }

  if (fromKey === toKey) {
    resultDisplay.textContent = value.toFixed(4);
    conversionNote.textContent = '';
    return;
  }

  const fromUnit = units[category][fromKey];
  const toUnit = units[category][toKey];

  try {
    const baseValue = fromUnit.toBase(value);
    const convertedValue = toUnit.fromBase(baseValue);
    resultDisplay.textContent = convertedValue.toFixed(4);
    conversionNote.textContent = `Converted from ${fromUnit.name} to ${toUnit.name}`;
  } catch {
    resultDisplay.textContent = 'Conversion Error';
    conversionNote.textContent = '';
  }
}

function resetConverter() {
  inputValue.value = '0';
  unitCategory.value = 'temperature';
  populateUnits();
  resultDisplay.textContent = '0';
  conversionNote.textContent = '';
}

unitCategory.addEventListener('change', populateUnits);
inputValue.addEventListener('input', convertUnits);
fromUnitSelect.addEventListener('change', convertUnits);
toUnitSelect.addEventListener('change', convertUnits);
resetButton.addEventListener('click', resetConverter);

document.addEventListener('DOMContentLoaded', populateUnits);
