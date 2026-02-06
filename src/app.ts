import "reflect-metadata";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const router = express.Router();

app.use('/v1/auth', router);

router.get('/', (_req, res) => {
  res.send("authorization microservice is runinng...");
})  

process.loadEnvFile();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Auth server is running on port: ${PORT}`);
})

export default app;             
