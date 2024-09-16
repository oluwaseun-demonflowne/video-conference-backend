import express from "express";

const app = express();
app.use(express.urlencoded({ extended: false }));

const PORT = 5002;

process.on("uncaughtException", (err) => {
    console.log(`Error: $err: ${err.message}`);
    console.log(`Shutting down the server due to uncaught Expectation`);
    process.exit(1);
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
