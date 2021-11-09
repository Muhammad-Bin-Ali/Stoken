import cors, { CorsOptions } from "cors";

const options: CorsOptions = {
  origin: [process.env.WEBSITE_URL!],
  credentials: true,
  optionsSuccessStatus: 200,
  exposedHeaders: ["set-cookie"],
};

export default cors(options);
