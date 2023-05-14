const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3636;
const cors = require("cors");
app.use(cors({origin: "*"}));

app.use(bodyparser.json());


const userRoutes = require("./routers/userRoutes");
app.use("/user", userRoutes);

const appointmentsRoutes = require("./routers/appointmentsRoutes");
app.use("/appointments", appointmentsRoutes);


app.listen(port, () => {
    console.log(`listening to port:${port}`);
})