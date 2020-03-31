const express = require("express");
// const cors = require("cors");
const port = 8000;
const db_name = "jokes";

require("./config/mongoose.config")(db_name);

const app = express();
// app.use(cors());

// req.body will be undefined without this
app.use(express.json());

// long-form import routes function and execute
// const exportedRoutesFunc = require("./routes/city.routes");
// exportedRoutesFunc(app);

// shorthand import routes function and execute
require("./routes/joke.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
