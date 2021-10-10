const setHeaders: any = (req:any,res:any,next:any) => {
  res.setHeader('Access-Control-Allow-Origin', `${process.env.CORS_ORIGIN}`);
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader( 'Access-Control-Allow-Credentials',true);
  next();
}

export default setHeaders;