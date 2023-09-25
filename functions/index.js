const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const express = require("express");
const app = express();

// GET endpoint para obtener datos de Firestore
app.get("/task", async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection("task").get();
    const data = snapshot.docs.map((doc) => doc.data());
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener datos: ", error);
    return res.status(500).json({error: "Error al obtener datos"});
  }
});

// POST endpoint para agregar una nueva tarea
app.post("/task", async (req, res) => {
  const newTask = req.body;
  try {
    // Agrega una nueva tarea con un ID autogenerado
    const docRef = await admin.firestore().collection("task").add(newTask);
    return res.status(201).json({message: "Tarea agregada con ID: "+docRef.id});
  } catch (error) {
    console.error("Error al agregar la tarea: ", error);
    return res.status(500).json({error: "Error al agregar la tarea"});
  }
});

// PUT endpoint para marcar una tarea como completada por su ID
app.put("/task/:id/complete", async (req, res) => {
  const taskId = req.params.id;

  try {
    const querySnapshot = await admin
        .firestore()
        .collection("task")
        .where("id", "==", taskId)
        .get();

    if (querySnapshot.empty) {
      return res.status(404).json({error: "Tarea no encontrada"});
    }

    const documentSnapshot = querySnapshot.docs[0];
    await documentSnapshot.ref.update({completed: true});

    return res.status(200).json({message: "Tarea completada"});
  } catch (error) {
    console.error("Error al completar la tarea: ", error);
    return res.status(500).json({
      error: "Error al completar la tarea",
      details: error.message,
    });
  }
});

// PUT endpoint para editar la descripción y fecha de una tarea por su id
app.put("/task/:id", async (req, res) => {
  const taskId = req.params.id;
  const updatedData = req.body;
  try {
    // Actualiza la descripción y fecha en Firestore
    await admin.firestore().collection("task").doc(taskId).update(updatedData);
    return res.status(200).json({message: "Tarea actualizada"});
  } catch (error) {
    console.error("Error al actualizar la tarea: ", error);
    return res.status(500).json({error: "Error al actualizar la tarea"});
  }
});

// DELETE endpoint para eliminar una tarea por su id
app.delete("/task/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    // Elimina la tarea de Firestore por su id
    await admin.firestore().collection("task").doc(taskId).delete();
    return res.status(200).json({message: "Tarea eliminada"});
  } catch (error) {
    console.error("Error al eliminar la tarea: ", error);
    return res.status(500).json({error: "Error al eliminar la tarea"});
  }
});

// Exportar la función como un endpoint HTTP
exports.api = functions.https.onRequest(app);
