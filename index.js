const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session =  require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());

app.listen(5000, () => console.log("Server running on 5000"));

const auth = require("./routes/auth");
const user = require("./routes/user");
const layanan = require("./routes/layanan");
const authConfig = require("./config/authConfig");

app.use(
    session({
        name: 'session-id',
        secret: 'scret',
        saveUninitialized: false,
        resave: false,
        cookie: {
            expires: 600000
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());
authConfig(passport);

app.use("/auth", auth);
app.use("/user", user);
app.use("/layanan", layanan);