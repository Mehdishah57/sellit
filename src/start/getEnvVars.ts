

const getEnvVars = () => {
  const {jwtPrivateKey} = process.env;
  if(!jwtPrivateKey){
    throw new Error("Enviornment Varriables Not Set");
  }
}

export default getEnvVars;