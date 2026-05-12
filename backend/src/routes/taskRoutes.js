import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors du chargement des tâches" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: "Impossible d’ajouter la tâche" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Tâche introuvable" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: "Erreur de modification" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Tâche introuvable" });
    }

    res.json({ message: "Tâche supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur de suppression" });
  }
});

export default router;