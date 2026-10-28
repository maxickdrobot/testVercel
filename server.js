import express from "express";

const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send("It's test Vercel's server");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
