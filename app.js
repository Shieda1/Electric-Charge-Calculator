// https://calculator.swiftutors.com/electric-charge-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const electricChargeRadio = document.getElementById('electricChargeRadio');
const currentRadio = document.getElementById('currentRadio');
const timePeriodRadio = document.getElementById('timePeriodRadio');

let electricCharge;
let current = v1;
let timePeriod = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

electricChargeRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Current (amps)';
  variable2.textContent = '(t) Time Period (sec)';
  current = v1;
  timePeriod = v2;
  result.textContent = '';
});

currentRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Electric Charge (coulombs)';
  variable2.textContent = '(t) Time Period (sec)';
  electricCharge = v1;
  timePeriod = v2;
  result.textContent = '';
});

timePeriodRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Electric Charge (coulombs)';
  variable2.textContent = '(I) Current (amps)';
  electricCharge = v1;
  current = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(electricChargeRadio.checked)
    result.textContent = `Electric Charge = ${computeElectricCharge().toFixed(2)} coulombs`;

  else if(currentRadio.checked)
    result.textContent = `Current = ${computeCurrent().toFixed(2)} amps`;

  else if(timePeriodRadio.checked)
    result.textContent = `Time Period = ${computeTimePeriod().toFixed(2)} sec`;
})

// calculation

function computeElectricCharge() {
  return Number(current.value) * Number(timePeriod.value);
}

function computeCurrent() {
  return Number(electricCharge.value) / Number(timePeriod.value);
}

function computeTimePeriod() {
  return Number(electricCharge.value) / Number(current.value);
}