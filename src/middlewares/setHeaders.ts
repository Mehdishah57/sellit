import handleError from './../handleError';

const setHeaders: any = (req:any,res:any,next:any) => {
  res.header('Access-Control-Allow-Origin', `${process.env.CORS_ORIGIN}`);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header( 'Access-Control-Allow-Credentials',true);
  next();
}

export default setHeaders;