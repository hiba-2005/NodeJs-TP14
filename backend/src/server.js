import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Server } from "socket.io";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PATCH", "DELETE"]
  }
});

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("API Collab Tasks fonctionne correctement");
});

io.on("connection", (socket) => {
  console.log("Utilisateur connecté :", socket.id);

  socket.on("new-task", (task) => {
    socket.broadcast.emit("receive-new-task", task);
  });

  socket.on("update-task", (task) => {
    socket.broadcast.emit("receive-update-task", task);
  });

  socket.on("delete-task", (id) => {
    socket.broadcast.emit("receive-delete-task", id);
  });

  socket.on("disconnect", () => {
    console.log("Utilisateur déconnecté :", socket.id);
  });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connecté");

    server.listen(process.env.PORT, () => {
      console.log(`Serveur lancé sur http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Erreur MongoDB :", error.message);
  });