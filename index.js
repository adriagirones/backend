const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

/**
 * ROUTE ROOT (OBLIGATORIA)
 */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/**
 * LISTEN (OBLIGATORIO 0.0.0.0)
 */
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
