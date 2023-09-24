const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const express = require("express");
const app = express();

// GET endpoint para obtener datos de Firestore
app.get("/api/data", async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection("task").get();
    const data = snapshot.docs.map((doc) => doc.data());
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener datos: ", error);
    return res.status(500).json({error: "Error al obtener datos"});
  }
});

// Exportar la función como un endpoint HTTP
exports.api = functions.https.onRequest(app);
