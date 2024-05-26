const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");

const cors = require("./middlewares/cors");

const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");
const apiRouter = require("./routes/api");

const connectToDatabase = require("./database/connect");

const app = express();
const PORT = process.env.PORT || 3000;
connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  apiRouter,
  pagesRouter,
  express.static(path.join(__dirname, "public")),
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
