// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  console.log("Contact form received:", req.body);
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
