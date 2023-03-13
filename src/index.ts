import express from 'npm:express';

import usersRoutes from './routes/users.routes.ts';

import './config/db.ts';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send({
        message: "Hello"
    })
});

app.use(usersRoutes);

app.listen(3000, () => {
    console.log("Server is running in the port 3000");
});