import cors, { CorsOptions } from "cors";

const options: CorsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200,
  exposedHeaders: ["set-cookie"],
};

export default cors(options);
