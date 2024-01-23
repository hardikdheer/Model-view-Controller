const express = require("express")

// const users = require("./MOCK_DATA.json");

const { connectMongoDb } = require("./connection")
const { logReqRes } = require("./middlewares/index")
const { timeStamp } = require("console");
const Userouter = require("./routes/user")

const app = express();

const PORT = 8000

connectMongoDb("mongodb://127.0.0.1:27017/hardik-app-1").then(() => {
    console.log("MongoDB started")
})




app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));
app.use("/api/users", Userouter)

app.listen(PORT, () => console.log(`Server started on ${PORT}`))






