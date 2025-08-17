import express = require("express");
const movieRoutes = require("../src/features/movie/Routes");
const cors= require('cors')
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use("/movies", movieRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
