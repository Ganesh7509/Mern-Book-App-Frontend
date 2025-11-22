# 📚 MERN Book Store — Frontend

A simple and clean frontend for the MERN Book Store application.  
This project allows users to **add, update, delete, and view books** through a responsive UI.  
The frontend is deployed on **Vercel**.
## 🚀 Live Demo  
🔗 **Frontend URL:** https://mern-book-app-frontend.vercel.app/

---

## 🛠️ Tech Stack  
- **React.js**
- **Axios** (API Calls)
- **CSS** (Custom Styling)
- **Vercel** (Deployment)

---

## 📂 Project Structure  
client/
│── src/
│ ├── components/
│ │ ├── Home.jsx
│ │ └── Navbar.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
│── package.json


---

## 📌 Features  
✔ Add new books  
✔ Update existing books  
✔ Delete books  
✔ View all books in a table  
✔ Backend connected via REST API  
✔ Fully responsive UI  

---

## 🔗 API Endpoints Used  
The frontend communicates with the backend (Render) using these endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Fetch all books |
| POST | `/add-book` | Add new book |
| PUT | `/update/:id` | Update book |
| DELETE | `/delete/:id` | Delete book |

**Base URL:**  
https://mern-book-app-backend-3usw.onrender.com
---

## 📘 Important Components  

### **Home.jsx**
- Displays form to create/edit books  
- Displays all books in table  
- Handles delete, update, fetch functions

### **Navbar.jsx**
Simple navbar with app name & menu items.

---

## ▶️ Run Project Locally  


npm install
npm run dev


---
## 🌐 Deployment  
The app is deployed on **Vercel**.
---

## 🙌 Author  
**Ganesh Kunde**  
Frontend Developer | MERN Stack  
