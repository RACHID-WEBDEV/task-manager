const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Connection Successful 🤙 🦾"));

const app = require("./app");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running now on ${port}...`);
});
