/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "./Header";
import BuyMeACoffee from "./BuyMeACoffee";
import "./App.css"

function App() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [currentIncome, setCurrentIncome] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [perSecondIncome, setPerSecondIncome] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isCounting) {
      interval = setInterval(() => {
        setCurrentIncome((prevIncome) => prevIncome + perSecondIncome);
      }, 10); // 10ms'lik interval
    }
    return () => clearInterval(interval);
  }, [isCounting, perSecondIncome]);

  const startCounting = () => {
    const secondsInWorkMonth = 30 * 8 * 60 * 60; // Ayda 30 gün, günde 8 saat çalışıyoruz
    const calculatedPerSecond = monthlyIncome / secondsInWorkMonth; // Saniyelik kazanç
    setPerSecondIncome(calculatedPerSecond / 100); // 10ms başına düşen kazanç
    setCurrentIncome(0);
    setIsCounting(true);
  };

  return (
    <div style={styles.container}>
      {!isCounting ? (
        <div style={styles.inputSection}>
          <h1>Aylık Kazancınızı Girin:</h1>
          <input
            type="number"
            placeholder="Aylık kazancınız"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            style={styles.input}
          />
          <button onClick={startCounting} style={styles.button}>
            Başlat
          </button>
        </div>
      ) : (
        <div>
          <Header />
          <h2 style={styles.income}>{currentIncome.toFixed(5)} TL</h2>
        </div>
      )}
      <BuyMeACoffee />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  inputSection: {
    textAlign: "center",
  },
  input: {
    padding: "10px",
    margin: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  income: {
    fontSize: "48px",
    color: "#4CAF50",
    fontWeight: "bold",
  },
};

export default App;
