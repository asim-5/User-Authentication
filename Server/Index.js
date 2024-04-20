const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const bcrypt = require('bcrypt'); // Import bcrypt
const UserModel = require('./Model/User');

const app = express();
app.use(express.json());
app.use(cors());

const CONNECTION_STRING =                                                                                                           "mongodb+srv://asimn6062:<password>@authentication.eszumjc.mongodb.net/?retryWrites=true&w=majority&appName=Authentication";

app.post('/Login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                res.json("Success");
            } else {
                res.json("Password is incorrect");
            }
        } else {
            res.json("Unable to find email");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
});

app.post('/Register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email: email });
        if (existingUser) {
            // return res.status(400).json("Email is already in use"); // Generate error if email is not unique
            res.json("Email is already in use")

        }
        else{
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const newUser = await UserModel.create({ firstName, lastName, email, password: hashedPassword }); // Store the hashed password
        res.json(newUser);
    }
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
});


mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
});

app.listen(3001, () => {
    console.log("Server is running");
});
