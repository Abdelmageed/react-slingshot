//const DOMAIN = (process.env.NODE_ENV == 'production')? ''
const config = {
  PORT: process.env.PORT | 3007,
  DATA_URL: "mongodb://localhost:27017/voter"
};

export default config;