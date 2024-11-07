const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Hi Everyone.");
});



app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));