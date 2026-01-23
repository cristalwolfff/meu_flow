# 🎙️ Meu Flow: Hands-Free Voice Command Engine
*(A Native Web Speech API Implementation for Accessibility)*

![JavaScript](https://img.shields.io/badge/Core-Vanilla_JS_(ES6)-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Web API](https://img.shields.io/badge/API-Web_Speech_Recognition-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)
![Accessibility](https://img.shields.io/badge/Focus-A11y_&_HCI-success?style=for-the-badge&logo=accessibility&logoColor=white)

> **"When physical input fails, voice takes over."**
> A lightweight voice-control interface developed to bridge the gap between intent and action without keyboard/mouse dependency.

---

## 🎯 The "Broken Arm" Challenge
This project was born out of necessity, not just curiosity.
During a period of temporary physical disability (arm injury), standard input methods (keyboard/mouse) became impossible. I needed a way to maintain digital productivity and navigate the web **hands-free**.

Instead of downloading heavy proprietary software, I engineered a lightweight, browser-native solution to map natural language to DOM actions.

## 💡 The Architecture
The application leverages the browser's native **Web Speech API (`webkitSpeechRecognition`)** to process audio input directly on the client side.
It bypasses the need for external NLP servers, reducing latency and ensuring immediate feedback for navigation commands.

---

## ⚙️ Key Features
* **Real-Time Phonetic Mapping:** Instant transcription of voice commands to text.
* **Voice-Driven DOM Manipulation:**
    * *"Scroll Down"* / *"Scroll Up"* triggers smooth scrolling events.
    * *"Dark Mode"* dynamically toggles CSS classes for visual comfort.
* **Visual Feedback Loop:** Displays exactly what the engine "heard" on screen, providing immediate confirmation to the user (crucial for accessibility tools).

---

## 🚀 How to Run (No Installation Required)
This is a **static, dependency-free** project. It runs directly in the browser.

**⚠️ System Requirement:** Please use **Google Chrome** or **Microsoft Edge** (Chromium-based browsers) as they have full support for the `webkitSpeechRecognition` API.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/cristalwolfff/meu_flow.git](https://github.com/cristalwolfff/meu_flow.git)
    ```
2.  **Open the Application:**
    * Navigate to the folder.
    * Double-click `index.html`.
3.  **Grant Permissions:**
    * Click "Allow" when the browser requests microphone access.
    * *Start speaking commands like "Rolar para baixo" (Scroll down).*

---

## 🛠️ Tech Stack
* **JavaScript (ES6+):** Logic for command parsing (Switch Case) and Event Listeners.
* **Web Speech API:** Native browser interface for Speech-to-Text conversion.
* **HTML5/CSS3:** Semantic structure and responsive UI.

---
*Developed by [Cristalwolf](https://github.com/cristalwolfff) // AI & Accessibility Engineer*
