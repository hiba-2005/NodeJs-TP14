
# 🚀 Collab Tasks Live

Application web full-stack de gestion collaborative de tâches en temps réel développée avec Node.js, Express, MongoDB, React et Socket.IO.

---

# 📌 Description

Cette application permet à plusieurs utilisateurs de gérer des tâches collaboratives en temps réel sans recharger la page.

Les utilisateurs peuvent :

- Ajouter des tâches
- Modifier l’état des tâches
- Supprimer des tâches
- Filtrer les tâches
- Assigner des tâches à des utilisateurs
- Voir les changements en temps réel grâce à Socket.IO

---

# 🛠️ Technologies utilisées

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- dotenv
- cors

## Frontend
- React.js
- Axios
- Socket.IO Client
- CSS3

---

# 📂 Structure du projet

```bash
collab-tasks-live/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── hooks/
    │   ├── App.js
    │   └── App.css
    └── package.json
````

---

# ⚙️ Installation

## 1️⃣ Cloner le projet

```bash
git clone https://github.com/votre-compte/collab-tasks-live.git
```

---

# 🔧 Installation du Backend

```bash
cd backend
npm install
```

Créer un fichier `.env`

```env
PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/collab_tasks_db
CLIENT_URL=http://localhost:3000
```

Lancer le serveur :

```bash
npm run dev
```

---

# 💻 Installation du Frontend

```bash
cd frontend
npm install
npm start
```

---

# 🌐 URL de l'application

Frontend :

```text
http://localhost:3000
```

Backend API :

```text
http://localhost:5000
```

---

# ✨ Fonctionnalités

✅ Ajout de tâches
✅ Suppression de tâches
✅ Gestion des priorités
✅ Attribution des tâches
✅ Filtrage des tâches
✅ Mise à jour en temps réel
✅ Interface responsive moderne

---

# 🔄 Fonctionnement temps réel

Socket.IO permet de synchroniser automatiquement les tâches entre plusieurs utilisateurs connectés.

Lorsqu’une tâche est :

* ajoutée
* supprimée
* modifiée

les changements apparaissent instantanément chez tous les utilisateurs.

---

# 📸 Exemple de tâche

https://github.com/user-attachments/assets/e3237fab-3c39-4ef7-8e7f-5f6de7d10c98


```text
Titre :
Finaliser le certificat Web avancé

Description :
Tester le backend, corriger les bugs et finaliser la documentation.

Assignée à :
Hiba

Priorité :
Haute



```

---

# 👨‍💻 Auteur

NOM : OUIROUANE HIBA 

Projet réalisé dans le cadre du module :

**Développement web full-stack avec JavaScript**

---

# 📚 Concepts utilisés

* API REST
* CRUD MongoDB
* React Hooks
* Communication client/serveur
* WebSockets
* Temps réel avec Socket.IO
* Architecture Full Stack

---

# ✅ Résultat

Application collaborative moderne permettant la gestion des tâches en temps réel avec une architecture complète MERN simplifiée.

```
```
