const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require("dotenv");
dotenv.config();

const usersRoute = require("./Routes/routes");

const PORT = process.env.PORT || 3005;

app.use(cors())
app.use(express.json())
app.use("/api/users", usersRoute)



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));