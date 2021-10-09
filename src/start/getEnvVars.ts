

const getEnvVars = () => {
  const {jwtPrivateKey, CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
    REFRESH_TOKEN,
    CORS_ORIGIN,
    MONGO_SERVER} = process.env;
  if(!jwtPrivateKey || !CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN || !CORS_ORIGIN || !REDIRECT_URI || !MONGO_SERVER){
    throw new Error("Enviornment Varriables Not Set");
  }
}

export default getEnvVars;