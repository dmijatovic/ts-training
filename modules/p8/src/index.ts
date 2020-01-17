import express,{Request, Response} from 'express'
import {router} from "./routes"

const app = express()

app.use(router)


// app.get('/',(reg:Request,res:Response)=>{
//   res.send("<h1>Express works</h1>")
// })

app.listen(3000,()=>{
  console.log("Express on port 3000")
})
