# 🧪 TestComplete 101 — Desktop Test Automation Project

![SmartBear](https://img.shields.io/badge/SmartBear-TestComplete-blue?logo=smartbear)
![Platform](https://img.shields.io/badge/Platform-Windows-blue)
![Project Type](https://img.shields.io/badge/Type-GUI%20Automation-informational)
![Status](https://img.shields.io/badge/Status-Working-green)

This is a beginner-friendly automation project using **SmartBear TestComplete**, built to demonstrate how to create structured, repeatable test scenarios for Windows desktop applications. It combines **keyword tests**, **name mapping**, **checkpoints**, and basic scripting techniques.

---

## 📌 Project Highlights

- ✅ Automates basic UI workflows in a sample desktop app
- ✅ Combines record/playback and modular scripting
- ✅ Implements checkpoints (property, region, table)
- ✅ Demonstrates data-driven testing (from CSV)
- ✅ Generates detailed test logs and screenshots
- ✅ Fully built using TestComplete's built-in tools

> ⚠️ Note: This project uses a generic sample app. You can replace it with your own executable under `TestedApps`.

---

## 🛠 Prerequisites

To run this project, you will need:

- 🧰 [SmartBear TestComplete](https://smartbear.com/product/testcomplete/overview/) (Windows only)
- 📦 A test application (you can use Notepad or any .exe of your choice)
- 🖥️ Microsoft Windows (any version compatible with TestComplete)
- 🗃️ Microsoft Excel or any CSV reader (for DDT scenarios)

---

## 🚀 How to Set Up and Run

1. **Clone the repository**

```bash
git clone https://github.com/willypess/TestComplete101.git
````

2. **Open TestComplete** and load the project suite file:

```
TestComplete101/TestComplete101.pjs
```

3. **Replace the tested application**

   * Go to **TestedApps**
   * Edit or replace the existing entry with the path to your test app (e.g., `C:\Windows\System32\notepad.exe`)

4. **Optional:** Update the data source file in the `Data/` folder if running DDT tests.

5. **Run the tests** using:

   * Keyword Test panel
   * Project Explorer > right-click a test > "Run"

---

## 🗂 Project Structure

```
TestComplete101/
├── KeywordTests/
│   ├── LoginTest.tcKDTest
│   └── SampleFlow.tcKDTest
├── NameMapping/
│   └── NameMapping.tcNM
├── TestedApps/
│   └── (replace with your .exe)
├── Data/
│   └── users.csv (example DDT source)
├── Stores/ (for regions, objects, files)
├── Logs/ (auto-generated test results)
└── TestComplete101.pjs (project suite)
```

---

## 📈 What is covered

* How to structure an automation project in TestComplete
* Use of reusable keyword test components
* How to work with checkpoints for UI validations
* Integrate external data files for parameterized tests
* Generate test logs and screenshots on execution

---

## 🧪 Sample Test Scenarios

> The following examples can be replaced or extended based on your target app.

* [x] Launch and close the application
* [x] Simulate login with multiple credentials
* [x] Validate form inputs and button states
* [x] Use property checkpoints to assert behavior

---
