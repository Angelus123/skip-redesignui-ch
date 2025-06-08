# 🛠️ Skip Selection UI Redesign

This project is a redesign of the **"Choose your skip size"** page as part of a frontend development challenge. It focuses on a modern layout, responsiveness, and clean React, TypeScript + Tailwind CSS code.

---

## ✅ Challenge Goal

Redesign the page located at the “Choose your skip size” step of the booking journey, while keeping the functionality unchanged.

---

## ✨ Features

- Complete redesign of the "Choose your skip size" page for a fresh, user-friendly experience
- Fully responsive "Choose your skip size" page for  all screen
- Dynamic rendering of skip data 

### Additional Features
- Added support for both dark and light modes, allowing users to switch themes for better accessibility and 
comfort
- Implemented a footer to enhance customer satisfaction

## Suggested Features in future
- There should be a filter component to efficiently search and filter skips like when the available options  are more, improving usability and performance for large datasets
- Supports keyword search and size/category filtering for quick navigation
- Pagination support to efficiently navigate through large lists of skips, ensuring smooth user experience even with extensive datasets


---

## 🧠 Why Vite,TypeScript, and Tailwind CSS

I chose **Vite**, **TypeScript**, and **Tailwind CSS** for this project:

- **Vite**: Fast dev/build, instant HMR, and minimal config.
- **TypeScript**: Adds static typing for safer, more maintainable code.
- **Tailwind CSS**: Utility-first styling for rapid, responsive UI development.

Together, they enable a modern, efficient, and scalable frontend workflow.
---




## 📁 Project Structure
```bash
├── public/                 
├── src/
│   ├── assets/              # Images and static resources
│   ├── components/          # Reusable UI components (SkipCard, ThemeToggle,etc.)
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page-level components (SkipSelectionPage.tsx)
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions/helpers
│   ├── App.tsx              
│   ├── main.tsx             
│   └── index.css           
├── tailwind.config.js     
├── postcss.config.js       
├── tsconfig.json           
├── vite.config.ts           
├── package.json             
└── README.md                
```
## 🚀 Getting Started

1. Clone the project

```bash
git clone https://github.com/Angelus123/skip-redesignui-ch.git
cd skip-redesignui-ch
```
2. Install dependencies

```bash
npm install
```
3. Start the development server

```bash
npm run dev
```

4. Open http://localhost:3000 in your browser.
```
🌐 Live Preview
👉 Deployed on: [https://9fsx5q-3000.csb.app]

## 📸 Preview

![Skip Selection UI Preview](https://raw.githubusercontent.com/Angelus123/skip-redesignui-ch/dev/src/assets/skip-selection-preview.png)


![Skip Mobile Preview](https://raw.githubusercontent.com/Angelus123/skip-redesignui-ch/dev/src/assets/skip-cards-phone.PNG)



📝 Notes
Designed using Tailwind CSS utility classes for faster development and responsive design.

📫 Contact
Feel free to reach out with feedback or questions via GitHub Issues.
