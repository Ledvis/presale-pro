function convertStringToNumber(string) {
  const number = string.match(/\d/g).join('');
  return number;
}

const Cap = {
  MIN_VALUE: 0,
  MAX_VALUE: 5000000,
};

export default function init() {
  const usdValue = convertStringToNumber(document.querySelector('.calc__caption--usd').textContent.trim());
  const progressBar = document.querySelector('.calc__bar-inner');
  const coefficient = `${((usdValue / Cap.MAX_VALUE) * 100).toFixed(2)}%`;
  progressBar.style.width = coefficient;
}
