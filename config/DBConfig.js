import mongoose from "mongoose";
import Keys from "../config/Keys";

mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

if (Keys.NODE_ENV === "development") {
  mongoose.connect(Keys.LOCAL_DB_STRING);
} else {
  mongoose.connect(
    "mongodb://" + Keys.DB_HOST + ":" + Keys.DB_PORT + "/" + Keys.DB_NAME,
    { user: Keys.DB_USER, pass: Keys.DB_PASS }
  );
}

mongoose.connection.on("error", err =>
  console.log("mongoose connection error: " + err)
);

export default mongoose.connection;
