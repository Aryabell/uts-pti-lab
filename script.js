// Function to display username in navbar
// function displayUsername() {
//   document.getElementById("username").innerText = username;
// }

// Function to display balance and transactions
function displayMainPage() {
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  let balance = parseInt(localStorage.getItem("balance") || 0)
    
  let balanceElement = document.getElementById("balance");
  balanceElement.innerHTML = "<h3>Saldo sekarang: " + balance + "</h3>";

  let transactionsElement = document.getElementById("transactions");
  transactionsElement.innerHTML = "<h4>Daftar Transaksi:</h4>";
  transactions.forEach(transaction => {
    let transactionItem = document.createElement("div");
    if (transaction.incomeType === "INCOME") {
    transactionItem.innerHTML = "<p>Nama Transaksi: " + transaction.incomeName + ", Nominal: " + transaction.incomeAmount + ", Kategori: " + transaction.incomeCategory + "</p>";
      transactionItem.style.color = "green"; // Pemasukkan ditandai dengan warna hijau
    } else if (transaction.outcomeType === "OUTCOME") {
      transactionItem.innerHTML = "<p>Nama Transaksi: " + transaction.outcomeName + ", Nominal: " + transaction.outcomeAmount + ", Kategori: " + transaction.outcomeCategory + "</p>";
      transactionItem.style.color = "red"; // Pengeluaran ditandai dengan warna merah
    }
    transactionsElement.appendChild(transactionItem);
  });
}


// Event listener for Main Page link
document.getElementById("main").addEventListener("click", function() {
  document.getElementById("mainPage").style.display = "block";
  document.getElementById("incomePage").style.display = "none";
  document.getElementById("outcomePage").style.display = "none";
  document.getElementById("aboutPage").style.display = "none";
  displayMainPage();
});

// Event listener for Income Page link
document.getElementById("income").addEventListener("click", function() {
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("incomePage").style.display = "block";
  document.getElementById("outcomePage").style.display = "none";
  document.getElementById("aboutPage").style.display = "none";
});

// Event listener for Outcome Page link
document.getElementById("outcome").addEventListener("click", function() {
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("incomePage").style.display = "none";
  document.getElementById("outcomePage").style.display = "block";
  document.getElementById("aboutPage").style.display = "none";
});

