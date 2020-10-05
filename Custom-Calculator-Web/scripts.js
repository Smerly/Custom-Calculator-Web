const dpiInput = document.querySelector("#dpi-input");
const inchesInput = document.querySelector("#inches-input");
const pixelsInput = document.querySelector("#pixels-input");
const displayInches = document.querySelector("#display-inches");
const displayPixels = document.querySelector("#display-pixels");

dpiInput.addEventListener("input", inchesToPixels, pixelsToInches);

inchesInput.addEventListener("input", inchesToPixels);
pixelsInput.addEventListener("input", pixelsToInches);

function inchesToPixels(e) {
  const inchesValue = parseFloat(inchesInput.value);
  const dpiValue = parseFloat(dpiInput.value);

  const pixelResult = inchesValue * dpiValue;
  displayPixels.innerHTML = pixelResult.toFixed(2);
}

function pixelsToInches(e) {
  const pixelsValue = parseFloat(pixelsInput.value);
  const dpiValue = parseFloat(dpiInput.value);

  const inchesResult = pixelsValue / dpiValue;
  displayInches.innerHTML = inchesResult.toFixed(2);
}

pixelsToInches(e);
inchesToPixels(e);
