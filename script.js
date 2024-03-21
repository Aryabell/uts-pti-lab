// Script for Money Tracker

// Retrieve user data from input or storage
let username = ""; // Initialize to empty string
let balance = 0; // Initialize to 0
let transactions = []; // Initialize to an empty array

// Function to display username in navbar
function displayUsername() {
  document.getElementById("username").innerText = username;
}

// Function to display balance and transactions
function displayMainPage() {
  let balanceElement = document.getElementById("balance");
  balanceElement.innerHTML = "<h3>Saldo sekarang: " + balance + "</h3>";

  let transactionsElement = document.getElementById("transactions");
  transactionsElement.innerHTML = "<h4>Daftar Transaksi:</h4>";
  transactions.forEach(transaction => {
    let transactionItem = document.createElement("div");
    transactionItem.innerHTML = "<p>Nama Transaksi: " + transaction.name + ", Nominal: " + transaction.amount + ", Kategori: " + transaction.category + "</p>";
    if (transaction.type === "Income") {
      transactionItem.style.color = "green"; // Pemasukkan ditandai dengan warna hijau
    } else if (transaction.type === "Outcome") {
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

// You would need to add event listeners for form submissions on Income and Outcome pages
// Retrieve form data and process transactions accordingly

