function calculateProfit(){

  const selling =
  Number(document.getElementById("sellingPrice").value);

  const product =
  Number(document.getElementById("productCost").value);

  const shipping =
  Number(document.getElementById("shippingCost").value);

  const fee =
  Number(document.getElementById("marketplaceFee").value);

  const ads =
  Number(document.getElementById("adCost").value);

  if(
    selling <= 0 ||
    product < 0 ||
    shipping < 0 ||
    fee < 0 ||
    ads < 0
  ){
    alert("Please enter valid values.");
    return;
  }

  const expenses =
  product + shipping + fee + ads;

  const profit =
  selling - expenses;

  const margin =
  ((profit / selling) * 100).toFixed(2);

  const recommended =
  expenses / 0.7;

  document.getElementById("revenue").textContent =
  selling.toFixed(2);

  document.getElementById("expenses").textContent =
  expenses.toFixed(2);

  document.getElementById("profit").textContent =
  profit.toFixed(2);

  document.getElementById("margin").textContent =
  margin;

  document.getElementById("breakeven").textContent =
  expenses.toFixed(2);

  document.getElementById("recommendedPrice").textContent =
  recommended.toFixed(2);

  const badge =
  document.getElementById("statusBadge");

  if(profit > 0){
    badge.textContent = "🟢 Profitable";
    badge.className = "status profit";
  }
  else if(profit < 0){
    badge.textContent = "🔴 Loss";
    badge.className = "status loss";
  }
  else{
    badge.textContent = "🟡 Break-even";
    badge.className = "status neutral";
  }

  const progress =
  document.getElementById("progressFill");

  const marginText =
  document.getElementById("marginText");

  let displayMargin =
  Math.max(0, Math.min(100, parseFloat(margin)));

  progress.style.width =
  displayMargin + "%";

  marginText.textContent =
  margin + "% Margin";
}

function resetCalculator(){

  document.getElementById("sellingPrice").value = "";
  document.getElementById("productCost").value = "";
  document.getElementById("shippingCost").value = "";
  document.getElementById("marketplaceFee").value = "";
  document.getElementById("adCost").value = "";

  document.getElementById("revenue").textContent = "0";
  document.getElementById("expenses").textContent = "0";
  document.getElementById("profit").textContent = "0";
  document.getElementById("margin").textContent = "0";
  document.getElementById("breakeven").textContent = "0";
  document.getElementById("recommendedPrice").textContent = "0";

  document.getElementById("progressFill").style.width = "0%";

  document.getElementById("marginText").textContent =
  "0% Margin";

  const badge =
  document.getElementById("statusBadge");

  badge.textContent =
  "Waiting for Calculation";

  badge.className =
  "status";
}

function downloadReport(){

  const report = `
E-COMMERCE PROFIT REPORT

Revenue: ₹${document.getElementById("revenue").textContent}

Expenses: ₹${document.getElementById("expenses").textContent}

Profit: ₹${document.getElementById("profit").textContent}

Margin: ${document.getElementById("margin").textContent}%

Break-even Price:
₹${document.getElementById("breakeven").textContent}
`;

  const blob =
  new Blob([report], {type:"text/plain"});

  const link =
  document.createElement("a");

  link.href =
  URL.createObjectURL(blob);

  link.download =
  "profit-report.txt";

  link.click();
}

document
.getElementById("themeToggle")
.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});