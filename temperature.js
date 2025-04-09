function convertTemperature() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;

  if (isNaN(temp)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  let result = temp;

  if (from === to) {
    // No conversion needed
  } else if (from === "celsius") {
    if (to === "fahrenheit") {
      result = temp * 9/5 + 32;
    } else if (to === "kelvin") {
      result = temp + 273.15;
    }
  } else if (from === "fahrenheit") {
    if (to === "celsius") {
      result = (temp - 32) * 5/9;
    } else if (to === "kelvin") {
      result = (temp - 32) * 5/9 + 273.15;
    }
  } else if (from === "kelvin") {
    if (to === "celsius") {
      result = temp - 273.15;
    } else if (to === "fahrenheit") {
      result = (temp - 273.15) * 9/5 + 32;
    }
  }

  document.getElementById("result").innerText =
    `${temp}° ${capitalize(from)} = ${result.toFixed(2)}° ${capitalize(to)}`;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
