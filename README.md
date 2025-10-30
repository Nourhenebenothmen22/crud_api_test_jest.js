# 🧩 CRUD API — Node.js + Express + MongoDB + Jest

![Node.js](https://img.shields.io/badge/Node.js-v20.0.0-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red?logo=mongoose)
![Jest](https://img.shields.io/badge/Jest-Testing%20Framework-orange?logo=jest)
![Supertest](https://img.shields.io/badge/Supertest-Integration-blue)
![REST API](https://img.shields.io/badge/API-REST-blueviolet)
![License](https://img.shields.io/badge/license-MIT-yellow)

---

## 🧠 Objectif du projet

Développer une **API REST CRUD** pour la gestion des utilisateurs avec **Node.js**, **Express**, **MongoDB** et des **tests automatisés avec Jest**.  
Ce projet est conçu comme une base solide pour ajouter ensuite :
- L’authentification JWT
- La validation avec express-validator
- Le déploiement sur Render / Railway / Vercel

---

## ⚙️ Stack Technique

| Catégorie | Technologie | Rôle |
|------------|--------------|------|
| **Langage** | JavaScript (ES6) | Développement backend |
| **Serveur** | Node.js | Environnement d’exécution |
| **Framework** | Express.js | Création des routes et middlewares |
| **Base de données** | MongoDB + Mongoose | Persistance et gestion des schémas |
| **Tests** | Jest + Supertest | Tests unitaires & d’intégration |
| **Variables d’environnement** | dotenv | Gestion des configurations |
| **Contrôle de version** | Git & GitHub | Versionning & collaboration |

---

crud-api/
│
├── src/
│ ├── app.js # Configuration principale de l'application Express
│ ├── server.js # Point d'entrée du serveur
│ │
│ ├── models/ # 📦 Schémas Mongoose
│ │ └── user.model.js # Modèle utilisateur (User)
│ │
│ ├── routes/ # 🧭 Gestion des routes API
│ │ └── user.routes.js # Routes CRUD pour les utilisateurs
│ │
│ └── controllers/ # ⚙️ Logique métier
│ └── user.controller.js # Contrôleur utilisateur
│
├── tests/ # 🧪 Tests avec Jest
│ └── user.test.js
│
├── .env # Variables d'environnement (non versionné)
├── .gitignore # Fichiers ignorés par Git
├── package.json # Dépendances et scripts du projet
└── README.md # Documentation du projet


## 🚀 Installation & Lancement

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/Nourhenebenothmen22/crud_api_test_jest.js.git

2️⃣ Installer les dépendances
npm install


