import express from "express";
import { logger } from "./logger";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    logger.info("Server runnung on " + port);
});

app.get("*", (req: any, res) => {
    res.status(404).json(req.protocol + "://" + req.get("host") + req.originalUrl);
});
