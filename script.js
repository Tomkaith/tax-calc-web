function switchTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.style.display = "none");
  document.getElementById(tabId).style.display = "block";
}

// คำนวณภาษีอย่างง่าย
function calculateTax() {
  const income = parseFloat(document.getElementById("income").value);
  let tax = 0;

  if (income <= 150000) tax = 0;
  else if (income <= 300000) tax = (income - 150000) * 0.05;
  else if (income <= 500000) tax = 150000 * 0.05 + (income - 300000) * 0.1;
  else tax = 150000 * 0.05 + 200000 * 0.1 + (income - 500000) * 0.15;

  document.getElementById("taxResult").innerText = `คุณต้องจ่ายภาษี: ${tax.toFixed(2)} บาท`;
}

// คำนวณดอกเบี้ย
function calculateInterest() {
  const p = parseFloat(document.getElementById("principal").value);
  const r = parseFloat(document.getElementById("rate").value);
  const t = parseFloat(document.getElementById("time").value);

  if (isNaN(p) || isNaN(r) || isNaN(t)) {
    document.getElementById("interestResult").innerText = "กรุณากรอกข้อมูลให้ครบถ้วน";
    return;
  }

  const interest = (p * r * t) / 100;
  const total = p + interest;

  document.getElementById("interestResult").innerText = 
    `ดอกเบี้ย: ${interest.toFixed(2)} บาท\nรวมเป็นเงิน: ${total.toFixed(2)} บาท`;
}

// แปลงหน่วย
function convertUnit() {
  const value = parseFloat(document.getElementById("valueToConvert").value);
  const unit = document.getElementById("unit").value;
  let result = 0;

  if (unit === "cm-to-inch") result = value / 2.54;
  else result = value * 2.54;

  document.getElementById("convertResult").innerText = `ผลลัพธ์: ${result.toFixed(2)}`;
}
// สลับธีม Dark Mode
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // เปลี่ยนไอคอนปุ่ม
  this.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});