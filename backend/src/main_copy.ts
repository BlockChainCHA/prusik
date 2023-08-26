import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { getMessengerContract } from './constracts/messenger.contract';
import { getCTokenContract } from './constracts/ctoken.contract';
import { ethers } from 'ethers';
dotenv.config();



const app: Express = express();
const port = process.env.PORT;

app.options('*', cors());
 
app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});



app.get('/messenger', async (req: Request, res: Response) => {
  const contract = getMessengerContract();
  const response = await contract.getMessage();
  res.json({
    message: response
  });
});

app.put('/messenger', async (req: Request, res: Response) => {
  const message = req.query.message;
  const contract = getMessengerContract();
  const response = await contract.setMessage(message);
  res.json({
    message: response
  });
});

app.get('/ctoken/totalSupply', async (req: Request, res: Response) => {
  const contract = getCTokenContract();
  const response = await contract.totalSupply();
  
  res.json({
    totalSupply: ethers.formatEther(response)
  });
});

app.get('/ctoken/balanceOf', async (req: Request, res: Response) => {
  const contract = getCTokenContract();
  const balanceOf = await contract.balanceOf(req.query.address);
    
  res.json({
    balanceOf: ethers.formatEther(balanceOf)
  });
});

app.get('/ctoken/transfer', async (req: Request, res: Response) => {
  const {address, amount} = req.query 

  const contract = getCTokenContract();
  const result = await contract.transfer(address, ethers.parseUnits(amount as string, 18));

  res.json({
    transfer: result
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: DApp API Server is running at http://localhost:${port}`);
});
