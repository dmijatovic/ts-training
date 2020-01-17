import {Router, Request, Response} from 'express'

const router = Router()

router.get('/',(reg:Request,res:Response)=>{
  res.send(`
    <form method="POST">
      <div>
        <input name="email" type="email" placeholder="Email" />
      </div>
      <div>
        <input name="password" type="password" placeholder="Password" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  `)
})

export {
  router
}