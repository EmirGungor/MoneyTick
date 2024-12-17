# Real-Time Income Tracker ⏱️💰

This project is a fun and dynamic React application that shows your **real-time earnings** based on an **8-hour workday**.

## 📋 Features
- Enter your monthly income, and the app calculates your **per-second earnings**.
- Earnings are updated **every 10 milliseconds** for a smooth and real-time experience.
- Assumes a **work schedule of 8 hours per day, 30 days a month**.

## 🚀 How It Works
1. Run the application.
2. Enter your monthly income into the input field.
3. Click **Start** and watch your earnings grow live in real time!

## 🧮 Calculation Logic
- You work **30 days per month, 8 hours per day**.
- Total work time per month:  
  `30 days × 8 hours × 60 minutes × 60 seconds = 86,400 seconds`
- Your monthly income is divided by **86,400 seconds** to calculate your per-second earnings.
- For smoother updates, earnings are incremented every 10ms:


## 🛠️ Technologies Used
- React.js
- JavaScript (ES6+)
- Inline CSS Styling

## 📦 How to Run the Project
1. Clone the repository:
 ```bash
 git clone https://github.com/username/project-name.git
 cd project-name
 npm install
 npm start
