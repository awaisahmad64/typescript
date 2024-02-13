type JSONResponse = {
  version: number;
  payloadSize: number;
  outOfStack: boolean;
  update:(retryTimes:number)=> void;

};
