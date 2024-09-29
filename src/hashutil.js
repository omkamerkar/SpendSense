import CryptoJS from "crypto-js";

const hashTransaction = (transaction) => {
  // Convert transaction object to string
  const transactionString = JSON.stringify(transaction);
  
  // Hash the transaction string
  const hash = CryptoJS.SHA256(transactionString).toString(CryptoJS.enc.Hex);
  
  return hash;
};
