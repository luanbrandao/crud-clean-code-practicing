
import { Request, Response } from 'express'

// Adapter pois o express espera nas rotas o (res,req)
export const adapterRoute = (controller: any) => {
return async (req: Request, res: Response) => {
  const httpRequest: any= {
    body: req.body,
    params: req.params
  }
  
  const httpResponse = await controller.handle(httpRequest)
  
  if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      console.log('ok')
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      console.log('fail')
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
