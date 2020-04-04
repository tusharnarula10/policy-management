let express = require("express");
const routes = require("./routes/routes");
const app = express();

app.use("/", routes);

app.listen(3001, () => {
  console.log("server has started on http://localhost:3000");
});
