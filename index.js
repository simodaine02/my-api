const express = require("express");
const cors = require("cors");
const app = express();

// Usa la porta fornita da Render o la porta 3000 per esecuzioni locali
const port = process.env.PORT || 3000;

// Middleware per interpretare il corpo delle richieste come JSON
app.use(express.json());

// Usa il middleware cors per consentire richieste da qualsiasi origine
app.use(cors());

// Un endpoint di esempio che restituisce un messaggio
app.get("/", (req, res) => {
  res.json({ message: "Benvenuto alla mia API!" });
});

// Un endpoint che restituisce un elenco di dati
app.get("/posts", (req, res) => {
  const posts = [
    {
      id: 1,
      title: "Primo post",
      content: "Questo è il contenuto del primo post",
    },
    {
      id: 2,
      title: "Secondo post",
      content: "Questo è il contenuto del secondo post",
    },
  ];
  res.json(posts);
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
